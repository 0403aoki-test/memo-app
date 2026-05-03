<script lang="ts">
  import type { BatchSummary } from '../types/worker'
  import { batchBadgeClass, batchStatusLabel } from '../utils/statusUtils'

  let { batches }: { batches: BatchSummary[] } = $props()

  function formatDate(iso: string): string {
    return new Date(iso).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }
</script>

<div style="
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
">
  <h3 style="font-size: 15px; font-weight: 600; color: #1d1d1f; font-family: 'SF Pro Text', system-ui, sans-serif; margin-bottom: 16px;">
    実行履歴
  </h3>

  {#if batches.length === 0}
    <p style="text-align: center; color: #86868b; font-size: 14px; padding: 24px 0;">まだ実行履歴がありません</p>
  {:else}
    <div class="overflow-x-auto">
      <table class="table table-sm">
        <thead>
          <tr style="font-size: 12px; color: #86868b;">
            <th>#</th>
            <th>モード</th>
            <th>タスク数</th>
            <th>RPM</th>
            <th>処理時間</th>
            <th>ステータス</th>
            <th>開始時刻</th>
          </tr>
        </thead>
        <tbody>
          {#each batches as b (b.id)}
            <tr style="font-size: 13px;">
              <td style="color: #86868b;">{b.id}</td>
              <td>
                <span style="
                  font-size: 11px;
                  font-weight: 600;
                  color: white;
                  background: {b.mode === 'parallel' ? '#0071e3' : '#34c759'};
                  padding: 2px 8px;
                  border-radius: 980px;
                ">{b.mode === 'parallel' ? '並列' : '直列'}</span>
              </td>
              <td>{b.task_count}</td>
              <td>{b.rpm_limit}</td>
              <td>
                {#if b.elapsed_ms !== null}
                  <span style="font-weight: 600; font-variant-numeric: tabular-nums;">
                    {b.elapsed_ms.toLocaleString()} ms
                  </span>
                {:else}
                  <span style="color: #86868b;">—</span>
                {/if}
              </td>
              <td>
                <span class={batchBadgeClass[b.status] ?? 'badge badge-sm'}>
                  {batchStatusLabel[b.status] ?? b.status}
                </span>
              </td>
              <td style="color: #86868b;">{formatDate(b.started_at)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
