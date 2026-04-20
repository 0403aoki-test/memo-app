<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let running = $state(false)
  let seconds = $state(0)
  let interval: ReturnType<typeof setInterval> | null = null
  let target = $state(300)

  function start() {
    if (running) { clearInterval(interval!); running = false; return }
    running = true
    seconds = 0
    interval = setInterval(() => {
      seconds++
      if (seconds >= target) { clearInterval(interval!); running = false }
    }, 1000)
  }

  function reset() { clearInterval(interval!); running = false; seconds = 0 }

  $effect(() => () => { if (interval) clearInterval(interval) })

  $derived: var remain = target - seconds
  $derived: var mm = String(Math.floor(remain / 60)).padStart(2, '0')
  $derived: var ss = String(remain % 60).padStart(2, '0')
  $derived: var pct = Math.min((seconds / target) * 100, 100)
</script>

<Showcase title="Daily UI #014 — Countdown Timer" code={`<!-- 円形プログレス (SVG stroke-dasharray) -->
<svg class="w-40 h-40 -rotate-90" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" stroke="#e5e7eb" stroke-width="8" fill="none" />
  <circle cx="50" cy="50" r="45" stroke="#7c3aed" stroke-width="8" fill="none"
    stroke-dasharray="282.7"
    stroke-dashoffset="{282.7 * (1 - pct/100)}"
    class="transition-all duration-1000 stroke-linecap-round" />
</svg>`}>
  <div class="flex flex-col items-center gap-6">
    <!-- 円形タイマー -->
    <div class="relative">
      <Tooltip label="-rotate-90 stroke-dasharray stroke-dashoffset transition-all duration-1000">
        <svg class="w-44 h-44 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="#e5e7eb" stroke-width="7" fill="none" />
          <circle cx="50" cy="50" r="45" stroke="#7c3aed" stroke-width="7" fill="none"
            stroke-dasharray="282.7"
            stroke-dashoffset={282.7 * (1 - pct / 100)}
            style="transition: stroke-dashoffset 1s linear; stroke-linecap: round"
          />
        </svg>
      </Tooltip>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <p class="text-4xl font-bold font-mono text-gray-800">{mm}:{ss}</p>
        <p class="text-xs text-gray-400 mt-1">{running ? '実行中...' : '待機中'}</p>
      </div>
    </div>

    <!-- 目標時間選択 -->
    <div class="flex gap-2">
      {#each [60, 180, 300, 600] as t}
        <Tooltip label="rounded-full px-3 py-1 text-xs font-medium border transition">
          <button
            onclick={() => { target = t; reset() }}
            class="rounded-full px-3 py-1 text-xs font-medium border transition {target === t ? 'bg-violet-600 text-white border-violet-600' : 'border-gray-200 text-gray-600 hover:border-violet-300'}"
          >{t/60 < 1 ? `${t}s` : `${t/60}m`}</button>
        </Tooltip>
      {/each}
    </div>

    <!-- コントロール -->
    <div class="flex gap-3">
      <Tooltip label="px-6 py-2.5 bg-violet-600 rounded-xl text-white hover:bg-violet-700 active:scale-95">
        <button onclick={start} class="px-6 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 active:scale-95 transition transform">
          {running ? '一時停止' : '開始'}
        </button>
      </Tooltip>
      <Tooltip label="px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50">
        <button onclick={reset} class="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition">リセット</button>
      </Tooltip>
    </div>
  </div>
</Showcase>
