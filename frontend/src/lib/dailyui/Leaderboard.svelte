<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const players = [
    { rank: 1, name: '田中 太郎', score: 9840, avatar: '🥇', change: '+2' },
    { rank: 2, name: '鈴木 花子', score: 8720, avatar: '🥈', change: '-1' },
    { rank: 3, name: '佐藤 一郎', score: 7650, avatar: '🥉', change: '0' },
    { rank: 4, name: '高橋 美穂', score: 6930, avatar: '4', change: '+3' },
    { rank: 5, name: '伊藤 健二', score: 5810, avatar: '5', change: '-2' },
  ]
</script>

<Showcase title="Daily UI #019 — Leaderboard" code={`<div class="bg-white rounded-2xl shadow-md overflow-hidden w-80">
  <!-- 上位3名: グラデーション背景 -->
  <div class="bg-gradient-to-b from-violet-600 to-indigo-700 p-6 text-white">
    <p class="font-bold text-center mb-4">ランキング</p>
  </div>
  <!-- リスト: divide-y + hover:bg-gray-50 -->
  <div class="divide-y divide-gray-100">
    <div class="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition">
      <span class="text-lg w-6 text-center font-bold text-violet-600">1</span>
      ...
    </div>
  </div>
</div>`}>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden w-80">
    <Tooltip label="bg-gradient-to-b from-violet-600 to-indigo-700 text-white p-5">
      <div class="bg-gradient-to-b from-violet-600 to-indigo-700 p-5 text-white text-center">
        <p class="font-bold text-lg mb-1">🏆 ランキング</p>
        <p class="text-violet-200 text-xs">今週のトップスコア</p>
      </div>
    </Tooltip>
    <Tooltip label="divide-y divide-gray-100 text-sm">
      <div class="divide-y divide-gray-100">
        {#each players as p}
          <div class="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition cursor-pointer {p.rank <= 3 ? 'bg-violet-50/30' : ''}">
            <span class="text-lg w-7 text-center {p.rank <= 3 ? '' : 'text-sm font-bold text-gray-400'}">{p.rank <= 3 ? p.avatar : p.rank}</span>
            <div class="flex-1">
              <p class="text-sm font-semibold text-gray-800">{p.name}</p>
            </div>
            <span class="text-xs {p.change.startsWith('+') ? 'text-green-500' : p.change.startsWith('-') ? 'text-red-400' : 'text-gray-400'}">{p.change}</span>
            <span class="text-xs font-mono font-bold text-gray-700">{p.score.toLocaleString()}</span>
          </div>
        {/each}
      </div>
    </Tooltip>
  </div>
</Showcase>
