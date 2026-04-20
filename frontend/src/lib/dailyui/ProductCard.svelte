<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const products = [
    { name: 'AirPods Pro', price: 39800, original: 49800, emoji: '🎧', rating: 4.8, reviews: 2341, badge: 'SALE', gradient: 'from-gray-800 to-gray-900' },
    { name: 'MacBook Air', price: 164800, original: null, emoji: '💻', rating: 4.9, reviews: 5821, badge: 'NEW', gradient: 'from-slate-700 to-slate-900' },
    { name: 'iPhone 17', price: 124800, original: null, emoji: '📱', rating: 4.7, reviews: 9123, badge: null, gradient: 'from-indigo-700 to-violet-900' },
  ]
</script>

<Showcase title="Daily UI #098 — Product Card" code={`<div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition group">
  <!-- 商品画像エリア: aspect-square bg-gradient overflow-hidden -->
  <div class="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
    <span class="text-6xl group-hover:scale-110 transition-transform duration-300">🎧</span>
    <span class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">SALE</span>
  </div>
  <div class="p-4">
    <p class="font-bold text-gray-900">AirPods Pro</p>
    <p class="text-violet-600 font-bold text-lg">¥39,800</p>
    <p class="text-gray-300 line-through text-sm">¥49,800</p>
  </div>
</div>`}>
  <div class="grid grid-cols-3 gap-3 w-full max-w-lg">
    {#each products as p}
      <Tooltip label="rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition group overflow-hidden">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition group cursor-pointer">
          <div class="aspect-square bg-gradient-to-br {p.gradient} flex items-center justify-center relative overflow-hidden">
            <span class="text-4xl group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
            {#if p.badge}
              <span class="absolute top-2 left-2 {p.badge === 'SALE' ? 'bg-red-500' : 'bg-green-500'} text-white text-xs px-1.5 py-0.5 rounded-full font-bold">{p.badge}</span>
            {/if}
            <button class="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white text-xs hover:bg-white/40 transition">♡</button>
          </div>
          <div class="p-3">
            <p class="font-bold text-gray-900 text-xs">{p.name}</p>
            <div class="flex items-center gap-1 my-1">
              <span class="text-yellow-400 text-xs">★</span>
              <span class="text-xs text-gray-500">{p.rating}</span>
            </div>
            <p class="text-violet-600 font-bold text-sm">¥{p.price.toLocaleString()}</p>
            {#if p.original}
              <p class="text-gray-300 line-through text-xs">¥{p.original.toLocaleString()}</p>
            {/if}
          </div>
        </div>
      </Tooltip>
    {/each}
  </div>
</Showcase>
