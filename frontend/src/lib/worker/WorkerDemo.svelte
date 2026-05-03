<script lang="ts">
  import { onDestroy } from 'svelte'
  import { getBatch, listBatches, startBatch } from '../api/worker'
  import type { BatchMode, BatchSummary, WorkerBatch } from '../types/worker'
  import BatchControls from './BatchControls.svelte'
  import BatchHistory from './BatchHistory.svelte'
  import BatchProgress from './BatchProgress.svelte'

  let currentBatch = $state<WorkerBatch | null>(null)
  let history = $state<BatchSummary[]>([])
  let running = $state(false)
  let error = $state<string | null>(null)
  let pollId: ReturnType<typeof setInterval> | null = null

  async function handleStart(mode: BatchMode, taskCount: number, rpmLimit: number) {
    error = null
    try {
      running = true
      const res = await startBatch(mode, taskCount, rpmLimit)
      startPolling(res.batch_id)
    } catch (e) {
      error = e instanceof Error ? e.message : String(e)
      running = false
    }
  }

  function startPolling(batchId: number) {
    if (pollId) clearInterval(pollId)
    pollId = setInterval(async () => {
      try {
        const batch = await getBatch(batchId)
        currentBatch = batch
        if (batch.status !== 'running') {
          stopPolling()
          running = false
          await refreshHistory()
        }
      } catch (e) {
        stopPolling()
        running = false
        error = e instanceof Error ? e.message : 'ポーリング中にエラーが発生しました'
      }
    }, 500)
  }

  function stopPolling() {
    if (pollId) { clearInterval(pollId); pollId = null }
  }

  async function refreshHistory() {
    try {
      history = await listBatches()
    } catch (e) {
      console.warn('履歴の取得に失敗:', e)
    }
  }

  onDestroy(stopPolling)

  // Load history on mount
  refreshHistory()
</script>

<div style="display: flex; flex-direction: column; gap: 24px;">
  <!-- Header -->
  <div>
    <h2 style="
      font-family: 'SF Pro Display', system-ui, sans-serif;
      font-size: 28px;
      font-weight: 600;
      color: #1d1d1f;
      margin-bottom: 6px;
      letter-spacing: -0.28px;
    ">Thread Worker デモ</h2>
    <p style="font-size: 14px; color: #86868b; font-family: 'SF Pro Text', system-ui, sans-serif; line-height: 1.5;">
      各タスクは1〜2秒のランダムな擬似処理を行います。<br>
      <strong>並列実行</strong>はスレッドで同時処理、<strong>直列実行</strong>は1件ずつ順番に処理します。<br>
      RPM制限により1分あたりのタスク開始数が制限されます。
    </p>
  </div>

  <!-- Info cards -->
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
    {#each [
      { label: 'スレッド', desc: 'Python ThreadPoolExecutor', color: '#0071e3' },
      { label: 'RPM制限', desc: '毎分タスク開始数の上限', color: '#ff9f0a' },
      { label: 'DB保存', desc: '結果をPostgreSQLに記録', color: '#34c759' },
    ] as card}
      <div style="
        background: white;
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.06);
        border-left: 3px solid {card.color};
      ">
        <div style="font-size: 13px; font-weight: 600; color: #1d1d1f; font-family: 'SF Pro Text', system-ui, sans-serif;">{card.label}</div>
        <div style="font-size: 12px; color: #86868b; margin-top: 2px; font-family: 'SF Pro Text', system-ui, sans-serif;">{card.desc}</div>
      </div>
    {/each}
  </div>

  <!-- Controls -->
  <BatchControls onStart={handleStart} disabled={running} />

  {#if error}
    <div class="alert alert-error">
      <span>{error}</span>
    </div>
  {/if}

  <!-- Current batch progress -->
  {#if currentBatch}
    <BatchProgress batch={currentBatch} />
  {/if}

  <!-- History -->
  <BatchHistory batches={history} />
</div>
