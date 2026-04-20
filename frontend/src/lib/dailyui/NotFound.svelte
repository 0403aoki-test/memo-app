<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
</script>

<Showcase title="Daily UI #008 — 404 Page" code={`<div class="min-h-64 flex flex-col items-center justify-center text-center p-8">
  <p class="text-9xl font-black text-transparent bg-gradient-to-br from-violet-600 to-pink-500 bg-clip-text leading-none mb-4">404</p>
  <p class="text-xl font-semibold text-gray-800 mb-2">ページが見つかりません</p>
  <p class="text-sm text-gray-400 mb-8">お探しのページは移動または削除された可能性があります。</p>
  <a href="/" class="px-6 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-medium hover:bg-violet-700 transition">
    ホームへ戻る
  </a>
</div>`}>
  <div class="w-full flex flex-col items-center justify-center text-center py-10">
    <Tooltip label="text-9xl font-black bg-gradient-to-br bg-clip-text text-transparent leading-none">
      <p class="text-8xl font-black bg-gradient-to-br from-violet-600 to-pink-500 bg-clip-text text-transparent leading-none mb-4">404</p>
    </Tooltip>
    <p class="text-lg font-semibold text-gray-800 mb-2">ページが見つかりません</p>
    <p class="text-sm text-gray-400 mb-6 max-w-xs">お探しのページは移動または削除された可能性があります。</p>
    <Tooltip label="px-6 py-2.5 bg-violet-600 rounded-xl hover:bg-violet-700 transition">
      <button class="px-6 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-medium hover:bg-violet-700 transition hover:scale-105 active:scale-95 transform">
        ホームへ戻る
      </button>
    </Tooltip>
    <div class="mt-8 flex gap-2 text-xs text-gray-300">
      <span>🌐</span>
      <span class="font-mono">https://example.com/missing-page</span>
    </div>
  </div>
</Showcase>
