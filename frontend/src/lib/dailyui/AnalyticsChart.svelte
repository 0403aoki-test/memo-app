<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const data = [42, 68, 55, 80, 61, 90, 74, 85, 70, 95, 82, 100]
  const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
  const max = Math.max(...data)
  const stats = [
    { label: '総売上', value: '¥2.4M', change: '+12%', up: true },
    { label: '訪問者', value: '84,210', change: '+8%', up: true },
    { label: '直帰率', value: '32%', change: '-3%', up: false },
  ]
</script>

<Showcase title="Daily UI #018 — Analytics Chart" code={`<!-- SVGバーチャート + Tailwindクラス -->
<div class="flex items-end gap-1 h-32">
  {#each data as val}
    <div class="flex-1 bg-violet-500 rounded-t hover:bg-violet-400 transition-colors"
      style="height: {(val/max)*100}%">
    </div>
  {/each}
</div>`}>
  <div class="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
    <!-- スタッツカード -->
    <div class="grid grid-cols-3 gap-3 mb-5">
      {#each stats as s}
        <Tooltip label="bg-gray-50 rounded-xl p-3 text-center">
          <div class="bg-gray-50 rounded-xl p-3 text-center">
            <p class="text-xs text-gray-400 mb-1">{s.label}</p>
            <p class="font-bold text-gray-800 text-sm">{s.value}</p>
            <p class="text-xs {s.up ? 'text-green-500' : 'text-red-400'} font-medium">{s.change}</p>
          </div>
        </Tooltip>
      {/each}
    </div>

    <!-- バーチャート -->
    <div class="mb-2">
      <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">月別売上</p>
      <Tooltip label="flex items-end gap-1 h-28 | flex-1 bg-violet-500 rounded-t hover:bg-violet-400 transition-colors">
        <div class="flex items-end gap-1 h-28">
          {#each data as val, i}
            <div
              class="flex-1 rounded-t transition-all hover:bg-violet-400 cursor-pointer {i === data.length - 1 ? 'bg-violet-600' : 'bg-violet-200'}"
              style="height: {(val / max) * 100}%"
              title="{months[i]}: {val}"
            ></div>
          {/each}
        </div>
      </Tooltip>
      <div class="flex gap-1 mt-1">
        {#each months as m}
          <div class="flex-1 text-center text-gray-300" style="font-size:9px">{m.replace('月','')}</div>
        {/each}
      </div>
    </div>
  </div>
</Showcase>
