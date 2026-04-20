<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let active = $state(0)
  const shows = [
    { title: '宇宙の旅', genre: 'ドキュメンタリー', rating: '8.9', color: 'from-indigo-900 to-purple-900' },
    { title: 'サムライ戦記', genre: 'アクション', rating: '7.8', color: 'from-red-900 to-orange-900' },
    { title: '海底探検', genre: '自然', rating: '9.1', color: 'from-cyan-900 to-teal-900' },
  ]
</script>

<Showcase title="Daily UI #025 — TV App" code={`<!-- ダーク UI: bg-gray-900 text-white -->
<!-- フィーチャーバナー: h-48 bg-gradient-to-t from-gray-900 via-transparent to-transparent -->
<div class="relative h-48 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-white">...</div>
</div>
<!-- スクロールリスト: flex gap-3 overflow-x-auto scrollbar-hide -mx-1 px-1 -->
<div class="flex gap-3 overflow-x-auto">`}>
  <div class="w-full max-w-sm bg-gray-900 rounded-3xl overflow-hidden p-4 space-y-4">
    <!-- フィーチャー -->
    <Tooltip label="relative h-44 bg-gradient-to-br rounded-2xl overflow-hidden | absolute inset-0 bg-gradient-to-t from-gray-900">
      <div class="relative h-44 bg-gradient-to-br {shows[active].color} rounded-2xl overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4">
          <span class="text-xs bg-white/20 text-white rounded-full px-2 py-0.5 backdrop-blur-sm">{shows[active].genre}</span>
          <p class="text-white font-bold text-lg mt-1">{shows[active].title}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-yellow-400 text-xs">★ {shows[active].rating}</span>
            <button class="text-xs bg-white text-gray-900 rounded-full px-3 py-0.5 font-semibold">▶ 再生</button>
          </div>
        </div>
      </div>
    </Tooltip>

    <!-- サムネイルリスト -->
    <div>
      <p class="text-xs text-gray-400 font-semibold mb-2">おすすめ</p>
      <div class="flex gap-2">
        {#each shows as s, i}
          <Tooltip label="w-24 h-16 bg-gradient-to-br rounded-xl overflow-hidden cursor-pointer | ring-2 ring-violet-400 (active)">
            <button onclick={() => active = i} class="w-24 h-16 bg-gradient-to-br {s.color} rounded-xl overflow-hidden relative shrink-0 {active === i ? 'ring-2 ring-violet-400' : ''}">
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p class="text-white text-xs font-semibold text-center px-1">{s.title}</p>
              </div>
            </button>
          </Tooltip>
        {/each}
      </div>
    </div>

    <!-- ナビゲーション -->
    <Tooltip label="flex justify-around py-2 border-t border-gray-800">
      <div class="flex justify-around py-2 border-t border-gray-800">
        {#each [['🏠','ホーム'],['🔍','検索'],['📚','ライブラリ'],['👤','プロフィール']] as [icon, label], i}
          <button class="flex flex-col items-center gap-0.5 {i === 0 ? 'text-violet-400' : 'text-gray-500'}">
            <span class="text-lg">{icon}</span>
            <span class="text-xs">{label}</span>
          </button>
        {/each}
      </div>
    </Tooltip>
  </div>
</Showcase>
