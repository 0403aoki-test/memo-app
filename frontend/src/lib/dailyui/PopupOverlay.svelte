<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let open = $state(false)
</script>

<Showcase title="Daily UI #016 — Pop-Up / Overlay" code={`<!-- backdrop: fixed inset-0 bg-black/50 backdrop-blur-sm z-50 -->
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
    <h3 class="font-bold text-gray-900 mb-2">確認</h3>
    <p class="text-sm text-gray-500 mb-6">この操作は取り消せません。続けますか？</p>
    <div class="flex gap-3">
      <button class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50">キャンセル</button>
      <button class="flex-1 py-2.5 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600">削除する</button>
    </div>
  </div>
</div>`}>
  <div class="w-full flex flex-col items-center gap-4">
    <Tooltip label="px-5 py-2.5 bg-violet-600 rounded-xl hover:bg-violet-700 active:scale-95">
      <button onclick={() => open = true} class="px-5 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 active:scale-95 transition transform">
        モーダルを開く
      </button>
    </Tooltip>

    {#if open}
      <Tooltip label="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onclick={(e) => { if (e.target === e.currentTarget) open = false }}>
          <div class="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-sm">
            <div class="text-3xl mb-3 text-center">⚠️</div>
            <p class="font-bold text-gray-900 text-center mb-2">本当に削除しますか？</p>
            <p class="text-sm text-gray-500 text-center mb-6">この操作は取り消せません。続けてもよろしいですか？</p>
            <div class="flex gap-3">
              <Tooltip label="flex-1 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                <button onclick={() => open = false} class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition w-full">キャンセル</button>
              </Tooltip>
              <Tooltip label="flex-1 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600 active:scale-95">
                <button onclick={() => open = false} class="flex-1 py-2.5 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 active:scale-95 transition transform">削除する</button>
              </Tooltip>
            </div>
          </div>
        </div>
      </Tooltip>
    {/if}
  </div>
</Showcase>
