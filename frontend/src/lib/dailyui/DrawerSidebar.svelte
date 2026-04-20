<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let open = $state(false)
  const menus = [
    { icon: '🏠', label: 'ホーム', active: true },
    { icon: '📊', label: 'ダッシュボード', active: false },
    { icon: '👥', label: 'ユーザー', active: false },
    { icon: '⚙️', label: '設定', active: false },
    { icon: '❓', label: 'ヘルプ', active: false },
  ]
</script>

<Showcase title="Daily UI #093 — Drawer / Sidebar" code={`<!-- オーバーレイ: fixed inset-0 bg-black/50 z-40 -->
<div class="fixed inset-0 bg-black/50 z-40 transition-opacity" onclick={() => open = false}></div>

<!-- ドロワー: fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-2xl transform transition-transform -->
<!-- 閉じている: -translate-x-full -->
<!-- 開いている: translate-x-0 -->
<div class="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300
  {open ? 'translate-x-0' : '-translate-x-full'}">
  ...
</div>`}>
  <div class="w-full flex justify-center">
    <Tooltip label="px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-700">
      <button onclick={() => open = true} class="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition flex items-center gap-2">
        ☰ メニューを開く
      </button>
    </Tooltip>

    {#if open}
      <div class="fixed inset-0 bg-black/50 z-40" onclick={() => open = false}></div>
    {/if}

    <Tooltip label="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 | translate-x-0 (open) | -translate-x-full (close)">
      <div class="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 {open ? 'translate-x-0' : '-translate-x-full'}">
        <!-- ヘッダー -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center"><span class="text-white text-xs font-bold">UI</span></div>
            <span class="font-bold text-gray-800 text-sm">App</span>
          </div>
          <button onclick={() => open = false} class="text-gray-400 hover:text-gray-600 transition">✕</button>
        </div>

        <!-- メニュー -->
        <nav class="p-3 space-y-1">
          {#each menus as menu}
            <button class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition text-sm {menu.active ? 'bg-violet-50 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}">
              <span>{menu.icon}</span>
              <span>{menu.label}</span>
              {#if menu.active}<span class="ml-auto w-1.5 h-1.5 rounded-full bg-violet-600"></span>{/if}
            </button>
          {/each}
        </nav>

        <!-- フッター -->
        <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold">TY</div>
            <div>
              <p class="text-sm font-semibold text-gray-800">田中 太郎</p>
              <p class="text-xs text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </Tooltip>
  </div>
</Showcase>
