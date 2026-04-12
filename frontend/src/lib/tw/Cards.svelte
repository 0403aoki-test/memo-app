<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const code = `<div class="bg-white rounded-xl shadow-md p-6 w-64 hover:shadow-lg transition">
  <div class="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
    <span class="text-violet-600 text-xl">✦</span>
  </div>
  <h3 class="font-semibold text-gray-800 mb-1">カードタイトル</h3>
  <p class="text-sm text-gray-500">説明文がここに入ります。ホバーで影が強くなります。</p>
</div>`

  const rationale = `カードは「情報のまとまり」を視覚的に分離するコンテナです。shadow-md（静止時）→ shadow-lg（ホバー時）で影を強くすることで、クリック可能であることをユーザーに伝えられます（depth feedback）。グラデーションカードは背景色でコンテンツの性質（プレミアム感・装飾的）を伝え、視線の優先順位をコントロールします。`
</script>

<Showcase title="カード" {code} {rationale}>
  <Tooltip label="White Card (Elevated)">
    <div class="bg-white rounded-xl shadow-md p-6 w-64 hover:shadow-lg transition cursor-pointer">
      <div class="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
        <span class="text-violet-600 text-xl">✦</span>
      </div>
      <h3 class="font-semibold text-gray-800 mb-1">カードタイトル</h3>
      <p class="text-sm text-gray-500">説明文がここに入ります。ホバーで影が強くなります。</p>
    </div>
  </Tooltip>

  <Tooltip label="Gradient Card">
    <div class="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 w-64 text-white cursor-pointer">
      <h3 class="font-semibold mb-1">グラデーションカード</h3>
      <p class="text-sm text-violet-200">カラフルなデザインにも使えます。</p>
    </div>
  </Tooltip>
</Showcase>
