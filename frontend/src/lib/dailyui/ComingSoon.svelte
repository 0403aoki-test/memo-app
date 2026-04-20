<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let email = $state('')
  let submitted = $state(false)
</script>

<Showcase title="Daily UI #048 — Coming Soon" code={`<div class="relative min-h-64 bg-gradient-to-br from-gray-900 to-violet-950 flex items-center justify-center rounded-2xl overflow-hidden">
  <div class="absolute top-10 left-10 w-40 h-40 bg-violet-600 rounded-full opacity-20 blur-3xl"></div>
  <div class="text-center text-white z-10 relative">
    <p class="text-5xl font-black mb-3">近日公開</p>
    <p class="text-violet-300 mb-6">準備中です。通知を受け取りますか？</p>
    <div class="flex gap-2">
      <input class="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm backdrop-blur-sm" placeholder="メールアドレス" />
      <button class="px-5 py-2 bg-violet-500 text-white rounded-xl text-sm font-medium hover:bg-violet-400">通知を受け取る</button>
    </div>
  </div>
</div>`}>
  <div class="relative w-full min-h-56 bg-gradient-to-br from-gray-900 to-violet-950 flex items-center justify-center rounded-2xl overflow-hidden">
    <div class="absolute top-5 left-5 w-32 h-32 bg-violet-600 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-5 right-5 w-24 h-24 bg-pink-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>
    <div class="text-center text-white z-10 relative px-6 py-8">
      {#if submitted}
        <p class="text-4xl mb-3">🎉</p>
        <p class="text-xl font-bold mb-1">登録完了！</p>
        <p class="text-violet-300 text-sm">公開時にお知らせします。</p>
      {:else}
        <Tooltip label="text-4xl font-black bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
          <p class="text-4xl font-black bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent mb-2">近日公開</p>
        </Tooltip>
        <p class="text-violet-300 text-sm mb-5">新しいサービスを準備中です。</p>
        <Tooltip label="flex gap-2 | bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl">
          <div class="flex gap-2">
            <input type="email" bind:value={email} placeholder="メールアドレス" class="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs backdrop-blur-sm outline-none focus:border-violet-400 min-w-0" />
            <button onclick={() => submitted = true} class="px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded-xl text-xs font-semibold transition whitespace-nowrap">通知を受け取る</button>
          </div>
        </Tooltip>
        <div class="flex justify-center gap-4 mt-5 text-violet-400 text-xs">
          <span>X</span><span>Instagram</span><span>YouTube</span>
        </div>
      {/if}
    </div>
  </div>
</Showcase>
