<script lang="ts">
  // Tailwind CSS
  import Typography from './lib/tw/Typography.svelte'
  import Buttons from './lib/tw/Buttons.svelte'
  import Cards from './lib/tw/Cards.svelte'
  import Badges from './lib/tw/Badges.svelte'
  import Forms from './lib/tw/Forms.svelte'
  import Animations from './lib/tw/Animations.svelte'
  import Grid from './lib/tw/Grid.svelte'
  import Alerts from './lib/tw/Alerts.svelte'
  import Avatars from './lib/tw/Avatars.svelte'
  import Progress from './lib/tw/Progress.svelte'
  import Skeleton from './lib/tw/Skeleton.svelte'
  import Table from './lib/tw/Table.svelte'

  // DaisyUI
  import DaisyShowcase from './lib/daisyui/DaisyShowcase.svelte'

  type Section = 'tailwind' | 'daisyui'
  let section = $state<Section>('tailwind')
</script>

<div class="min-h-screen bg-gray-50">
  <!-- ヘッダー -->
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-4xl mx-auto px-6 py-4 flex items-center gap-6 flex-wrap">
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-md bg-violet-600 flex items-center justify-center">
          <span class="text-white text-xs font-bold">UI</span>
        </div>
        <span class="font-bold text-gray-800 text-sm">学習ショーケース</span>
      </div>
      <nav class="flex gap-1">
        <button
          onclick={() => section = 'tailwind'}
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all {section === 'tailwind' ? 'bg-violet-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}"
        >
          Tailwind CSS
        </button>
        <button
          onclick={() => section = 'daisyui'}
          class="px-4 py-1.5 rounded-lg text-sm font-medium transition-all {section === 'daisyui' ? 'bg-violet-600 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}"
        >
          DaisyUI
        </button>
      </nav>
    </div>
  </header>

  <!-- コンテンツ -->
  <main class="max-w-4xl mx-auto px-6 py-10">

    {#if section === 'tailwind'}
      <div class="mb-8">
        <p class="text-sm text-gray-800 font-semibold mb-1">Tailwind CSS ユーティリティ集</p>
        <p class="text-xs text-gray-400">各コンポーネントの「コード」タブでクラスを確認できます。</p>
      </div>

      <!-- コンポーネント一覧 (12セクション) -->
      <Typography />
      <Buttons />
      <Badges />
      <Avatars />
      <Cards />
      <Alerts />
      <Progress />
      <Skeleton />
      <Forms />
      <Animations />
      <Grid />
      <Table />

    {:else}
      <div class="mb-8">
        <p class="text-sm text-gray-800 font-semibold mb-1">DaisyUI コンポーネント一覧</p>
        <p class="text-xs text-gray-400">DaisyUI の主要コンポーネントをカテゴリ別に紹介します。「コード」タブでクラスを確認できます。</p>
      </div>

      <DaisyShowcase />
    {/if}

  </main>
</div>
