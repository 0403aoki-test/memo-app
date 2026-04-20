<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<!-- サイズバリエーション -->
<div class="w-8 h-8 rounded-full bg-violet-400 flex items-center justify-center text-white text-xs font-bold">S</div>
<div class="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold">M</div>
<div class="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-white text-lg font-bold">L</div>

<!-- アバターグループ (-space-x + ring-2 ring-white) -->
<div class="flex -space-x-3">
  <div class="w-10 h-10 rounded-full bg-violet-400 ring-2 ring-white flex items-center justify-center text-white text-sm font-bold">A</div>
  <div class="w-10 h-10 rounded-full bg-pink-400 ring-2 ring-white flex items-center justify-center text-white text-sm font-bold">B</div>
  <div class="w-10 h-10 rounded-full bg-sky-400 ring-2 ring-white flex items-center justify-center text-white text-sm font-bold">C</div>
  <div class="w-10 h-10 rounded-full bg-gray-200 ring-2 ring-white flex items-center justify-center text-gray-500 text-xs font-bold">+5</div>
</div>

<!-- オンライン状態 (animate-ping) -->
<div class="relative w-12 h-12">
  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white font-bold">TY</div>
  <div class="absolute bottom-0 right-0 w-3.5 h-3.5">
    <div class="w-3.5 h-3.5 bg-green-500 rounded-full ring-2 ring-white"></div>
    <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
  </div>
</div>`

  const rationale = `-space-x はネガティブスペースを使ったアバターグループパターン。ring-2 ring-white で重なり部分を白枠で分離すると各アバターが際立ちます。animate-ping のオンラインドットは「リアルタイム感」を演出します。角丸バリエーション（circle / square / rect）でブランドの個性を出せます。`
</script>

<Showcase title="アバター" {code} {rationale}>
  <div class="flex flex-wrap gap-8 items-center">

    <!-- サイズ -->
    <div class="flex items-end gap-2">
      <div class="flex flex-col items-center gap-1">
        <div class="w-8 h-8 rounded-full bg-violet-400 flex items-center justify-center text-white text-xs font-bold">S</div>
        <span class="text-xs text-gray-400">8</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm font-bold">M</div>
        <span class="text-xs text-gray-400">10</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">L</div>
        <span class="text-xs text-gray-400">12</span>
      </div>
      <div class="flex flex-col items-center gap-1">
        <div class="w-16 h-16 rounded-full bg-violet-700 flex items-center justify-center text-white text-lg font-bold">XL</div>
        <span class="text-xs text-gray-400">16</span>
      </div>
    </div>

    <!-- アバターグループ -->
    <div class="flex flex-col items-center gap-2">
      <div class="flex -space-x-3">
        <div class="w-10 h-10 rounded-full bg-violet-400 ring-2 ring-white flex items-center justify-center text-white text-sm font-bold">A</div>
        <div class="w-10 h-10 rounded-full bg-pink-400 ring-2 ring-white flex items-center justify-center text-white text-sm font-bold">B</div>
        <div class="w-10 h-10 rounded-full bg-sky-400 ring-2 ring-white flex items-center justify-center text-white text-sm font-bold">C</div>
        <div class="w-10 h-10 rounded-full bg-amber-400 ring-2 ring-white flex items-center justify-center text-white text-sm font-bold">D</div>
        <div class="w-10 h-10 rounded-full bg-gray-200 ring-2 ring-white flex items-center justify-center text-gray-500 text-xs font-bold">+5</div>
      </div>
      <span class="text-xs text-gray-400">-space-x グループ</span>
    </div>

    <!-- オンライン ping -->
    <div class="flex flex-col items-center gap-2">
      <div class="relative w-12 h-12">
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white font-bold">TY</div>
        <div class="absolute bottom-0 right-0 w-3.5 h-3.5">
          <div class="w-3.5 h-3.5 bg-green-500 rounded-full ring-2 ring-white"></div>
          <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
      <span class="text-xs text-gray-400">オンライン ping</span>
    </div>

    <!-- 角丸バリエーション -->
    <div class="flex flex-col items-center gap-2">
      <div class="flex gap-2 items-center">
        <div class="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center text-white text-sm font-bold">○</div>
        <div class="w-10 h-10 rounded-xl bg-indigo-400 flex items-center justify-center text-white text-sm font-bold">□</div>
        <div class="w-10 h-10 rounded-none bg-indigo-400 flex items-center justify-center text-white text-sm font-bold">■</div>
      </div>
      <span class="text-xs text-gray-400">rounded バリエーション</span>
    </div>

    <!-- グラデーションアバター -->
    <div class="flex flex-col items-center gap-2">
      <div class="flex gap-2">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold ring-2 ring-violet-200">YK</div>
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold ring-2 ring-sky-200">MT</div>
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white text-sm font-bold ring-2 ring-amber-200">SH</div>
      </div>
      <span class="text-xs text-gray-400">グラデーション + ring</span>
    </div>

  </div>
</Showcase>
