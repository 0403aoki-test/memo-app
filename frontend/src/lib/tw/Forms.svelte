<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let checked = $state(false)
  let toggled = $state(false)

  const code = `<!-- テキスト入力 -->
<input
  type="text"
  placeholder="入力してください"
  class="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-400 w-64"
/>

<!-- セレクト -->
<select class="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-400">
  <option>選択してください</option>
  <option>オプション1</option>
</select>

<!-- チェックボックス -->
<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="w-4 h-4 accent-violet-600" />
  <span class="text-sm text-gray-700">チェックボックス</span>
</label>

<!-- トグル -->
<label class="flex items-center gap-2 cursor-pointer">
  <div class="relative">
    <input type="checkbox" class="sr-only peer" />
    <div class="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-violet-600 transition"></div>
    <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>
  </div>
  <span class="text-sm text-gray-700">トグル</span>
</label>`

  const rationale = `フォーム部品はアクセシビリティが最重要です。focus:ring-2 はキーボード操作ユーザーへの視覚的フィードバックで、WCAG 2.1 AA 基準を満たすために必須です。トグルスイッチは sr-only（スクリーンリーダー専用）の checkbox と peer 疑似クラスを組み合わせることで、見た目はカスタムUIでも意味的には正しい input として機能します。チェックボックスに accent-violet-600 を使うと1行でブランドカラーを適用できます。`
</script>

<Showcase title="フォーム部品" {code} {rationale}>
  <Tooltip label="Text Input">
    <input
      type="text"
      placeholder="入力してください"
      class="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-400 w-56"
    />
  </Tooltip>

  <Tooltip label="Select Menu">
    <select class="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-400">
      <option>選択してください</option>
      <option>オプション1</option>
      <option>オプション2</option>
    </select>
  </Tooltip>

  <Tooltip label="Checkbox">
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" bind:checked class="w-4 h-4 accent-violet-600" />
      <span class="text-sm text-gray-700">チェックボックス</span>
    </label>
  </Tooltip>

  <Tooltip label="Toggle Switch (peer pseudo-class)">
    <label class="flex items-center gap-2 cursor-pointer">
      <div class="relative">
        <input type="checkbox" bind:checked={toggled} class="sr-only peer" />
        <div class="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-violet-600 transition"></div>
        <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>
      </div>
      <span class="text-sm text-gray-700">トグル {toggled ? 'ON' : 'OFF'}</span>
    </label>
  </Tooltip>
</Showcase>
