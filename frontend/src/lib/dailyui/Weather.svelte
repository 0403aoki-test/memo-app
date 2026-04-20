<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const forecast = [
    { day: '月', icon: '☀️', high: 24, low: 16 },
    { day: '火', icon: '⛅', high: 21, low: 14 },
    { day: '水', icon: '🌧️', high: 18, low: 12 },
    { day: '木', icon: '⛅', high: 20, low: 13 },
    { day: '金', icon: '☀️', high: 26, low: 17 },
  ]
</script>

<Showcase title="Daily UI #037 — Weather" code={`<div class="bg-gradient-to-br from-sky-400 to-indigo-600 rounded-3xl text-white p-6 w-72">
  <p class="text-5xl font-thin mb-1">22°</p>
  <p class="text-sky-200">東京都 • 晴れ</p>
  <!-- 5日間予報: grid grid-cols-5 -->
  <div class="grid grid-cols-5 gap-2 mt-5 border-t border-white/20 pt-4">
    <div class="text-center text-xs">...</div>
  </div>
</div>`}>
  <Tooltip label="bg-gradient-to-br from-sky-400 to-indigo-600 rounded-3xl text-white shadow-2xl">
    <div class="bg-gradient-to-br from-sky-400 to-indigo-600 rounded-3xl text-white p-6 w-72 shadow-2xl">
      <div class="flex justify-between items-start mb-4">
        <div>
          <p class="text-sky-100 text-xs font-medium">東京都 • 日本</p>
          <div class="flex items-end gap-2 mt-1">
            <p class="text-6xl font-thin">22°</p>
            <p class="text-sky-200 text-sm mb-2">C</p>
          </div>
          <p class="text-sky-100 text-sm">晴れ時々くもり</p>
        </div>
        <span class="text-5xl">☀️</span>
      </div>

      <Tooltip label="grid grid-cols-4 gap-2 text-xs text-sky-100">
        <div class="grid grid-cols-4 gap-2 text-xs text-sky-100 mb-4">
          <div class="text-center"><p>💧</p><p>68%</p></div>
          <div class="text-center"><p>💨</p><p>12km</p></div>
          <div class="text-center"><p>🌡</p><p>24°</p></div>
          <div class="text-center"><p>👁</p><p>10km</p></div>
        </div>
      </Tooltip>

      <Tooltip label="grid grid-cols-5 gap-1 border-t border-white/20 pt-4">
        <div class="grid grid-cols-5 gap-1 border-t border-white/20 pt-4">
          {#each forecast as f}
            <div class="text-center">
              <p class="text-sky-200 text-xs mb-1">{f.day}</p>
              <p class="text-lg">{f.icon}</p>
              <p class="text-xs font-medium">{f.high}°</p>
              <p class="text-xs text-sky-300">{f.low}°</p>
            </div>
          {/each}
        </div>
      </Tooltip>
    </div>
  </Tooltip>
</Showcase>
