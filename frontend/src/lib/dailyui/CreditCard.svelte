<script lang="ts">
  import Showcase from '../Showcase.svelte'

  const code = `<div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 w-80 text-white shadow-2xl">
  <!-- チップ -->
  <div class="w-10 h-7 bg-yellow-400 rounded mb-6 opacity-90"></div>

  <!-- カード番号 -->
  <p class="text-xl font-mono tracking-widest mb-6">
    4242 4242 4242 4242
  </p>

  <!-- 下部情報 -->
  <div class="flex justify-between items-end">
    <div>
      <p class="text-xs text-gray-400 mb-1">カード名義</p>
      <p class="font-semibold tracking-wide">TARO YAMADA</p>
    </div>
    <div class="text-right">
      <p class="text-xs text-gray-400 mb-1">有効期限</p>
      <p class="font-semibold">12 / 27</p>
    </div>
  </div>
</div>`
</script>

<Showcase title="Daily UI #002 — Credit Card" {code}>
  <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 w-80 text-white shadow-2xl">
    <div class="w-10 h-7 bg-yellow-400 rounded mb-6 opacity-90"></div>
    <p class="text-xl font-mono tracking-widest mb-6">4242 4242 4242 4242</p>
    <div class="flex justify-between items-end">
      <div>
        <p class="text-xs text-gray-400 mb-1">カード名義</p>
        <p class="font-semibold tracking-wide">TARO YAMADA</p>
      </div>
      <div class="text-right">
        <p class="text-xs text-gray-400 mb-1">有効期限</p>
        <p class="font-semibold">12 / 27</p>
      </div>
    </div>
  </div>
</Showcase>
