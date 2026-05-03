import asyncio
import random
import threading
import time
from concurrent.futures import ThreadPoolExecutor, wait as futures_wait
from datetime import datetime, timezone
from typing import List, Optional

import requests
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy import desc
from sqlalchemy.orm import Session

from database import SessionLocal, get_db
from models import BatchStatus, TaskStatus, WorkerBatch, WorkerTask

router = APIRouter(prefix="/worker", tags=["worker"])


# ---------------------------------------------------------------------------
# RPM Limiter
# ---------------------------------------------------------------------------

class RpmLimiter:
    """Limits task start rate to at most `rpm` tasks per minute."""

    def __init__(self, rpm: int):
        self.interval = 60.0 / rpm
        self._lock = threading.Lock()
        self._last_start = 0.0

    def acquire(self) -> None:
        with self._lock:
            now = time.monotonic()
            wait = self._last_start + self.interval - now
            if wait > 0:
                time.sleep(wait)
            self._last_start = time.monotonic()


# ---------------------------------------------------------------------------
# Pydantic schemas
# ---------------------------------------------------------------------------

class StartBatchRequest(BaseModel):
    mode: str  # "parallel" | "serial"
    task_count: int
    rpm_limit: int


class TaskOut(BaseModel):
    id: int
    task_index: int
    status: str
    sleep_ms: int
    started_at: Optional[datetime]
    completed_at: Optional[datetime]
    elapsed_ms: Optional[int]
    result: Optional[str]

    class Config:
        from_attributes = True


class BatchOut(BaseModel):
    id: int
    mode: str
    status: str
    task_count: int
    rpm_limit: int
    started_at: datetime
    completed_at: Optional[datetime]
    elapsed_ms: Optional[int]
    tasks: List[TaskOut]

    class Config:
        from_attributes = True


class BatchSummary(BaseModel):
    id: int
    mode: str
    status: str
    task_count: int
    rpm_limit: int
    elapsed_ms: Optional[int]
    started_at: datetime

    class Config:
        from_attributes = True


# ---------------------------------------------------------------------------
# Background worker logic (runs in thread executor, NOT in event loop)
# ---------------------------------------------------------------------------

def _run_task(batch_id: int, task_id: int, session_factory) -> None:
    """Execute a single task. Opens its own DB session."""
    db: Session = session_factory()
    try:
        task = db.get(WorkerTask, task_id)
        if task is None:
            return

        task.status = TaskStatus.running
        task.started_at = datetime.now(timezone.utc).replace(tzinfo=None)
        db.commit()

        # 複数のAPIを呼び出し
        urls = [
            "http://localhost:8000/health/db",
            "http://localhost:8000/",
        ]
        results = []
        for url in urls:
            try:
                response = requests.get(url, timeout=3)
                status = "✓" if response.status_code == 200 else "✗"
                results.append(f"{status} {url}")
            except Exception as e:
                results.append(f"✗ {url} ({str(e)[:50]})")

        task.completed_at = datetime.now(timezone.utc).replace(tzinfo=None)
        task.elapsed_ms = int((task.completed_at - task.started_at).total_seconds() * 1000)
        task.status = TaskStatus.completed
        task.result = " | ".join(results)
        db.commit()
    except Exception as exc:
        db.rollback()
        task = db.get(WorkerTask, task_id)
        if task:
            task.status = TaskStatus.failed
            task.result = str(exc)
            db.commit()
    finally:
        db.close()


def _run_batch(batch_id: int, session_factory) -> None:
    """Orchestrate all tasks in a batch. Runs in a dedicated thread."""
    db: Session = session_factory()
    try:
        batch = db.get(WorkerBatch, batch_id)
        if batch is None:
            return

        tasks = list(batch.tasks)
        limiter = RpmLimiter(batch.rpm_limit)
        batch_started = time.monotonic()

        if batch.mode == "parallel":
            with ThreadPoolExecutor(max_workers=len(tasks)) as executor:
                futures = []
                for task in tasks:
                    limiter.acquire()
                    future = executor.submit(_run_task, batch_id, task.id, session_factory)
                    futures.append(future)
                futures_wait(futures)
        else:
            # serial
            for task in tasks:
                limiter.acquire()
                _run_task(batch_id, task.id, session_factory)

        elapsed_ms = int((time.monotonic() - batch_started) * 1000)

        db.refresh(batch)
        batch.status = BatchStatus.completed
        batch.completed_at = datetime.now(timezone.utc).replace(tzinfo=None)
        batch.elapsed_ms = elapsed_ms
        db.commit()

    except Exception as exc:
        db.rollback()
        batch = db.get(WorkerBatch, batch_id)
        if batch:
            batch.status = BatchStatus.failed
            db.commit()
    finally:
        db.close()


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------

@router.post("/batches", status_code=202)
async def start_batch(body: StartBatchRequest, db: Session = Depends(get_db)):
    if body.mode not in ("parallel", "serial"):
        raise HTTPException(status_code=422, detail="mode must be 'parallel' or 'serial'")
    if not (1 <= body.task_count <= 20):
        raise HTTPException(status_code=422, detail="task_count must be between 1 and 20")
    if not (1 <= body.rpm_limit <= 600):
        raise HTTPException(status_code=422, detail="rpm_limit must be between 1 and 600")

    batch = WorkerBatch(
        mode=body.mode,
        rpm_limit=body.rpm_limit,
        task_count=body.task_count,
        status=BatchStatus.running,
        started_at=datetime.now(timezone.utc).replace(tzinfo=None),
    )
    db.add(batch)
    db.flush()  # get batch.id

    for i in range(body.task_count):
        task = WorkerTask(
            batch_id=batch.id,
            task_index=i,
            status=TaskStatus.pending,
            sleep_ms=random.randint(1000, 2000),
        )
        db.add(task)

    db.commit()
    db.refresh(batch)

    batch_id = batch.id

    loop = asyncio.get_event_loop()
    loop.run_in_executor(None, _run_batch, batch_id, SessionLocal)

    return {"batch_id": batch_id, "status": "running", "started_at": batch.started_at}


@router.get("/batches/{batch_id}", response_model=BatchOut)
def get_batch(batch_id: int, db: Session = Depends(get_db)):
    batch = db.get(WorkerBatch, batch_id)
    if batch is None:
        raise HTTPException(status_code=404, detail="Batch not found")
    return batch


@router.get("/batches", response_model=List[BatchSummary])
def list_batches(db: Session = Depends(get_db)):
    return db.query(WorkerBatch).order_by(desc(WorkerBatch.id)).limit(20).all()
