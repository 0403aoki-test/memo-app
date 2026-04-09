<script lang="ts">
  import Buttons from './lib/tw/Buttons.svelte'
  import Cards from './lib/tw/Cards.svelte'
  import Badges from './lib/tw/Badges.svelte'
  import Forms from './lib/tw/Forms.svelte'
  import SignUp from './lib/dailyui/SignUp.svelte'
  import CreditCard from './lib/dailyui/CreditCard.svelte'

  let section = $state<'tailwind' | 'dailyui'>('tailwind')
</script>

<div class="min-h-screen bg-gray-50">
  <!-- ヘッダー -->
  <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
    <div class="max-w-4xl mx-auto px-6 py-4 flex items-center gap-6">
      <h1 class="font-bold text-gray-800">UI学習ショーケース</h1>
      <nav class="flex gap-1">
        <button
          onclick={() => section = 'tailwind'}
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition {section === 'tailwind' ? 'bg-violet-600 text-white' : 'text-gray-500 hover:bg-gray-100'}"
        >
          Tailwind CSS
        </button>
        <button
          onclick={() => section = 'dailyui'}
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition {section === 'dailyui' ? 'bg-violet-600 text-white' : 'text-gray-500 hover:bg-gray-100'}"
        >
          Daily UI
        </button>
      </nav>
    </div>
  </header>

  <!-- コンテンツ -->
  <main class="max-w-4xl mx-auto px-6 py-10">
    {#if section === 'tailwind'}
      <p class="text-sm text-gray-400 mb-8">各パーツの「コード」タブでTailwindのクラスを確認できます。</p>
      <Buttons />
      <Cards />
      <Badges />
      <Forms />
    {:else}
      <p class="text-sm text-gray-400 mb-8">Daily UIのお題を実装したコンポーネントです。</p>
      <SignUp />
      <CreditCard />
    {/if}
  </main>
</div>
