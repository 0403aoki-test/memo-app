<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const code = `<span class="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">完了</span>
<span class="bg-yellow-100 text-yellow-700 text-xs font-medium px-2.5 py-1 rounded-full">進行中</span>
<span class="bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">未着手</span>
<span class="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">アーカイブ</span>
<span class="bg-violet-100 text-violet-700 text-xs font-medium px-2.5 py-1 rounded-full">新機能</span>`

  const rationale = `バッジは「状態」を一目で伝えるミニマルなコンポーネントです。背景色を薄く（100番台）・テキストを濃く（700番台）することで、コントラストを保ちながら主要コンテンツの邪魔をしません。rounded-full（完全な角丸）はソフトで親しみやすい印象を与え、ステータス表示に適しています。色は慣習的なセマンティクス（緑=成功・黄=警告・赤=エラー）に従うことでユーザーが直感的に意味を読み取れます。`
</script>

<Showcase title="バッジ" {code} {rationale}>
  <Tooltip label="Status Badge: 完了 (Success)">
    <span class="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">完了</span>
  </Tooltip>
  <Tooltip label="Status Badge: 進行中 (Warning)">
    <span class="bg-yellow-100 text-yellow-700 text-xs font-medium px-2.5 py-1 rounded-full">進行中</span>
  </Tooltip>
  <Tooltip label="Status Badge: 未着手 (Danger)">
    <span class="bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">未着手</span>
  </Tooltip>
  <Tooltip label="Status Badge: アーカイブ (Neutral)">
    <span class="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">アーカイブ</span>
  </Tooltip>
  <Tooltip label="Feature Badge: 新機能 (Accent)">
    <span class="bg-violet-100 text-violet-700 text-xs font-medium px-2.5 py-1 rounded-full">新機能</span>
  </Tooltip>
</Showcase>
