<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let guests = $state(2), nights = $state(3)
  const pricePerNight = 18500
</script>

<Showcase title="Daily UI #067 — Hotel Booking" code={`<div class="bg-white rounded-2xl shadow-md overflow-hidden w-80">
  <div class="h-40 bg-gradient-to-br from-amber-300 to-orange-400 relative overflow-hidden">
    <span class="absolute bottom-3 left-4 text-white font-bold text-lg">グランドホテル東京</span>
    <span class="absolute top-3 right-3 bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">⭐ 4.8</span>
  </div>
  <div class="p-5">
    <p class="text-2xl font-black text-violet-600">¥18,500<span class="text-sm text-gray-400 font-normal">/泊</span></p>
  </div>
</div>`}>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden w-80">
    <Tooltip label="h-40 bg-gradient-to-br from-amber-300 to-orange-400 relative overflow-hidden">
      <div class="h-40 bg-gradient-to-br from-amber-300 to-orange-400 relative overflow-hidden flex items-end">
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div class="relative z-10 p-4 w-full flex justify-between items-end">
          <p class="text-white font-bold text-base">グランドホテル東京</p>
          <span class="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">⭐ 4.8</span>
        </div>
      </div>
    </Tooltip>
    <div class="p-5 space-y-3">
      <div class="flex items-baseline gap-1">
        <p class="text-2xl font-black text-violet-600">¥{pricePerNight.toLocaleString()}</p>
        <p class="text-xs text-gray-400">/泊</p>
      </div>
      <div class="grid grid-cols-2 gap-2 text-xs text-gray-500">
        <div class="bg-gray-50 rounded-lg p-2.5"><p class="text-gray-400 mb-0.5">チェックイン</p><p class="font-semibold text-gray-700">4月15日</p></div>
        <div class="bg-gray-50 rounded-lg p-2.5"><p class="text-gray-400 mb-0.5">チェックアウト</p><p class="font-semibold text-gray-700">4月{15 + nights}日</p></div>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-xs text-gray-500">宿泊数</p>
        <div class="flex items-center gap-2">
          <button onclick={() => nights = Math.max(1, nights-1)} class="w-7 h-7 rounded-full border border-gray-200 hover:bg-gray-100 transition text-sm flex items-center justify-center">−</button>
          <span class="text-sm font-bold text-gray-700 w-4 text-center">{nights}</span>
          <button onclick={() => nights++} class="w-7 h-7 rounded-full border border-gray-200 hover:bg-gray-100 transition text-sm flex items-center justify-center">+</button>
        </div>
      </div>
      <div class="flex justify-between items-center pt-2 border-t border-gray-100">
        <p class="text-xs text-gray-500">合計 ({nights}泊)</p>
        <p class="font-bold text-violet-600 font-mono">¥{(pricePerNight * nights).toLocaleString()}</p>
      </div>
      <Tooltip label="w-full py-2.5 bg-violet-600 rounded-xl hover:bg-violet-700 active:scale-95 transition font-semibold text-white">
        <button class="w-full py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 active:scale-95 transition transform">予約する</button>
      </Tooltip>
    </div>
  </div>
</Showcase>
