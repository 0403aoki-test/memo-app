<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const columns = [
    { title: 'Todo', color: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400', cards: ['ログイン画面を作る', 'APIを設計する', 'テストを書く'] },
    { title: '進行中', color: 'bg-blue-100 text-blue-600', dot: 'bg-blue-500', cards: ['ダッシュボードUI', 'Daily UI #100'] },
    { title: '完了', color: 'bg-green-100 text-green-600', dot: 'bg-green-500', cards: ['Tailwind設定', 'Svelte導入', 'README作成'] },
  ]
</script>

<Showcase title="Daily UI #097 — Kanban Board" code={`<div class="grid grid-cols-3 gap-4">
  <div class="bg-gray-50 rounded-xl p-3">
    <div class="flex items-center gap-2 mb-3">
      <div class="w-2 h-2 rounded-full bg-gray-400"></div>
      <p class="text-sm font-semibold text-gray-700">Todo</p>
      <span class="ml-auto text-xs text-gray-400 bg-gray-200 px-1.5 rounded-full">3</span>
    </div>
    <!-- カード: bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-grab -->
    <div class="space-y-2">
      <div class="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition cursor-grab text-sm text-gray-700">
        ログイン画面を作る
      </div>
    </div>
  </div>
</div>`}>
  <div class="w-full grid grid-cols-3 gap-3">
    {#each columns as col}
      <Tooltip label="bg-gray-50 rounded-xl p-3 | bg-white rounded-lg shadow-sm hover:shadow-md cursor-grab">
        <div class="bg-gray-50 rounded-xl p-3">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-2 h-2 rounded-full {col.dot}"></div>
            <p class="text-xs font-semibold text-gray-700">{col.title}</p>
            <span class="ml-auto text-xs text-gray-400 bg-white px-1.5 py-0.5 rounded-full border border-gray-200">{col.cards.length}</span>
          </div>
          <div class="space-y-2">
            {#each col.cards as card}
              <div class="bg-white rounded-lg p-2.5 shadow-sm hover:shadow-md transition cursor-grab text-xs text-gray-700 border border-gray-100 hover:border-violet-200">
                {card}
              </div>
            {/each}
          </div>
          <button class="w-full mt-2 py-1.5 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition">+ 追加</button>
        </div>
      </Tooltip>
    {/each}
  </div>
</Showcase>
