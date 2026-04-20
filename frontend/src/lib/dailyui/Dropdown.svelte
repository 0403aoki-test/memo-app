<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let open1 = $state(false)
  let open2 = $state(false)
  let selected = $state('日本語')
  const langs = ['日本語', 'English', '中文', '한국어', 'Français']
  const actions = [
    { icon: '✏️', label: '編集' },
    { icon: '📋', label: 'コピー' },
    { icon: '🔗', label: 'リンクをコピー' },
    { icon: '📤', label: '共有' },
    { icon: '🗑', label: '削除', danger: true },
  ]
</script>

<Showcase title="Daily UI #027 — Dropdown" code={`<!-- ドロップダウン: relative + absolute z-10 -->
<div class="relative">
  <button onclick={() => open = !open} class="px-4 py-2 border rounded-xl flex items-center gap-2">
    {selected} <span class="transition-transform {open ? 'rotate-180' : ''}">▼</span>
  </button>
  {#if open}
    <!-- absolute top-full mt-1 bg-white border rounded-2xl shadow-xl z-10 -->
    <div class="absolute top-full mt-1 left-0 bg-white border border-gray-100 rounded-2xl shadow-xl z-10 py-1 min-w-full">
      {#each options as o}
        <button class="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm">...</button>
      {/each}
    </div>
  {/if}
</div>`}>
  <div class="flex flex-wrap gap-8 items-start justify-center py-4">
    <!-- セレクト型 -->
    <div class="relative">
      <p class="text-xs text-gray-400 mb-2">言語選択</p>
      <Tooltip label="px-4 py-2.5 bg-white border border-gray-200 rounded-xl flex items-center gap-3 hover:border-violet-300 shadow-sm">
        <button onclick={() => { open1 = !open1; open2 = false }} class="px-4 py-2.5 bg-white border border-gray-200 rounded-xl flex items-center gap-3 hover:border-violet-300 shadow-sm text-sm font-medium text-gray-700 transition min-w-32">
          🌐 {selected}
          <span class="ml-auto transition-transform {open1 ? 'rotate-180' : ''}">▾</span>
        </button>
      </Tooltip>
      {#if open1}
        <Tooltip label="absolute top-full mt-1 left-0 bg-white border border-gray-100 rounded-2xl shadow-xl z-10 py-1 min-w-full">
          <div class="absolute top-full mt-1 left-0 bg-white border border-gray-100 rounded-2xl shadow-xl z-10 py-1 min-w-full">
            {#each langs as l}
              <button onclick={() => { selected = l; open1 = false }} class="w-full text-left px-4 py-2.5 hover:bg-violet-50 hover:text-violet-700 text-sm text-gray-700 transition flex items-center justify-between">
                {l}
                {#if selected === l}<span class="text-violet-600">✓</span>{/if}
              </button>
            {/each}
          </div>
        </Tooltip>
      {/if}
    </div>

    <!-- アクションメニュー -->
    <div class="relative">
      <p class="text-xs text-gray-400 mb-2">アクション</p>
      <Tooltip label="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
        <button onclick={() => { open2 = !open2; open1 = false }} class="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition text-gray-600 font-bold">⋮</button>
      </Tooltip>
      {#if open2}
        <Tooltip label="absolute top-full mt-1 right-0 bg-white border border-gray-100 rounded-2xl shadow-xl z-10 py-1 w-44">
          <div class="absolute top-full mt-1 right-0 bg-white border border-gray-100 rounded-2xl shadow-xl z-10 py-1 w-44">
            {#each actions as a}
              <button onclick={() => open2 = false} class="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm transition flex items-center gap-2 {a.danger ? 'text-red-500 hover:bg-red-50' : 'text-gray-700'}">
                <span>{a.icon}</span>{a.label}
              </button>
            {/each}
          </div>
        </Tooltip>
      {/if}
    </div>
  </div>
</Showcase>
