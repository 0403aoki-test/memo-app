export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed'
export type BatchMode = 'parallel' | 'serial'
export type BatchStatus = 'running' | 'completed' | 'failed'

export interface WorkerTask {
  id: number
  task_index: number
  status: TaskStatus
  sleep_ms: number
  started_at: string | null
  completed_at: string | null
  elapsed_ms: number | null
  result: string | null
}

export interface WorkerBatch {
  id: number
  mode: BatchMode
  status: BatchStatus
  task_count: number
  rpm_limit: number
  started_at: string
  completed_at: string | null
  elapsed_ms: number | null
  tasks: WorkerTask[]
}

export interface BatchSummary {
  id: number
  mode: BatchMode
  status: BatchStatus
  task_count: number
  rpm_limit: number
  elapsed_ms: number | null
  started_at: string
}
