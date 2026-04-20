<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  type Todo = { id: number; text: string; done: boolean }
  let todos = $state<Todo[]>([
    { id: 1, text: 'Tailwind CSS を学ぶ', done: true },
    { id: 2, text: 'Daily UI を100個作る', done: false },
    { id: 3, text: 'Svelte 5 を理解する', done: false },
    { id: 4, text: 'PRを作成する', done: true },
  ])
  let input = $state('')

  function add() {
    if (!input.trim()) return
    todos = [...todos, { id: Date.now(), text: input, done: false }]
    input = ''
  }
  function remove(id: number) { todos = todos.filter(t => t.id !== id) }
  $derived: var done = todos.filter(t => t.done).length
</script>

<Showcase title="Daily UI #042 — To-Do List" code={`<!-- line-through + opacity-50 で完了状態 -->
<label class="flex items-center gap-3 cursor-pointer group">
  <input type="checkbox" class="w-4 h-4 accent-violet-600 rounded" bind:checked={todo.done} />
  <span class="{todo.done ? 'line-through text-gray-300' : 'text-gray-700'} text-sm transition-all">
    {todo.text}
  </span>
</label>`}>
  <div class="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
      <p class="font-bold text-gray-900 text-sm">タスク</p>
      <span class="text-xs text-gray-400">{done}/{todos.length} 完了</span>
    </div>

    <!-- プログレス -->
    <Tooltip label="h-1 bg-gray-100 | h-1 bg-violet-500 transition-all duration-500">
      <div class="h-1 bg-gray-100">
        <div class="h-1 bg-violet-500 transition-all duration-500" style="width: {todos.length ? (done/todos.length)*100 : 0}%"></div>
      </div>
    </Tooltip>

    <div class="divide-y divide-gray-50 max-h-52 overflow-y-auto">
      {#each todos as todo}
        <Tooltip label="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 | line-through text-gray-300 (完了時)">
          <div class="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition group">
            <input type="checkbox" bind:checked={todo.done} class="w-4 h-4 accent-violet-600 rounded shrink-0 cursor-pointer" />
            <span class="flex-1 text-sm transition-all {todo.done ? 'line-through text-gray-300' : 'text-gray-700'}">{todo.text}</span>
            <button onclick={() => remove(todo.id)} class="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition text-xs">✕</button>
          </div>
        </Tooltip>
      {/each}
    </div>

    <div class="flex gap-2 p-3 border-t border-gray-100">
      <Tooltip label="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-violet-300">
        <input type="text" bind:value={input} onkeydown={(e) => e.key === 'Enter' && add()} placeholder="タスクを追加..." class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-violet-300 min-w-0" />
      </Tooltip>
      <Tooltip label="w-9 h-9 bg-violet-600 rounded-lg hover:bg-violet-700 active:scale-90">
        <button onclick={add} class="w-9 h-9 bg-violet-600 rounded-lg flex items-center justify-center text-white hover:bg-violet-700 active:scale-90 transition-transform shrink-0">+</button>
      </Tooltip>
    </div>
  </div>
</Showcase>
