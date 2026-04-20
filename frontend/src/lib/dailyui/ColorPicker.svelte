<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let selected = $state('#7c3aed')
  const palette = ['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#3b82f6','#8b5cf6','#ec4899','#6b7280','#1f2937']
  const swatches = [
    ['#fef2f2','#fee2e2','#fca5a5','#f87171'],
    ['#fff7ed','#ffedd5','#fdba74','#fb923c'],
    ['#fefce8','#fef9c3','#fde047','#facc15'],
    ['#f0fdf4','#dcfce7','#86efac','#4ade80'],
    ['#eff6ff','#dbeafe','#93c5fd','#60a5fa'],
    ['#f5f3ff','#ede9fe','#c4b5fd','#a78bfa'],
  ]
</script>

<Showcase title="Daily UI #060 — Color Picker" code={`<div class="bg-white rounded-2xl shadow-xl p-5 w-64">
  <!-- プレビュー: w-full h-20 rounded-xl transition-colors duration-200 -->
  <div class="w-full h-20 rounded-xl mb-4 transition-colors duration-200" style="background-color: {selected}"></div>
  <!-- カラーパレット -->
  <div class="flex flex-wrap gap-1.5">
    {#each palette as color}
      <button class="w-6 h-6 rounded-full hover:scale-125 transition-transform ring-offset-1 {selected === color ? 'ring-2 ring-violet-500' : ''}" style="background-color: {color}"></button>
    {/each}
  </div>
  <!-- HEX入力 -->
  <input type="color" bind:value={selected} class="w-full mt-3 h-8 rounded-lg cursor-pointer border-0" />
</div>`}>
  <div class="bg-white rounded-2xl shadow-xl p-5 w-64">
    <Tooltip label="w-full h-20 rounded-xl transition-colors duration-200 (カラープレビュー)">
      <div class="w-full h-20 rounded-xl mb-4 transition-colors duration-200 shadow-inner" style="background-color: {selected}"></div>
    </Tooltip>

    <div class="grid grid-cols-4 gap-1 mb-3">
      {#each swatches as row}
        {#each row as swatch}
          <Tooltip label="w-full aspect-square rounded-md hover:scale-110 transition-transform cursor-pointer">
            <button
              onclick={() => selected = swatch}
              class="w-full aspect-square rounded-md hover:scale-110 transition-transform cursor-pointer {selected === swatch ? 'ring-2 ring-offset-1 ring-violet-500' : ''}"
              style="background-color: {swatch}"
            ></button>
          </Tooltip>
        {/each}
      {/each}
    </div>

    <div class="flex gap-2 mb-3">
      {#each palette as c}
        <Tooltip label="w-5 h-5 rounded-full hover:scale-125 transition-transform cursor-pointer">
          <button onclick={() => selected = c} class="w-5 h-5 rounded-full hover:scale-125 transition-transform {selected === c ? 'ring-2 ring-offset-1 ring-gray-400' : ''}" style="background-color: {c}"></button>
        </Tooltip>
      {/each}
    </div>

    <div class="flex items-center gap-2 mt-2">
      <span class="text-xs text-gray-400 font-mono">HEX</span>
      <input type="text" bind:value={selected} class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-mono outline-none focus:ring-2 focus:ring-violet-300" />
      <Tooltip label="input type=color w-8 h-8 cursor-pointer rounded-lg">
        <input type="color" bind:value={selected} class="w-8 h-8 rounded-lg cursor-pointer border-0 p-0 bg-transparent" />
      </Tooltip>
    </div>
  </div>
</Showcase>
