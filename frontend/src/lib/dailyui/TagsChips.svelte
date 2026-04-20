<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let tags = $state(['Tailwind CSS', 'Svelte', 'TypeScript', 'Daily UI', 'UI Design'])
  let input = $state('')

  function add() {
    if (input.trim() && !tags.includes(input.trim())) {
      tags = [...tags, input.trim()]
      input = ''
    }
  }
  function remove(tag: string) { tags = tags.filter(t => t !== tag) }
</script>

<Showcase title="Daily UI #087 — Tags / Chips" code={`<!-- タグ/チップ: inline-flex items-center gap-1 rounded-full px-3 py-1 -->
<span class="inline-flex items-center gap-1 bg-violet-100 text-violet-700 rounded-full px-3 py-1 text-sm font-medium">
  Tailwind CSS
  <button class="ml-1 text-violet-400 hover:text-violet-700 transition">✕</button>
</span>

<!-- カラーバリエーション -->
<span class="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm">React</span>
<span class="bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm">Vue.js</span>`}>
  <div class="w-full max-w-md space-y-4">
    <!-- インタラクティブタグ入力 -->
    <div class="border border-gray-200 rounded-xl p-3 focus-within:ring-2 focus-within:ring-violet-300 transition">
      <div class="flex flex-wrap gap-2 mb-2">
        {#each tags as tag}
          <Tooltip label="inline-flex items-center gap-1 bg-violet-100 text-violet-700 rounded-full px-3 py-1 text-xs font-medium">
            <span class="inline-flex items-center gap-1 bg-violet-100 text-violet-700 rounded-full px-2.5 py-1 text-xs font-medium">
              {tag}
              <button onclick={() => remove(tag)} class="text-violet-400 hover:text-violet-700 transition ml-0.5 text-xs leading-none">✕</button>
            </span>
          </Tooltip>
        {/each}
      </div>
      <input type="text" bind:value={input} onkeydown={(e) => e.key === 'Enter' && add()} placeholder="タグを追加してEnter..." class="w-full text-sm outline-none text-gray-700 placeholder-gray-300 bg-transparent" />
    </div>

    <!-- カラーバリエーション -->
    <div class="flex flex-wrap gap-2">
      {#each [
        ['bg-blue-100 text-blue-700', 'React'],
        ['bg-green-100 text-green-700', 'Vue.js'],
        ['bg-orange-100 text-orange-700', 'Svelte'],
        ['bg-red-100 text-red-700', 'Angular'],
        ['bg-purple-100 text-purple-700', 'Next.js'],
        ['bg-cyan-100 text-cyan-700', 'Astro'],
      ] as [cls, label]}
        <Tooltip label="rounded-full px-3 py-1 text-xs font-medium {cls}">
          <span class="rounded-full px-3 py-1 text-xs font-medium cursor-pointer hover:opacity-80 transition {cls}">{label}</span>
        </Tooltip>
      {/each}
    </div>

    <!-- アウトライン版 -->
    <div class="flex flex-wrap gap-2">
      {#each ['フロントエンド', 'バックエンド', 'モバイル', 'DevOps', 'AI/ML'] as t}
        <Tooltip label="rounded-full px-3 py-1 text-xs border border-gray-300 text-gray-600 hover:border-violet-400 hover:text-violet-600">
          <span class="rounded-full px-3 py-1 text-xs border border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600 cursor-pointer transition">{t}</span>
        </Tooltip>
      {/each}
    </div>
  </div>
</Showcase>
