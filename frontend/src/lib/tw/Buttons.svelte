<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const code = `<button class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg font-medium transition">
  Primary
</button>

<button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition">
  Secondary
</button>

<button class="border border-violet-600 text-violet-600 hover:bg-violet-50 px-4 py-2 rounded-lg font-medium transition">
  Outline
</button>

<button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition">
  Danger
</button>`

  const rationale = `ボタンの種類を「重要度」で使い分けることで、ユーザーが次に何をすべきかを直感的に理解できます。Primary（紫・塗り）は最も重要なCTA、Secondary（グレー）は補助アクション、Outline（枠線）は控えめな選択肢、Danger（赤）は取り消せない破壊的操作に使います。色のセマンティクスがそのままアフォーダンスになるのがポイントです。`
</script>

<Showcase title="ボタン" {code} {rationale}>
  <Tooltip label="Primary Button">
    <button class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg font-medium transition">Primary</button>
  </Tooltip>
  <Tooltip label="Secondary Button">
    <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition">Secondary</button>
  </Tooltip>
  <Tooltip label="Outline Button">
    <button class="border border-violet-600 text-violet-600 hover:bg-violet-50 px-4 py-2 rounded-lg font-medium transition">Outline</button>
  </Tooltip>
  <Tooltip label="Danger Button">
    <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition">Danger</button>
  </Tooltip>
</Showcase>
