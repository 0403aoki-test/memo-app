<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let email = $state(''), done = $state(false)
</script>

<Showcase title="Daily UI #026 — Subscribe Form" code={`<div class="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
  <p class="text-2xl font-bold mb-2">ニュースレター登録</p>
  <p class="text-violet-200 text-sm mb-6">週1回、最新情報をお届けします。</p>
  <div class="flex gap-2 max-w-sm mx-auto">
    <input class="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm backdrop-blur-sm outline-none" placeholder="メールアドレス" />
    <button class="px-5 py-2.5 bg-white text-violet-700 rounded-xl text-sm font-bold hover:bg-violet-50 transition">登録</button>
  </div>
</div>`}>
  <div class="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-7 text-white text-center w-full max-w-md">
    {#if done}
      <p class="text-3xl mb-2">🎉</p>
      <p class="font-bold text-lg mb-1">登録完了！</p>
      <p class="text-violet-200 text-sm">ありがとうございます。</p>
      <button onclick={() => { done = false; email = '' }} class="mt-4 text-violet-300 text-xs underline">戻る</button>
    {:else}
      <p class="text-xl font-bold mb-1">ニュースレター登録</p>
      <p class="text-violet-200 text-xs mb-5">週1回、最新情報をお届けします。配信停止はいつでも可能。</p>
      <Tooltip label="flex gap-2 | bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl">
        <div class="flex gap-2">
          <input type="email" bind:value={email} placeholder="メールアドレス" class="flex-1 px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm backdrop-blur-sm outline-none focus:border-white/50 min-w-0" />
          <button onclick={() => done = true} class="px-4 py-2.5 bg-white text-violet-700 rounded-xl text-sm font-bold hover:bg-violet-50 transition whitespace-nowrap">登録</button>
        </div>
      </Tooltip>
      <p class="text-violet-300 text-xs mt-3">プライバシーポリシーに同意のうえ登録してください。</p>
    {/if}
  </div>
</Showcase>
