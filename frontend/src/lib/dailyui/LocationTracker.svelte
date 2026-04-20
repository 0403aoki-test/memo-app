<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let selected = $state(0)
  const places = [
    { name: '東京タワー', addr: '港区芝公園4-2-8', tag: '観光', time: '10分前', color: 'bg-red-500' },
    { name: '渋谷スクランブル', addr: '渋谷区道玄坂2-1', tag: 'ショッピング', time: '25分前', color: 'bg-amber-500' },
    { name: '新宿御苑', addr: '新宿区内藤町11', tag: '公園', time: '1時間前', color: 'bg-green-500' },
  ]
</script>

<Showcase title="Daily UI #020 — Location Tracker" code={`<!-- マップ風背景: bg-gradient-to-br + グリッドライン -->
<div class="relative h-48 bg-gradient-to-br from-green-100 via-blue-50 to-teal-100 rounded-2xl overflow-hidden">
  <!-- ピン: absolute + translate-x/y + animate-bounce -->
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-full">
    <div class="w-6 h-6 bg-violet-600 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
  </div>
</div>
<!-- リスト: divide-y hover:bg-gray-50 -->
<div class="divide-y divide-gray-100">
  <div class="flex items-center gap-3 py-3 hover:bg-gray-50 rounded-xl px-2 cursor-pointer">...</div>
</div>`}>
  <div class="w-full max-w-sm space-y-3">
    <!-- マップ風エリア -->
    <Tooltip label="relative h-48 bg-gradient-to-br from-green-100 via-blue-50 to-teal-100 rounded-2xl overflow-hidden">
      <div class="relative h-48 bg-gradient-to-br from-green-100 via-blue-50 to-teal-100 rounded-2xl overflow-hidden">
        <!-- グリッドライン -->
        <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px); background-size: 40px 40px;"></div>
        <!-- ピン -->
        <Tooltip label="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-full | w-6 h-6 bg-violet-600 rounded-full animate-bounce">
          <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
            <div class="w-6 h-6 bg-violet-600 rounded-full border-2 border-white shadow-lg animate-bounce flex items-center justify-center">
              <span class="text-white text-xs">📍</span>
            </div>
            <div class="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-violet-600 -mt-0.5"></div>
          </div>
        </Tooltip>
        <!-- 現在地ラベル -->
        <div class="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
          <p class="text-xs font-semibold text-gray-800">📍 現在地: 港区</p>
        </div>
        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
          <p class="text-xs text-gray-600">縮尺 1km</p>
        </div>
      </div>
    </Tooltip>

    <!-- 場所リスト -->
    <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-50">
      {#each places as p, i}
        <Tooltip label="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 cursor-pointer transition | divide-y divide-gray-50">
          <button onclick={() => selected = i} class="w-full flex items-center gap-3 py-3 px-4 hover:bg-gray-50 transition text-left {selected === i ? 'bg-violet-50' : ''}">
            <div class="w-9 h-9 rounded-xl {p.color} flex items-center justify-center shrink-0">
              <span class="text-white text-sm">📍</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">{p.name}</p>
              <p class="text-xs text-gray-400 truncate">{p.addr}</p>
            </div>
            <div class="text-right shrink-0">
              <span class="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-0.5">{p.tag}</span>
              <p class="text-xs text-gray-400 mt-0.5">{p.time}</p>
            </div>
          </button>
        </Tooltip>
      {/each}
    </div>
  </div>
</Showcase>
