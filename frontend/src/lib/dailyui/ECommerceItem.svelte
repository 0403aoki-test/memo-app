<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let qty = $state(1)
  let selectedColor = $state('violet')
  const colors = ['violet', 'pink', 'sky', 'amber']
  const colorMap: Record<string, string> = { violet: 'bg-violet-500', pink: 'bg-pink-500', sky: 'bg-sky-500', amber: 'bg-amber-500' }
</script>

<Showcase title="Daily UI #012 — E-Commerce Item" code={`<div class="bg-white rounded-2xl shadow-md overflow-hidden w-72">
  <div class="h-48 bg-gradient-to-br from-violet-100 to-indigo-200 flex items-center justify-center">
    <span class="text-6xl">👟</span>
  </div>
  <div class="p-5">
    <p class="font-bold text-gray-900">スニーカー Pro X</p>
    <p class="text-violet-600 font-semibold text-lg mt-1">¥12,800</p>
    <button class="mt-4 w-full py-2.5 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition">
      カートに追加
    </button>
  </div>
</div>`}>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden w-72">
    <Tooltip label="h-48 bg-gradient-to-br from-violet-100 to-indigo-200 flex items-center justify-center">
      <div class="h-48 bg-gradient-to-br from-violet-100 to-indigo-200 flex items-center justify-center">
        <span class="text-6xl">👟</span>
      </div>
    </Tooltip>
    <div class="p-5">
      <p class="font-bold text-gray-900 text-sm">スニーカー Pro X</p>
      <p class="text-xs text-gray-400 mb-2">軽量・通気性抜群のランニングシューズ</p>
      <div class="flex items-center justify-between mb-3">
        <p class="text-violet-600 font-bold text-lg">¥12,800</p>
        <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">在庫あり</span>
      </div>
      <!-- カラー選択 -->
      <div class="flex gap-2 mb-4">
        {#each colors as c}
          <Tooltip label="{colorMap[c]} ring-2 ring-offset-2 ring-{c}-500 rounded-full">
            <button
              onclick={() => selectedColor = c}
              class="w-6 h-6 rounded-full {colorMap[c]} transition-transform hover:scale-110 {selectedColor === c ? 'ring-2 ring-offset-2 ring-violet-400' : ''}"
            ></button>
          </Tooltip>
        {/each}
      </div>
      <!-- 数量 -->
      <div class="flex items-center gap-3 mb-4">
        <Tooltip label="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100">
          <button onclick={() => qty = Math.max(1, qty - 1)} class="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100 transition text-gray-600 font-medium text-sm">−</button>
        </Tooltip>
        <span class="text-sm font-semibold text-gray-800 w-6 text-center">{qty}</span>
        <Tooltip label="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100">
          <button onclick={() => qty++} class="w-8 h-8 rounded-full border border-gray-200 hover:bg-gray-100 transition text-gray-600 font-medium text-sm">+</button>
        </Tooltip>
      </div>
      <Tooltip label="w-full py-2.5 bg-violet-600 rounded-xl hover:bg-violet-700 active:scale-95 transition">
        <button class="w-full py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 active:scale-95 transition transform">
          カートに追加 — ¥{(12800 * qty).toLocaleString()}
        </button>
      </Tooltip>
    </div>
  </div>
</Showcase>
