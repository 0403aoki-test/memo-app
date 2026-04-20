<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const kpis = [
    { label: '売上', value: '¥2.4M', change: '+12%', up: true, icon: '💰' },
    { label: '注文数', value: '1,284', change: '+8%', up: true, icon: '📦' },
    { label: '顧客数', value: '8,421', change: '+5%', up: true, icon: '👥' },
    { label: '直帰率', value: '32%', change: '-3%', up: false, icon: '📉' },
  ]
  const activities = [
    { icon: '🛍', text: '田中さんが注文しました', time: '2分前', color: 'bg-violet-100 text-violet-600' },
    { icon: '👤', text: '鈴木さんが登録しました', time: '15分前', color: 'bg-blue-100 text-blue-600' },
    { icon: '⭐', text: 'レビューが投稿されました', time: '1時間前', color: 'bg-yellow-100 text-yellow-600' },
    { icon: '💳', text: '決済が完了しました', time: '2時間前', color: 'bg-green-100 text-green-600' },
  ]
  const bars = [65, 82, 70, 90, 74, 88, 60]
  const days = ['月', '火', '水', '木', '金', '土', '日']
</script>

<Showcase title="Daily UI #100 — Dashboard" code={`<!-- グリッドレイアウト: grid grid-cols-2 lg:grid-cols-4 gap-4 -->
<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
    <p class="text-xs text-gray-400">売上</p>
    <p class="text-2xl font-bold text-gray-900">¥2.4M</p>
    <span class="text-xs text-green-500">+12% ↑</span>
  </div>
</div>`}>
  <div class="w-full max-w-2xl space-y-4">
    <!-- KPIカード: grid grid-cols-4 -->
    <Tooltip label="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        {#each kpis as kpi}
          <div class="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            <div class="flex items-center justify-between mb-2">
              <p class="text-xs text-gray-400">{kpi.label}</p>
              <span class="text-base">{kpi.icon}</span>
            </div>
            <p class="text-xl font-bold text-gray-900">{kpi.value}</p>
            <p class="text-xs {kpi.up ? 'text-green-500' : 'text-red-400'} font-medium mt-0.5">{kpi.change}</p>
          </div>
        {/each}
      </div>
    </Tooltip>

    <div class="grid grid-cols-5 gap-3">
      <!-- バーチャート -->
      <Tooltip label="col-span-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
        <div class="col-span-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">今週の売上</p>
          <div class="flex items-end gap-1.5 h-24">
            {#each bars as h, i}
              <div class="flex-1 rounded-t transition-all {i === 5 ? 'bg-violet-600' : 'bg-violet-200'} hover:bg-violet-400" style="height:{h}%"></div>
            {/each}
          </div>
          <div class="flex gap-1.5 mt-1">
            {#each days as d}
              <div class="flex-1 text-center text-gray-300" style="font-size:9px">{d}</div>
            {/each}
          </div>
        </div>
      </Tooltip>

      <!-- アクティビティ -->
      <Tooltip label="col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm divide-y divide-gray-50">
        <div class="col-span-2 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">最近の活動</p>
          <div class="space-y-3">
            {#each activities as a}
              <div class="flex items-start gap-2">
                <div class="w-7 h-7 rounded-lg {a.color} flex items-center justify-center text-sm shrink-0">{a.icon}</div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs text-gray-700 leading-tight">{a.text}</p>
                  <p class="text-xs text-gray-300 mt-0.5">{a.time}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </Tooltip>
    </div>
  </div>
</Showcase>
