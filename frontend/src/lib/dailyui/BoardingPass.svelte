<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
</script>

<Showcase title="Daily UI #024 — Boarding Pass" code={`<div class="bg-white rounded-3xl shadow-2xl overflow-hidden w-80">
  <!-- グラデーションヘッダー -->
  <div class="bg-gradient-to-r from-violet-600 to-indigo-700 p-6 text-white">
    <div class="flex justify-between items-center">
      <div class="text-center">
        <p class="text-4xl font-black">TYO</p>
        <p class="text-xs text-violet-200">東京</p>
      </div>
      <div class="text-2xl">✈</div>
      <div class="text-center">
        <p class="text-4xl font-black">NYC</p>
        <p class="text-xs text-violet-200">ニューヨーク</p>
      </div>
    </div>
  </div>
  <!-- 切り取り線 -->
  <div class="flex items-center">
    <div class="w-5 h-10 bg-gray-50 rounded-r-full -ml-0"></div>
    <div class="flex-1 border-t-2 border-dashed border-gray-200"></div>
    <div class="w-5 h-10 bg-gray-50 rounded-l-full"></div>
  </div>
</div>`}>
  <div class="bg-white rounded-3xl shadow-2xl overflow-hidden w-80">
    <Tooltip label="bg-gradient-to-r from-violet-600 to-indigo-700 text-white p-6">
      <div class="bg-gradient-to-r from-violet-600 to-indigo-700 p-6 text-white">
        <div class="flex justify-between items-start mb-4">
          <p class="text-xs text-violet-200 font-medium">BOARDING PASS</p>
          <p class="text-xs text-violet-200">JAL 401</p>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-center">
            <p class="text-4xl font-black tracking-tighter">TYO</p>
            <p class="text-xs text-violet-200 mt-1">東京</p>
          </div>
          <div class="flex flex-col items-center text-violet-300">
            <span class="text-2xl">✈</span>
            <div class="w-16 h-px bg-violet-400 mt-1"></div>
          </div>
          <div class="text-center">
            <p class="text-4xl font-black tracking-tighter">NYC</p>
            <p class="text-xs text-violet-200 mt-1">ニューヨーク</p>
          </div>
        </div>
        <div class="flex justify-between mt-5 text-xs">
          <div><p class="text-violet-300">出発</p><p class="font-bold">09:45</p></div>
          <div><p class="text-violet-300">到着</p><p class="font-bold">11:20</p></div>
          <div><p class="text-violet-300">日付</p><p class="font-bold">APR 13</p></div>
        </div>
      </div>
    </Tooltip>

    <!-- 切り取り線 -->
    <Tooltip label="flex items-center | border-t-2 border-dashed border-gray-200 (切り取り線)">
      <div class="flex items-center bg-gray-50">
        <div class="w-6 h-12 bg-white rounded-r-full shadow-inner"></div>
        <div class="flex-1 border-t-2 border-dashed border-gray-200"></div>
        <div class="w-6 h-12 bg-white rounded-l-full shadow-inner"></div>
      </div>
    </Tooltip>

    <div class="p-5 bg-gray-50">
      <div class="grid grid-cols-3 gap-3 text-xs mb-4">
        <div><p class="text-gray-400">搭乗者</p><p class="font-bold text-gray-800 mt-0.5">TANAKA T</p></div>
        <div><p class="text-gray-400">席</p><p class="font-bold text-gray-800 mt-0.5">14A</p></div>
        <div><p class="text-gray-400">クラス</p><p class="font-bold text-gray-800 mt-0.5">エコノミー</p></div>
      </div>
      <!-- バーコード風 -->
      <Tooltip label="flex gap-px h-12 (バーコード模擬)">
        <div class="flex gap-px h-12 mt-2">
          {#each Array.from({length: 60}) as _, i}
            <div class="flex-none w-px {Math.random() > 0.3 ? 'bg-gray-800' : 'bg-transparent'} h-full"></div>
          {/each}
        </div>
      </Tooltip>
    </div>
  </div>
</Showcase>
