<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<!-- grid-cols-3 + col-span -->
<div class="grid grid-cols-3 gap-3">
  <div class="col-span-1">1</div>
  <div class="col-span-2">2 (col-span-2)</div>
  <div class="col-span-3">3 (full width)</div>
</div>

<!-- レスポンシブ: grid-cols-1 → sm:2 → md:4 -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
  ...
</div>

<!-- Flexbox: justify-between + items-center + flex-1 / flex-none -->
<div class="flex justify-between items-center gap-3">
  <div class="flex-1">flex-1 (伸縮)</div>
  <div class="flex-none px-6">flex-none (固定)</div>
  <div class="flex-1">flex-1 (伸縮)</div>
</div>

<!-- space-x / space-y (子要素間のマージン) -->
<div class="flex space-x-3">
  <div>A</div><div>B</div><div>C</div>
</div>

<!-- divide-x / divide-y (区切り線) -->
<div class="flex divide-x divide-gray-200">
  <div class="px-4">左</div>
  <div class="px-4">中</div>
  <div class="px-4">右</div>
</div>`

  const rationale = `grid-cols + col-span で不均一なカードレイアウトが作れます。sm:/md: ブレークポイントでレスポンシブ列数を制御するのがモバイルファーストの基本です。flex-1 は使用可能スペースを均等分割し、flex-none は固定幅を維持します。divide-x/y は border の代わりに使える軽量な区切り線パターンです。`
</script>

<Showcase title="グリッド / Flex / レスポンシブ" {code} {rationale}>
  <div class="w-full space-y-5 text-sm font-medium text-center">

    <!-- グリッド + col-span -->
    <div>
      <p class="text-xs text-gray-400 text-left mb-1">grid-cols-3 + col-span</p>
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-violet-100 text-violet-700 rounded-lg p-2.5">1</div>
        <div class="bg-violet-200 text-violet-700 rounded-lg p-2.5 col-span-2">2 (col-span-2)</div>
        <div class="bg-violet-300 text-violet-800 rounded-lg p-2.5 col-span-3">3 (col-span-3 = full)</div>
      </div>
    </div>

    <!-- レスポンシブグリッド -->
    <div>
      <p class="text-xs text-gray-400 text-left mb-1">grid-cols-2 → md:grid-cols-4 (レスポンシブ)</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-sky-100 text-sky-700 rounded-lg p-2.5">sky</div>
        <div class="bg-teal-100 text-teal-700 rounded-lg p-2.5">teal</div>
        <div class="bg-rose-100 text-rose-700 rounded-lg p-2.5">rose</div>
        <div class="bg-amber-100 text-amber-700 rounded-lg p-2.5">amber</div>
      </div>
    </div>

    <!-- Flexbox: flex-1 / flex-none -->
    <div>
      <p class="text-xs text-gray-400 text-left mb-1">flex-1 / flex-none / justify-between</p>
      <div class="flex justify-between items-center gap-2">
        <div class="flex-1 bg-indigo-100 text-indigo-700 p-2.5 rounded-lg">flex-1</div>
        <div class="flex-none bg-indigo-500 text-white px-5 py-2.5 rounded-lg">flex-none</div>
        <div class="flex-1 bg-indigo-100 text-indigo-700 p-2.5 rounded-lg">flex-1</div>
      </div>
    </div>

    <!-- divide -->
    <div>
      <p class="text-xs text-gray-400 text-left mb-1">divide-x (区切り線)</p>
      <div class="flex divide-x divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
        <div class="flex-1 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition cursor-pointer">左</div>
        <div class="flex-1 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition cursor-pointer">中</div>
        <div class="flex-1 px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition cursor-pointer">右</div>
      </div>
    </div>

    <!-- aspect-ratio -->
    <div>
      <p class="text-xs text-gray-400 text-left mb-1">aspect-ratio</p>
      <div class="flex gap-2 items-end">
        <div class="w-20 aspect-square bg-violet-200 rounded-lg flex items-center justify-center text-violet-600 text-xs">square</div>
        <div class="w-32 aspect-video bg-pink-200 rounded-lg flex items-center justify-center text-pink-600 text-xs">video (16:9)</div>
      </div>
    </div>

  </div>
</Showcase>
