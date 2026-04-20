<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let tripType = $state<'one' | 'round'>('round')
  const results = [
    { airline: 'JAL', time: '09:45 → 13:20', stops: '直行', price: 42800, duration: '3h35m' },
    { airline: 'ANA', time: '11:20 → 15:10', stops: '直行', price: 38900, duration: '3h50m' },
    { airline: 'SKY', time: '14:00 → 18:30', stops: '1回経由', price: 21500, duration: '4h30m' },
  ]
</script>

<Showcase title="Daily UI #068 — Flight Search" code={`<div class="divide-y divide-gray-100">
  <div class="flex items-center justify-between p-4 hover:bg-gray-50 transition cursor-pointer">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center font-bold text-red-600 text-sm">JAL</div>
      <div>
        <p class="font-semibold text-gray-800 text-sm">09:45 → 13:20</p>
        <p class="text-xs text-gray-400">直行 • 3h35m</p>
      </div>
    </div>
    <p class="font-bold text-violet-600 text-lg">¥42,800</p>
  </div>
</div>`}>
  <div class="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="bg-gradient-to-r from-sky-500 to-indigo-600 p-5 text-white">
      <div class="flex gap-2 mb-4">
        {#each [['one', '片道'], ['round', '往復']] as [val, label]}
          <Tooltip label="rounded-full px-3 py-1 text-xs font-medium transition {val === tripType ? 'bg-white text-sky-600' : 'bg-white/20 text-white'}">
            <button onclick={() => tripType = val as typeof tripType} class="rounded-full px-3 py-1 text-xs font-medium transition {tripType === val ? 'bg-white text-sky-600 font-bold' : 'bg-white/20 text-white hover:bg-white/30'}">{label}</button>
          </Tooltip>
        {/each}
      </div>
      <div class="flex items-center gap-3">
        <div class="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <p class="text-sky-200 text-xs mb-0.5">出発地</p>
          <p class="font-bold text-2xl">TYO</p>
          <p class="text-sky-200 text-xs">東京</p>
        </div>
        <div class="text-white/60 text-xl">⇄</div>
        <div class="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
          <p class="text-sky-200 text-xs mb-0.5">目的地</p>
          <p class="font-bold text-2xl">OSA</p>
          <p class="text-sky-200 text-xs">大阪</p>
        </div>
      </div>
    </div>
    <div class="divide-y divide-gray-50">
      {#each results as r}
        <Tooltip label="flex items-center justify-between p-4 hover:bg-gray-50 transition cursor-pointer">
          <div class="flex items-center justify-between p-4 hover:bg-violet-50 transition cursor-pointer">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center font-bold text-red-600 text-xs shrink-0">{r.airline}</div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">{r.time}</p>
                <p class="text-xs text-gray-400">{r.stops} • {r.duration}</p>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold text-violet-600">¥{r.price.toLocaleString()}</p>
              <p class="text-xs text-gray-400">1名</p>
            </div>
          </div>
        </Tooltip>
      {/each}
    </div>
  </div>
</Showcase>
