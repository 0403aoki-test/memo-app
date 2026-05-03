from __future__ import annotations

import enum
from datetime import datetime
from typing import Optional

from sqlalchemy import DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class BatchStatus(str, enum.Enum):
    running = "running"
    completed = "completed"
    failed = "failed"


class TaskStatus(str, enum.Enum):
    pending = "pending"
    running = "running"
    completed = "completed"
    failed = "failed"


class Base(DeclarativeBase):
    pass


class WorkerBatch(Base):
    __tablename__ = "worker_batches"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    mode: Mapped[str] = mapped_column(String(16))  # "parallel" | "serial"
    rpm_limit: Mapped[int] = mapped_column(Integer)
    task_count: Mapped[int] = mapped_column(Integer)
    status: Mapped[str] = mapped_column(String(16), default=BatchStatus.running)
    started_at: Mapped[datetime] = mapped_column(DateTime)
    completed_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    elapsed_ms: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)

    tasks: Mapped[list["WorkerTask"]] = relationship("WorkerTask", back_populates="batch", order_by="WorkerTask.task_index")


class WorkerTask(Base):
    __tablename__ = "worker_tasks"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    batch_id: Mapped[int] = mapped_column(Integer, ForeignKey("worker_batches.id"))
    task_index: Mapped[int] = mapped_column(Integer)
    status: Mapped[str] = mapped_column(String(16), default=TaskStatus.pending)
    sleep_ms: Mapped[int] = mapped_column(Integer)
    started_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    completed_at: Mapped[Optional[datetime]] = mapped_column(DateTime, nullable=True)
    elapsed_ms: Mapped[Optional[int]] = mapped_column(Integer, nullable=True)
    result: Mapped[Optional[str]] = mapped_column(String, nullable=True)

    batch: Mapped["WorkerBatch"] = relationship("WorkerBatch", back_populates="tasks")
