import type { BatchStatus, TaskStatus } from '../types/worker'

export const taskBadgeClass: Record<TaskStatus, string> = {
  pending: 'badge badge-ghost',
  running: 'badge badge-warning animate-pulse',
  completed: 'badge badge-success',
  failed: 'badge badge-error',
}

export const taskStatusLabel: Record<TaskStatus, string> = {
  pending: '待機中',
  running: '処理中',
  completed: '完了',
  failed: '失敗',
}

export const batchBadgeClass: Record<BatchStatus, string> = {
  running: 'badge badge-warning badge-sm',
  completed: 'badge badge-success badge-sm',
  failed: 'badge badge-error badge-sm',
}

export const batchStatusLabel: Record<BatchStatus, string> = {
  running: '実行中',
  completed: '完了',
  failed: '失敗',
}
