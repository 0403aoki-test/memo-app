<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<!-- フォントサイズスケール -->
<span class="text-xs">text-xs (12px)</span>
<span class="text-sm">text-sm (14px)</span>
<span class="text-base">text-base (16px)</span>
<span class="text-xl">text-xl (20px)</span>
<span class="text-3xl font-bold">text-3xl bold</span>

<!-- グラデーションテキスト (bg-clip-text + text-transparent) -->
<p class="text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-tight">
  Gradient Text
</p>

<!-- フォントウェイト -->
<span class="font-thin">thin</span>
<span class="font-light">light</span>
<span class="font-normal">normal</span>
<span class="font-medium">medium</span>
<span class="font-semibold">semibold</span>
<span class="font-bold">bold</span>
<span class="font-extrabold">extrabold</span>
<span class="font-black">black</span>

<!-- トラッキング / リーディング -->
<p class="tracking-tighter">tracking-tighter — 詰まる</p>
<p class="tracking-wide">tracking-wide — 広がる</p>
<p class="tracking-widest uppercase text-gray-400 font-medium text-xs">tracking widest uppercase</p>
<p class="leading-tight">leading-tight (行間 tight)</p>
<p class="leading-relaxed">leading-relaxed (行間 relaxed)</p>
<p class="leading-loose">leading-loose (行間 loose)</p>

<!-- テキスト装飾 -->
<span class="underline decoration-violet-500 decoration-2">underline</span>
<span class="line-through text-gray-400">line-through</span>
<span class="italic">italic</span>
<span class="truncate">overflow したテキストを省略...</span>`

  const rationale = `タイポグラフィはUIの情報階層を決定します。bg-clip-text + text-transparent でグラデーション文字を実現できます。tracking-widest + uppercase はラベルや見出しに高級感を与えます。font-weight (thin〜black) を使い分けるとビジュアルリズムが生まれ、視線誘導と可読性が向上します。`
</script>

<Showcase title="タイポグラフィ" {code} {rationale}>
  <div class="w-full space-y-4">
    <!-- サイズスケール -->
    <div class="flex flex-wrap items-baseline gap-x-5 gap-y-1">
      <span class="text-xs text-gray-400">xs</span>
      <span class="text-sm text-gray-500">sm</span>
      <span class="text-base text-gray-600">base</span>
      <span class="text-lg text-gray-700">lg</span>
      <span class="text-xl font-medium text-gray-800">xl</span>
      <span class="text-2xl font-semibold text-gray-800">2xl</span>
      <span class="text-3xl font-bold text-gray-900">3xl</span>
    </div>

    <!-- グラデーションテキスト -->
    <p class="text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent leading-tight">
      Gradient Text
    </p>

    <!-- フォントウェイト -->
    <div class="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 text-sm">
      <span class="font-thin">thin</span>
      <span class="font-light">light</span>
      <span class="font-normal">normal</span>
      <span class="font-medium">medium</span>
      <span class="font-semibold">semibold</span>
      <span class="font-bold">bold</span>
      <span class="font-extrabold">extrabold</span>
      <span class="font-black">black</span>
    </div>

    <!-- トラッキング -->
    <div class="space-y-1 text-sm">
      <p class="tracking-tighter text-gray-600">tracking-tighter — 文字が詰まる</p>
      <p class="tracking-wide text-gray-600">tracking-wide — 少し広がる</p>
      <p class="tracking-widest uppercase text-gray-400 font-medium text-xs">tracking widest uppercase</p>
    </div>

    <!-- テキスト装飾 -->
    <div class="flex flex-wrap gap-4 text-sm">
      <span class="underline decoration-violet-500 decoration-2 text-gray-700">underline</span>
      <span class="line-through text-gray-400">line-through</span>
      <span class="italic text-gray-500">italic</span>
      <span class="text-violet-600 font-semibold">colored</span>
      <span class="bg-yellow-100 px-1 rounded text-gray-800">highlight</span>
    </div>

    <!-- モノスペース -->
    <div class="text-sm font-mono bg-gray-100 rounded-lg px-3 py-2 text-gray-700">
      font-mono: const greet = () =&gt; "Hello, World!"
    </div>
  </div>
</Showcase>
