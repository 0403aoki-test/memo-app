<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  type Item = { id: number; name: string; price: number; qty: number; emoji: string }
  let items = $state<Item[]>([
    { id: 1, name: 'スニーカー Pro X', price: 12800, qty: 1, emoji: '👟' },
    { id: 2, name: 'ウォーターボトル', price: 2400, qty: 2, emoji: '🧴' },
    { id: 3, name: 'ワイヤレスイヤホン', price: 8900, qty: 1, emoji: '🎧' },
  ])

  $derived: var subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  $derived: var shipping = subtotal > 10000 ? 0 : 500

  function remove(id: number) { items = items.filter(i => i.id !== id) }
</script>

<Showcase title="Daily UI #069 — Shopping Cart" code={`<div class="divide-y divide-gray-100">
  <div class="flex gap-4 py-4">
    <div class="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">👟</div>
    <div class="flex-1">
      <p class="font-medium text-gray-800">スニーカー Pro X</p>
      <p class="text-violet-600 font-bold">¥12,800</p>
    </div>
    <div class="flex items-center gap-2">
      <button class="w-7 h-7 rounded-full border border-gray-200 hover:bg-gray-100 text-sm">−</button>
      <span class="text-sm font-bold w-4 text-center">1</span>
      <button class="w-7 h-7 rounded-full border border-gray-200 hover:bg-gray-100 text-sm">+</button>
    </div>
  </div>
</div>`}>
  <div class="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="px-5 py-4 border-b border-gray-100 flex justify-between">
      <p class="font-bold text-gray-900 text-sm">カート</p>
      <span class="text-xs text-gray-400">{items.length} 点</span>
    </div>

    <div class="divide-y divide-gray-50 max-h-64 overflow-y-auto">
      {#each items as item}
        <div class="flex gap-3 px-4 py-3">
          <Tooltip label="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">
            <div class="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-2xl shrink-0">{item.emoji}</div>
          </Tooltip>
          <div class="flex-1 min-w-0">
            <p class="text-xs font-semibold text-gray-800 truncate">{item.name}</p>
            <p class="text-violet-600 text-xs font-bold mt-0.5">¥{item.price.toLocaleString()}</p>
            <div class="flex items-center gap-2 mt-1.5">
              <Tooltip label="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs">
                <button onclick={() => { if (item.qty > 1) item.qty-- }} class="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs transition flex items-center justify-center">−</button>
              </Tooltip>
              <span class="text-xs font-bold text-gray-700 w-4 text-center">{item.qty}</span>
              <Tooltip label="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs">
                <button onclick={() => item.qty++} class="w-6 h-6 rounded-full border border-gray-200 hover:bg-gray-100 text-xs transition flex items-center justify-center">+</button>
              </Tooltip>
            </div>
          </div>
          <div class="flex flex-col items-end justify-between">
            <button onclick={() => remove(item.id)} class="text-gray-300 hover:text-red-400 transition text-xs">✕</button>
            <p class="text-xs font-bold text-gray-800 font-mono">¥{(item.price * item.qty).toLocaleString()}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="border-t border-gray-100 px-5 py-4 space-y-2">
      <div class="flex justify-between text-xs text-gray-500">
        <span>小計</span><span class="font-mono">¥{subtotal.toLocaleString()}</span>
      </div>
      <div class="flex justify-between text-xs text-gray-500">
        <span>送料</span><span class="font-mono {shipping === 0 ? 'text-green-500' : ''}">{shipping === 0 ? '無料' : `¥${shipping}`}</span>
      </div>
      <div class="flex justify-between font-bold text-gray-800 text-sm pt-2 border-t border-gray-100">
        <span>合計</span><span class="font-mono text-violet-600">¥{(subtotal + shipping).toLocaleString()}</span>
      </div>
      <Tooltip label="w-full py-3 bg-violet-600 rounded-xl text-white font-semibold hover:bg-violet-700 active:scale-95">
        <button class="w-full py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 active:scale-95 transition transform mt-1">
          購入手続きへ
        </button>
      </Tooltip>
    </div>
  </div>
</Showcase>
