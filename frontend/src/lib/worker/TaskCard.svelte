<script lang="ts">
  import type { WorkerTask } from '../types/worker'
  import { taskBadgeClass, taskStatusLabel } from '../utils/statusUtils'

  let { task }: { task: WorkerTask } = $props()
</script>

<div style="
  background: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 11px; font-weight: 600; color: #86868b; font-family: 'SF Pro Text', system-ui, sans-serif;">
      Task {task.task_index + 1}
    </span>
    <span class={taskBadgeClass[task.status] ?? 'badge'} style="font-size: 10px;">
      {taskStatusLabel[task.status] ?? task.status}
    </span>
  </div>
  <div style="font-size: 12px; color: #1d1d1f; font-family: 'SF Pro Text', system-ui, sans-serif;">
    {#if task.elapsed_ms !== null}
      <span style="font-weight: 600; color: #0071e3;">{task.elapsed_ms} ms</span>
    {:else if task.status === 'running'}
      <span style="color: #ff9f0a;">実行中...</span>
    {:else}
      <span style="color: #86868b;">{task.sleep_ms} ms予定</span>
    {/if}
  </div>
</div>
