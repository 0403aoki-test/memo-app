<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const tabs = ['投稿', 'いいね', 'メディア'] as const
  type Tab = typeof tabs[number]

  let following = $state(false)
  let activeTab = $state<Tab>('投稿')

  const thumbnailGradients = [
    'from-violet-300 to-indigo-300',
    'from-pink-300 to-rose-300',
    'from-sky-300 to-teal-300',
    'from-amber-300 to-orange-300',
    'from-emerald-300 to-cyan-300',
    'from-purple-300 to-violet-300',
  ]

  const code = `<!-- Daily UI #006 — User Profile -->
<div class="bg-white rounded-2xl overflow-hidden shadow-md w-80">
  <!-- カバー画像 -->
  <div class="h-28 bg-gradient-to-r from-violet-500 to-indigo-600"></div>

  <div class="px-5 pb-5">
    <!-- アバター & フォローボタン (-mt-10 でカバーに重ねる) -->
    <div class="-mt-10 mb-3 flex justify-between items-end">
      <div class="w-20 h-20 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 ring-4 ring-white
        flex items-center justify-center text-white text-xl font-bold">TY</div>
      <button class="px-4 py-1.5 rounded-full text-sm font-semibold transition
        bg-violet-600 text-white hover:bg-violet-700">フォロー</button>
    </div>

    <!-- 名前 / bio -->
    <p class="font-bold text-gray-900 text-base">田中 太郎</p>
    <p class="text-xs text-gray-500 mt-0.5">UIデザイナー / フロントエンジニア 🎨</p>

    <!-- スタッツ -->
    <div class="flex gap-6 mt-4">
      <div class="text-center"><p class="font-bold text-gray-800 text-sm">128</p><p class="text-xs text-gray-400">投稿</p></div>
      <div class="text-center"><p class="font-bold text-gray-800 text-sm">4.2K</p><p class="text-xs text-gray-400">フォロワー</p></div>
      <div class="text-center"><p class="font-bold text-gray-800 text-sm">312</p><p class="text-xs text-gray-400">フォロー中</p></div>
    </div>

    <!-- タブ -->
    <div class="flex border-b border-gray-200 mt-4">
      <button class="flex-1 py-2 text-xs font-medium text-violet-600 border-b-2 border-violet-600">投稿</button>
      <button class="flex-1 py-2 text-xs font-medium text-gray-400 hover:text-gray-600">いいね</button>
      <button class="flex-1 py-2 text-xs font-medium text-gray-400 hover:text-gray-600">メディア</button>
    </div>

    <!-- グリッドサムネイル (aspect-square) -->
    <div class="grid grid-cols-3 gap-1 mt-3">
      <div class="aspect-square rounded bg-gradient-to-br from-violet-300 to-indigo-300"></div>
      ...
    </div>
  </div>
</div>`

  const rationale = `プロフィールカードは「カバー → アバター → 名前 → bio → スタッツ → タブ → コンテンツ」の一方向スキャンを意識したレイアウトです。-mt-10 でアバターをカバーに重ねてdepthを作り、ring-4 ring-white でグラデーション背景との境界を明確にします。aspect-square でグリッドサムネイルを正方形に揃えます。`
</script>

<Showcase title="Daily UI #006 — User Profile" {code} {rationale}>
  <div class="bg-white rounded-2xl overflow-hidden shadow-md w-80 mx-auto">
    <!-- カバー -->
    <div class="h-28 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-600 relative">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50"></div>
    </div>

    <div class="px-5 pb-5">
      <!-- アバター & フォローボタン -->
      <div class="-mt-10 mb-3 flex justify-between items-end">
        <div class="w-20 h-20 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 ring-4 ring-white flex items-center justify-center text-white text-xl font-bold shadow-md">
          TY
        </div>
        <button
          onclick={() => following = !following}
          class="px-4 py-1.5 rounded-full text-sm font-semibold transition-all {following ? 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500' : 'bg-violet-600 text-white hover:bg-violet-700'}"
        >
          {following ? 'フォロー中' : 'フォロー'}
        </button>
      </div>

      <!-- 名前・bio -->
      <p class="font-bold text-gray-900 text-sm">田中 太郎</p>
      <p class="text-xs text-gray-500 mt-0.5">UIデザイナー / フロントエンジニア 🎨</p>
      <p class="text-xs text-gray-400 mt-1.5 leading-relaxed">Tailwind CSS と Svelte で美しいUIを作ることが好き。</p>

      <!-- スタッツ -->
      <div class="flex gap-5 mt-4">
        <div class="text-center cursor-pointer hover:opacity-80 transition">
          <p class="font-bold text-gray-800 text-sm">128</p>
          <p class="text-xs text-gray-400">投稿</p>
        </div>
        <div class="text-center cursor-pointer hover:opacity-80 transition">
          <p class="font-bold text-gray-800 text-sm">4.2K</p>
          <p class="text-xs text-gray-400">フォロワー</p>
        </div>
        <div class="text-center cursor-pointer hover:opacity-80 transition">
          <p class="font-bold text-gray-800 text-sm">312</p>
          <p class="text-xs text-gray-400">フォロー中</p>
        </div>
      </div>

      <!-- タブ -->
      <div class="flex border-b border-gray-200 mt-4">
        {#each tabs as tab}
          <button
            onclick={() => activeTab = tab}
            class="flex-1 py-2 text-xs font-medium transition-all {activeTab === tab ? 'text-violet-600 border-b-2 border-violet-600' : 'text-gray-400 hover:text-gray-600'}"
          >
            {tab}
          </button>
        {/each}
      </div>

      <!-- グリッドサムネイル -->
      <div class="grid grid-cols-3 gap-1 mt-3">
        {#each thumbnailGradients as gradient}
          <div class="aspect-square rounded-sm bg-gradient-to-br {gradient} cursor-pointer hover:opacity-90 transition-opacity"></div>
        {/each}
      </div>

    </div>
  </div>
</Showcase>
