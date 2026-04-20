<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<!-- Daily UI #003 — Landing Page Hero -->
<!-- bg-gradient + blur-3xl 背景装飾 + backdrop-blur グラスモーフィズム -->
<section class="relative min-h-96 bg-gradient-to-br from-violet-900 via-indigo-800 to-purple-900 flex items-center overflow-hidden rounded-2xl">

  <!-- 背景の光彩 -->
  <div class="absolute top-10 left-10 w-48 h-48 bg-violet-500 rounded-full opacity-20 blur-3xl"></div>
  <div class="absolute bottom-5 right-10 w-40 h-40 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>

  <!-- コンテンツ -->
  <div class="relative z-10 text-center w-full px-8 py-12">
    <!-- グラスモーフィズムバッジ -->
    <span class="inline-block px-3 py-1 bg-white/10 text-violet-200 text-xs font-medium rounded-full mb-5
      backdrop-blur-sm border border-white/20">
      🚀 新機能リリース
    </span>
    <p class="text-4xl font-extrabold text-white mb-4 leading-tight">
      次世代の<br/><span class="text-violet-300">デザインツール</span>
    </p>
    <p class="text-violet-200 text-sm mb-7 max-w-xs mx-auto leading-relaxed">
      美しいUIを、より速く。Tailwind CSS で作る次世代のデザインシステム。
    </p>
    <div class="flex gap-3 justify-center flex-wrap">
      <!-- Primary CTA: bg-white -->
      <button class="px-5 py-2.5 bg-white text-violet-700 text-sm font-semibold rounded-xl
        hover:bg-violet-50 transition shadow-lg hover:scale-105 active:scale-95 transform">
        無料で始める
      </button>
      <!-- Secondary CTA: Ghost (bg-white/10 + backdrop-blur) -->
      <button class="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-xl
        border border-white/20 hover:bg-white/20 transition backdrop-blur-sm">
        デモを見る →
      </button>
    </div>
  </div>
</section>`

  const rationale = `Landing Heroは「誰に・何を・なぜ」を3秒で伝えるUIです。bg-gradient + blur-3xl の光彩でdepthを演出。bg-white/10 + backdrop-blur-sm でグラスモーフィズムを実現します。ボタンは「主CTA（白塗り）」と「副CTA（ゴースト）」で選択肢を与えつつ優先度を明確にします。opacity/20 の装飾は過度なノイズを避けつつ視覚的な奥行きを作ります。`
</script>

<Showcase title="Daily UI #003 — Landing Page Hero" {code} {rationale}>
  <section class="relative w-full min-h-80 bg-gradient-to-br from-violet-900 via-indigo-800 to-purple-900 flex items-center overflow-hidden rounded-2xl">
    <!-- 背景装飾 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-8 left-8 w-40 h-40 bg-violet-500 rounded-full opacity-20 blur-3xl"></div>
      <div class="absolute bottom-4 right-8 w-36 h-36 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
    </div>

    <div class="relative z-10 text-center w-full px-8 py-10">
      <!-- グラスモーフィズムバッジ -->
      <span class="inline-block px-3 py-1 bg-white/10 text-violet-200 text-xs font-medium rounded-full mb-4 backdrop-blur-sm border border-white/20">
        🚀 新機能リリース
      </span>

      <p class="text-4xl font-extrabold text-white mb-3 leading-tight">
        次世代の<br/><span class="text-violet-300">デザインツール</span>
      </p>

      <p class="text-violet-200 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
        美しいUIを、より速く。Tailwind CSS で作る次世代のデザインシステム。
      </p>

      <div class="flex gap-3 justify-center flex-wrap">
        <button class="px-5 py-2.5 bg-white text-violet-700 text-sm font-semibold rounded-xl hover:bg-violet-50 transition shadow-lg hover:scale-105 active:scale-95 transform duration-150">
          無料で始める
        </button>
        <button class="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/20 transition backdrop-blur-sm">
          デモを見る →
        </button>
      </div>

      <!-- ソーシャルプルーフ -->
      <div class="mt-6 flex items-center justify-center gap-3">
        <div class="flex -space-x-2">
          <div class="w-6 h-6 rounded-full bg-violet-400 ring-1 ring-violet-900 flex items-center justify-center text-white text-xs font-bold">A</div>
          <div class="w-6 h-6 rounded-full bg-pink-400 ring-1 ring-violet-900 flex items-center justify-center text-white text-xs font-bold">B</div>
          <div class="w-6 h-6 rounded-full bg-sky-400 ring-1 ring-violet-900 flex items-center justify-center text-white text-xs font-bold">C</div>
        </div>
        <p class="text-violet-300 text-xs">1,000+ チームが利用中</p>
      </div>
    </div>
  </section>
</Showcase>
