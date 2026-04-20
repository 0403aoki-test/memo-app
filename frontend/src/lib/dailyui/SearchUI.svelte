<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let query = $state('')
  const all = ['Tailwind CSS', 'Svelte 5', 'TypeScript', 'Daily UI', 'Figma', 'React', 'Vue.js', 'Next.js', 'Vite', 'Framer Motion']
  $derived: var results = query.length > 0 ? all.filter(s => s.toLowerCase().includes(query.toLowerCase())) : []
</script>

<Showcase title="Daily UI #022 — Search" code={`<!-- フォーカス時にリングを表示: focus-within:ring-2 focus-within:ring-violet-400 -->
<div class="relative w-full max-w-md">
  <div class="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3
    focus-within:ring-2 focus-within:ring-violet-400 focus-within:border-transparent transition">
    <span class="text-gray-400">🔍</span>
    <input type="text" placeholder="検索..." class="flex-1 outline-none text-sm" />
  </div>
  <!-- 候補リスト: absolute top-full shadow-xl rounded-xl -->
  <div class="absolute top-full mt-2 w-full bg-white shadow-xl rounded-xl overflow-hidden z-20">
    <div class="px-4 py-3 hover:bg-violet-50 cursor-pointer text-sm">Tailwind CSS</div>
  </div>
</div>`}>
  <div class="w-full max-w-xs">
    <Tooltip label="focus-within:ring-2 focus-within:ring-violet-400 border rounded-xl transition">
      <div class="relative">
        <div class="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-violet-400 focus-within:border-transparent transition bg-white">
          <span class="text-gray-400 text-sm">🔍</span>
          <input type="text" bind:value={query} placeholder="検索..." class="flex-1 outline-none text-sm text-gray-700 bg-transparent" />
          {#if query}
            <button onclick={() => query = ''} class="text-gray-300 hover:text-gray-500 text-xs">✕</button>
          {/if}
        </div>
        {#if results.length > 0}
          <Tooltip label="absolute top-full mt-2 w-full bg-white shadow-xl rounded-xl z-20 overflow-hidden">
            <div class="absolute top-full mt-2 w-full bg-white shadow-xl rounded-xl z-20 overflow-hidden border border-gray-100">
              {#each results as r}
                <button onclick={() => { query = r }} class="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-violet-50 transition flex items-center gap-2">
                  <span class="text-gray-400 text-xs">🔍</span> {r}
                </button>
              {/each}
            </div>
          </Tooltip>
        {:else if query}
          <div class="absolute top-full mt-2 w-full bg-white shadow-xl rounded-xl z-20 overflow-hidden border border-gray-100 px-4 py-3 text-sm text-gray-400">
            「{query}」の結果はありません
          </div>
        {/if}
      </div>
    </Tooltip>
    {#if query.length === 0}
      <div class="mt-3 flex flex-wrap gap-2">
        {#each ['Tailwind', 'Svelte', 'Daily UI'] as tag}
          <button onclick={() => query = tag} class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-violet-100 hover:text-violet-700 transition">{tag}</button>
        {/each}
      </div>
    {/if}
  </div>
</Showcase>
