<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let current = $state(3)
  const total = 10
</script>

<Showcase title="Daily UI #086 — Pagination" code={`<div class="flex items-center gap-1">
  <button class="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 text-gray-600 text-sm">‹</button>
  {#each pages as page}
    <button class="w-9 h-9 rounded-lg text-sm font-medium transition
      {page === current ? 'bg-violet-600 text-white shadow-md' : 'border border-gray-200 hover:bg-gray-50 text-gray-600'}">
      {page}
    </button>
  {/each}
  <button class="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm">›</button>
</div>`}>
  <div class="space-y-6 w-full">
    <!-- 基本ページネーション -->
    <Tooltip label="flex items-center gap-1 | w-9 h-9 rounded-lg border | bg-violet-600 text-white (現在ページ)">
      <div class="flex items-center gap-1">
        <button onclick={() => current = Math.max(1, current - 1)} disabled={current === 1} class="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-gray-600 text-sm transition flex items-center justify-center">‹</button>
        {#each Array(total) as _, i}
          {#if i + 1 === 1 || i + 1 === total || (i + 1 >= current - 1 && i + 1 <= current + 1)}
            <button onclick={() => current = i + 1} class="w-9 h-9 rounded-lg text-sm font-medium transition {current === i + 1 ? 'bg-violet-600 text-white shadow-md' : 'border border-gray-200 hover:bg-gray-50 text-gray-600'}">
              {i + 1}
            </button>
          {:else if i + 1 === 2 || i + 1 === total - 1}
            <span class="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">…</span>
          {/if}
        {/each}
        <button onclick={() => current = Math.min(total, current + 1)} disabled={current === total} class="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-gray-600 text-sm transition flex items-center justify-center">›</button>
      </div>
    </Tooltip>

    <!-- シンプル版 -->
    <Tooltip label="flex items-center justify-between border-t border-gray-200 pt-4">
      <div class="flex items-center justify-between border-t border-gray-200 pt-4 w-full max-w-sm text-sm">
        <button onclick={() => current = Math.max(1, current - 1)} class="flex items-center gap-1 text-gray-600 hover:text-violet-600 transition disabled:opacity-40" disabled={current === 1}>← 前へ</button>
        <span class="text-gray-400 text-xs">{current} / {total}</span>
        <button onclick={() => current = Math.min(total, current + 1)} class="flex items-center gap-1 text-gray-600 hover:text-violet-600 transition disabled:opacity-40" disabled={current === total}>次へ →</button>
      </div>
    </Tooltip>
  </div>
</Showcase>
