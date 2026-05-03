<script lang="ts">
  import type { BatchMode } from '../types/worker'

  let {
    onStart,
    disabled = false,
  }: {
    onStart: (mode: BatchMode, taskCount: number, rpmLimit: number) => void
    disabled?: boolean
  } = $props()

  let taskCount = $state(10)
  let rpmLimit = $state(30)

  const intervalSec = $derived((60 / rpmLimit).toFixed(1))
</script>

<div style="
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 20px;
">
  <!-- Task count -->
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <label style="font-size: 13px; font-weight: 600; color: #1d1d1f; font-family: 'SF Pro Text', system-ui, sans-serif;">
      タスク数: <span style="color: #0071e3;">{taskCount}</span>
    </label>
    <input
      type="range"
      min="1"
      max="20"
      step="1"
      bind:value={taskCount}
      disabled={disabled}
      class="range range-primary range-sm"
    />
    <div style="display: flex; justify-content: space-between; font-size: 11px; color: #86868b;">
      <span>1</span><span>20</span>
    </div>
  </div>

  <!-- RPM limit -->
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <label style="font-size: 13px; font-weight: 600; color: #1d1d1f; font-family: 'SF Pro Text', system-ui, sans-serif;">
      RPM制限: <span style="color: #0071e3;">{rpmLimit} RPM</span>
      <span style="font-weight: 400; color: #86868b; font-size: 12px;">= {intervalSec}秒ごとに1タスク開始</span>
    </label>
    <input
      type="range"
      min="6"
      max="120"
      step="6"
      bind:value={rpmLimit}
      disabled={disabled}
      class="range range-secondary range-sm"
    />
    <div style="display: flex; justify-content: space-between; font-size: 11px; color: #86868b;">
      <span>6 RPM (10s)</span><span>120 RPM (0.5s)</span>
    </div>
  </div>

  <!-- Buttons -->
  <div style="display: flex; gap: 12px;">
    <button
      class="btn btn-primary flex-1"
      onclick={() => onStart('parallel', taskCount, rpmLimit)}
      disabled={disabled}
    >
      並列実行
    </button>
    <button
      class="btn btn-secondary flex-1"
      onclick={() => onStart('serial', taskCount, rpmLimit)}
      disabled={disabled}
    >
      直列実行
    </button>
  </div>

  {#if disabled}
    <div style="text-align: center;">
      <span class="loading loading-spinner loading-sm" style="color: #0071e3;"></span>
      <span style="font-size: 13px; color: #86868b; margin-left: 8px;">処理中...</span>
    </div>
  {/if}
</div>
