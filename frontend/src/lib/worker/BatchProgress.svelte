<script lang="ts">
  import { onDestroy } from 'svelte'
  import type { WorkerBatch } from '../types/worker'
  import TaskCard from './TaskCard.svelte'

  let { batch }: { batch: WorkerBatch } = $props()

  let now = $state(Date.now())
  let ticker: ReturnType<typeof setInterval> | null = null

  $effect(() => {
    if (batch.status === 'running') {
      ticker = setInterval(() => { now = Date.now() }, 100)
    } else {
      if (ticker) { clearInterval(ticker); ticker = null }
    }
  })

  onDestroy(() => { if (ticker) clearInterval(ticker) })

  const completedCount = $derived(batch.tasks.filter(t => t.status === 'completed').length)
  const progressPct = $derived(batch.task_count > 0 ? (completedCount / batch.task_count) * 100 : 0)

  const liveElapsedMs = $derived(
    batch.status === 'running'
      ? now - new Date(batch.started_at).getTime()
      : (batch.elapsed_ms ?? 0)
  )

  const modeLabel = $derived(batch.mode === 'parallel' ? '並列処理' : '直列処理')
  const modeColor = $derived(batch.mode === 'parallel' ? '#0071e3' : '#34c759')
</script>

<div style="
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;
">
  <!-- Header -->
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="
        font-size: 13px;
        font-weight: 600;
        color: white;
        background: {modeColor};
        padding: 3px 10px;
        border-radius: 980px;
        font-family: 'SF Pro Text', system-ui, sans-serif;
      ">{modeLabel}</span>
      <span style="font-size: 13px; color: #86868b; font-family: 'SF Pro Text', system-ui, sans-serif;">
        Batch #{batch.id} · {batch.task_count}タスク · {batch.rpm_limit} RPM
      </span>
    </div>
    <div style="font-size: 22px; font-weight: 600; color: #1d1d1f; font-family: 'SF Pro Display', system-ui, sans-serif; font-variant-numeric: tabular-nums;">
      {(liveElapsedMs / 1000).toFixed(1)}s
    </div>
  </div>

  <!-- Progress bar -->
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="font-size: 12px; color: #86868b; font-family: 'SF Pro Text', system-ui, sans-serif;">
        {completedCount} / {batch.task_count} 完了
      </span>
      <span style="font-size: 12px; font-weight: 600; color: #0071e3; font-family: 'SF Pro Text', system-ui, sans-serif;">
        {progressPct.toFixed(0)}%
      </span>
    </div>
    <progress
      class="progress {batch.mode === 'parallel' ? 'progress-primary' : 'progress-success'} w-full"
      value={progressPct}
      max="100"
    ></progress>
  </div>

  <!-- Task grid -->
  <div style="
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 8px;
  ">
    {#each batch.tasks as task (task.id)}
      <TaskCard {task} />
    {/each}
  </div>

  {#if batch.status === 'completed'}
    <div style="
      background: #f0fff4;
      border: 1px solid #34c759;
      border-radius: 10px;
      padding: 12px 16px;
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      color: #1d7a3a;
      font-family: 'SF Pro Text', system-ui, sans-serif;
    ">
      完了 — 合計 {batch.elapsed_ms} ms ({(batch.elapsed_ms! / 1000).toFixed(2)}s)
    </div>
  {/if}
</div>
