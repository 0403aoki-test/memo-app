<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<!-- animate-spin: ローディングスピナー -->
<div class="w-8 h-8 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>

<!-- animate-pulse: スケルトンUI・未確定状態 -->
<div class="w-8 h-8 bg-violet-400 rounded-full animate-pulse"></div>

<!-- animate-bounce: 通知・注意喚起 -->
<div class="w-4 h-4 bg-violet-600 rounded-full animate-bounce"></div>

<!-- animate-ping: オンライン状態インジケーター -->
<div class="relative w-3 h-3">
  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
  <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
</div>

<!-- hover:scale + active:scale: クリックフィードバック -->
<button class="px-4 py-2 bg-violet-600 text-white rounded-lg
  hover:scale-105 active:scale-95 transition-transform duration-150">
  Scale
</button>

<!-- hover:rotate: 回転 -->
<div class="w-8 h-8 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg
  hover:rotate-45 transition-transform duration-300 cursor-pointer"></div>

<!-- group / group-hover: 親子連動アニメーション -->
<div class="group flex items-center gap-2 p-3 rounded-lg hover:bg-violet-50 cursor-pointer transition">
  <span class="text-gray-600 group-hover:text-violet-600 transition">メニュー</span>
  <span class="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
</div>

<!-- transition-all duration-300 ease-in-out -->
<div class="w-16 h-8 bg-gray-200 hover:w-32 transition-all duration-300 rounded-full"></div>`

  const rationale = `animate-spin はローディング、animate-pulse はスケルトンUI、animate-bounce は通知、animate-ping はリアルタイムインジケーターに使います。hover:scale + active:scale で物理的なクリックフィードバックを与えるとUXが向上します。group/group-hover は親要素のホバーに連動して子要素をアニメーションさせる強力なパターンです。`
</script>

<Showcase title="アニメーション & トランジション" {code} {rationale}>
  <div class="flex flex-wrap gap-8 items-end">

    <div class="flex flex-col items-center gap-2">
      <div class="w-8 h-8 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
      <span class="text-xs text-gray-400">spin</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <div class="w-8 h-8 bg-violet-400 rounded-full animate-pulse"></div>
      <span class="text-xs text-gray-400">pulse</span>
    </div>

    <div class="flex flex-col items-center gap-3">
      <div class="w-4 h-4 bg-violet-600 rounded-full animate-bounce"></div>
      <span class="text-xs text-gray-400">bounce</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <div class="relative w-3 h-3">
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>
      <span class="text-xs text-gray-400">ping</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <button class="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:scale-105 active:scale-95 transition-transform duration-150">
        Scale
      </button>
      <span class="text-xs text-gray-400">scale</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <div class="w-8 h-8 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg hover:rotate-45 transition-transform duration-300 cursor-pointer shadow-md"></div>
      <span class="text-xs text-gray-400">rotate</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <div class="group flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-violet-50 cursor-pointer transition border border-gray-200">
        <span class="text-xs text-gray-600 group-hover:text-violet-600 transition font-medium">group</span>
        <span class="text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">→</span>
      </div>
      <span class="text-xs text-gray-400">group-hover</span>
    </div>

    <div class="flex flex-col items-center gap-2">
      <div class="h-6 bg-violet-300 rounded-full w-12 hover:w-24 transition-all duration-500 cursor-pointer"></div>
      <span class="text-xs text-gray-400">width transition</span>
    </div>

  </div>
</Showcase>
