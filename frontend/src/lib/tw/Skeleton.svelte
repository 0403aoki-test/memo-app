<script lang="ts">
  import Showcase from '../Showcase.svelte'

  let loaded = $state(false)
</script>

<Showcase
  title="スケルトンローディング (animate-pulse)"
  code={`<!-- animate-pulse で明滅 -->
<div class="animate-pulse space-y-3">
  <!-- 画像プレースホルダー -->
  <div class="w-full h-32 bg-gray-200 rounded-xl"></div>
  <!-- テキスト行 (幅違い) -->
  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
  <div class="h-3 bg-gray-200 rounded w-full"></div>
  <div class="h-3 bg-gray-200 rounded w-1/2"></div>
  <!-- ボタンプレースホルダー -->
  <div class="h-9 bg-gray-200 rounded-lg w-24"></div>
</div>

<!-- カードスケルトン (アバター + テキスト) -->
<div class="animate-pulse flex gap-3 p-4">
  <div class="w-12 h-12 bg-gray-200 rounded-full shrink-0"></div>
  <div class="flex-1 space-y-2 py-1">
    <div class="h-3 bg-gray-200 rounded w-2/3"></div>
    <div class="h-3 bg-gray-200 rounded w-full"></div>
    <div class="h-3 bg-gray-200 rounded w-4/5"></div>
  </div>
</div>`}
  rationale="スケルトンUIは「真っ白な画面」より体感速度が速く感じられます（研究で実証済み）。animate-pulse の明滅で「読み込み中」を暗示し、実際のレイアウトに近い形にすることでコンテンツ表示後のレイアウトシフトを防ぎます。幅違いのバー（w-3/4・w-full・w-1/2）でテキストの自然なばらつきを模倣します。"
>
  <div class="w-full max-w-sm space-y-4">
    <div class="flex justify-end">
      <button
        onclick={() => loaded = !loaded}
        class="text-xs px-3 py-1 rounded-full border border-violet-300 text-violet-600 hover:bg-violet-50 transition font-medium"
      >
        {loaded ? 'スケルトンを表示' : 'コンテンツを表示'}
      </button>
    </div>

    <!-- コンテンツカード -->
    {#if loaded}
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div class="w-full h-32 bg-gradient-to-br from-violet-400 to-indigo-500"></div>
        <div class="p-4 space-y-2">
          <p class="font-semibold text-gray-800 text-sm">コンテンツタイトル</p>
          <p class="text-xs text-gray-500">説明テキストがここに表示されます。</p>
          <p class="text-xs text-gray-400">サブテキスト — 2026年4月</p>
          <button class="mt-2 px-4 py-1.5 bg-violet-600 text-white text-xs rounded-lg">詳細を見る</button>
        </div>
      </div>
    {:else}
      <!-- カードスケルトン -->
      <div class="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
        <div class="w-full h-32 bg-gray-200"></div>
        <div class="p-4 space-y-3">
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="h-3 bg-gray-200 rounded w-full"></div>
          <div class="h-3 bg-gray-200 rounded w-1/2"></div>
          <div class="h-8 bg-gray-200 rounded-lg w-24 mt-2"></div>
        </div>
      </div>
    {/if}

    <!-- フィードスケルトン (アバター + テキスト) -->
    <div class="space-y-3">
      {#each [0, 1, 2] as i}
        <div class="flex gap-3 p-3 bg-white rounded-xl border border-gray-100 {loaded ? '' : 'animate-pulse'}">
          {#if loaded}
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {['TY', 'KS', 'MI'][i]}
            </div>
            <div class="flex-1 space-y-1">
              <p class="text-xs font-semibold text-gray-800">{['田中 太郎', '鈴木 花子', '松田 一郎'][i]}</p>
              <p class="text-xs text-gray-500">Tailwind CSSが大好きです！</p>
            </div>
          {:else}
            <div class="w-10 h-10 rounded-full bg-gray-200 shrink-0"></div>
            <div class="flex-1 space-y-2 py-1">
              <div class="h-3 bg-gray-200 rounded w-1/3"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

  </div>
</Showcase>
