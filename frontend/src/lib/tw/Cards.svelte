<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<div class="bg-white rounded-xl shadow-md p-6 w-64 hover:shadow-lg transition">
  <div class="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
    <span class="text-violet-600 text-xl">✦</span>
  </div>
  <h3 class="font-semibold text-gray-800 mb-1">カードタイトル</h3>
  <p class="text-sm text-gray-500">説明文がここに入ります。ホバーで影が強くなります。</p>
</div>`
</script>

<Showcase title="カード" {code}>
  <div class="bg-white rounded-xl shadow-md p-6 w-64 hover:shadow-lg transition">
    <div class="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
      <span class="text-violet-600 text-xl">✦</span>
    </div>
    <h3 class="font-semibold text-gray-800 mb-1">カードタイトル</h3>
    <p class="text-sm text-gray-500">説明文がここに入ります。ホバーで影が強くなります。</p>
  </div>

  <div class="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl p-6 w-64 text-white">
    <h3 class="font-semibold mb-1">グラデーションカード</h3>
    <p class="text-sm text-violet-200">カラフルなデザインにも使えます。</p>
  </div>
</Showcase>
