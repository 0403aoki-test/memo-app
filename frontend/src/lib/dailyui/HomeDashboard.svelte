<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  const devices = [
    { icon: '💡', name: 'リビング照明', on: true, val: '80%' },
    { icon: '❄️', name: 'エアコン', on: true, val: '24°C' },
    { icon: '📺', name: 'テレビ', on: false, val: 'オフ' },
    { icon: '🔒', name: '玄関ロック', on: true, val: '施錠済' },
  ]
  let devs = $state(devices)
</script>

<Showcase title="Daily UI #021 — Home Dashboard" code={`<!-- グリッドカード: grid grid-cols-2 gap-3 -->
<div class="grid grid-cols-2 gap-3">
  <!-- デバイスカード: rounded-2xl border-2 transition -->
  <div class="rounded-2xl p-4 border-2 border-violet-200 bg-violet-50">
    <div class="flex justify-between items-start mb-3">
      <span class="text-2xl">💡</span>
      <!-- トグル: peer-checked:bg-violet-500 -->
      <label><input type="checkbox" class="sr-only peer" /><div class="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-violet-500"></div></label>
    </div>
    <p class="text-sm font-semibold text-gray-800">リビング照明</p>
    <p class="text-xs text-violet-600 font-bold">80%</p>
  </div>
</div>`}>
  <div class="w-full max-w-sm space-y-4">
    <!-- 天気ウィジェット -->
    <Tooltip label="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-4 text-white flex justify-between items-center">
      <div class="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-4 text-white flex justify-between items-center">
        <div>
          <p class="text-xs text-violet-200">おはようございます</p>
          <p class="font-bold text-lg">田中 太郎さん</p>
          <p class="text-sm text-violet-200 mt-1">🌤 晴れ 22°C · 東京</p>
        </div>
        <div class="text-5xl">🏠</div>
      </div>
    </Tooltip>

    <!-- デバイスグリッド -->
    <div class="grid grid-cols-2 gap-3">
      {#each devs as d, i}
        <Tooltip label="rounded-2xl p-4 border-2 transition | border-violet-200 bg-violet-50 (ON) | border-gray-100 bg-white (OFF)">
          <div class="rounded-2xl p-4 border-2 transition {d.on ? 'border-violet-200 bg-violet-50' : 'border-gray-100 bg-white'}">
            <div class="flex justify-between items-start mb-3">
              <span class="text-2xl">{d.icon}</span>
              <label class="cursor-pointer">
                <input type="checkbox" class="sr-only peer" checked={d.on} onchange={() => { devs = devs.map((x, j) => j === i ? {...x, on: !x.on} : x) }} />
                <div class="w-10 h-5 bg-gray-300 rounded-full relative peer-checked:bg-violet-500 transition-colors">
                  <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform {d.on ? 'translate-x-5' : ''}"></div>
                </div>
              </label>
            </div>
            <p class="text-sm font-semibold text-gray-800">{d.name}</p>
            <p class="text-xs {d.on ? 'text-violet-600' : 'text-gray-400'} font-bold mt-0.5">{d.val}</p>
          </div>
        </Tooltip>
      {/each}
    </div>

    <!-- エネルギー使用量 -->
    <Tooltip label="bg-white rounded-2xl border border-gray-100 p-4">
      <div class="bg-white rounded-2xl border border-gray-100 p-4">
        <p class="text-xs font-semibold text-gray-500 mb-3">今月の電力使用量</p>
        <div class="flex items-end gap-1 h-12">
          {#each [40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95] as v}
            <div class="flex-1 bg-violet-200 rounded-t-sm" style="height: {v}%"></div>
          {/each}
        </div>
        <div class="flex justify-between mt-2">
          <p class="text-xs text-gray-400">先月比 <span class="text-green-600 font-semibold">-12%</span></p>
          <p class="text-xs font-bold text-gray-800">342 kWh</p>
        </div>
      </div>
    </Tooltip>
  </div>
</Showcase>
