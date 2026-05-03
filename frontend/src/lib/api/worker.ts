import type { BatchMode, BatchSummary, WorkerBatch } from '../types/worker'

const BASE = 'http://localhost:8000'

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let detail = `HTTP ${res.status}`
    try {
      const body = await res.json()
      if (typeof body.detail === 'string') detail = body.detail
    } catch {
      // JSON でなければ status だけ使う
    }
    throw new Error(detail)
  }
  return res.json()
}

export async function startBatch(
  mode: BatchMode,
  taskCount: number,
  rpmLimit: number,
): Promise<{ batch_id: number; status: string; started_at: string }> {
  const res = await fetch(`${BASE}/worker/batches`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mode, task_count: taskCount, rpm_limit: rpmLimit }),
  })
  return handleResponse(res)
}

export async function getBatch(batchId: number): Promise<WorkerBatch> {
  const res = await fetch(`${BASE}/worker/batches/${batchId}`)
  return handleResponse(res)
}

export async function listBatches(): Promise<BatchSummary[]> {
  const res = await fetch(`${BASE}/worker/batches`)
  return handleResponse(res)
}
