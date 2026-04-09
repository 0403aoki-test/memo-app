<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<span class="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">完了</span>
<span class="bg-yellow-100 text-yellow-700 text-xs font-medium px-2.5 py-1 rounded-full">進行中</span>
<span class="bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">未着手</span>
<span class="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">アーカイブ</span>
<span class="bg-violet-100 text-violet-700 text-xs font-medium px-2.5 py-1 rounded-full">新機能</span>`
</script>

<Showcase title="バッジ" {code}>
  <span class="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">完了</span>
  <span class="bg-yellow-100 text-yellow-700 text-xs font-medium px-2.5 py-1 rounded-full">進行中</span>
  <span class="bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">未着手</span>
  <span class="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">アーカイブ</span>
  <span class="bg-violet-100 text-violet-700 text-xs font-medium px-2.5 py-1 rounded-full">新機能</span>
</Showcase>
