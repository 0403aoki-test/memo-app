<script lang="ts">
  import type { Snippet } from 'svelte'

  let { title, code, rationale, children }: {
    title: string
    code: string
    rationale?: string
    children: Snippet
  } = $props()

  let tab = $state<'preview' | 'code'>('preview')
</script>

<div class="mb-10">
  <h2 class="text-lg font-semibold text-gray-700 mb-3">{title}</h2>

  <div class="border border-gray-200 rounded-xl overflow-hidden">
    <!-- タブ -->
    <div class="flex border-b border-gray-200 bg-gray-50">
      <button
        onclick={() => tab = 'preview'}
        class="px-4 py-2 text-sm font-medium transition {tab === 'preview' ? 'text-violet-600 border-b-2 border-violet-600 bg-white' : 'text-gray-500 hover:text-gray-700'}"
      >
        プレビュー
      </button>
      <button
        onclick={() => tab = 'code'}
        class="px-4 py-2 text-sm font-medium transition {tab === 'code' ? 'text-violet-600 border-b-2 border-violet-600 bg-white' : 'text-gray-500 hover:text-gray-700'}"
      >
        コード
      </button>
    </div>

    <!-- コンテンツ -->
    {#if tab === 'preview'}
      <div class="p-6 bg-white flex flex-wrap gap-4 items-center">
        {@render children()}
      </div>
    {:else}
      <pre class="p-5 bg-gray-900 text-gray-100 text-sm overflow-x-auto leading-relaxed"><code>{code}</code></pre>
    {/if}

    {#if rationale}
      <div class="px-5 py-4 bg-amber-50 border-t border-amber-100 flex gap-3 text-sm text-amber-800">
        <span class="shrink-0 mt-0.5">💡</span>
        <p class="leading-relaxed"><strong class="font-semibold">なぜこのUIが良いのか：</strong>{rationale}</p>
      </div>
    {/if}
  </div>
</div>
