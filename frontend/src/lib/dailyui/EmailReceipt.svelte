<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const items = [
    { name: 'スニーカー Pro X (ブラック)', qty: 1, price: 12800 },
    { name: 'ソックス 3足セット', qty: 2, price: 1200 },
  ]
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
</script>

<Showcase title="Daily UI #017 — Email Receipt" code={`<div class="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm font-sans">
  <!-- ヘッダー: bg-gradient -->
  <div class="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-8 text-white text-center">
    <p class="text-2xl font-bold">✓ 注文完了</p>
  </div>
  <!-- 明細: divide-y -->
  <div class="divide-y divide-gray-100 px-6">
    <div class="flex justify-between py-3 text-sm">...</div>
  </div>
</div>`}>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden w-80">
    <Tooltip label="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center py-8">
      <div class="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-7 text-white text-center">
        <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <span class="text-2xl">✓</span>
        </div>
        <p class="font-bold text-lg">注文が確定しました</p>
        <p class="text-violet-200 text-xs mt-1">注文番号 #ORD-20260413</p>
      </div>
    </Tooltip>

    <div class="px-5 py-4">
      <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">注文内容</p>
      <Tooltip label="divide-y divide-gray-100 text-sm">
        <div class="divide-y divide-gray-100 text-sm">
          {#each items as item}
            <div class="flex justify-between py-2.5">
              <div>
                <p class="text-gray-800 text-xs font-medium">{item.name}</p>
                <p class="text-gray-400 text-xs">× {item.qty}</p>
              </div>
              <p class="text-gray-700 text-xs font-mono">¥{(item.price * item.qty).toLocaleString()}</p>
            </div>
          {/each}
          <div class="flex justify-between py-2.5 text-xs text-gray-500">
            <span>送料</span><span class="font-mono">¥0</span>
          </div>
          <div class="flex justify-between py-2.5">
            <span class="text-sm font-bold text-gray-800">合計</span>
            <span class="font-bold text-violet-600 font-mono">¥{subtotal.toLocaleString()}</span>
          </div>
        </div>
      </Tooltip>

      <div class="mt-4 p-3 bg-gray-50 rounded-xl text-xs text-gray-500 space-y-1">
        <div class="flex justify-between"><span>配送先</span><span class="text-gray-700">東京都渋谷区</span></div>
        <div class="flex justify-between"><span>お届け予定</span><span class="text-gray-700">2026年4月15日</span></div>
      </div>
    </div>
  </div>
</Showcase>
