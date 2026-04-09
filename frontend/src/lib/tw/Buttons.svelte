<script lang="ts">
  import Showcase from '../Showcase.svelte'

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
</script>

<Showcase title="ボタン" {code}>
  <button class="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg font-medium transition">Primary</button>
  <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition">Secondary</button>
  <button class="border border-violet-600 text-violet-600 hover:bg-violet-50 px-4 py-2 rounded-lg font-medium transition">Outline</button>
  <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition">Danger</button>
</Showcase>
