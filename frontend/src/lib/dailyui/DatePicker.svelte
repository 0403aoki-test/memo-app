<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let year = $state(2026), month = $state(3), selected = $state<number | null>(13)
  const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']

  function daysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate() }
  function firstDay(y: number, m: number) { return new Date(y, m, 1).getDay() }
  $derived: var days = daysInMonth(year, month)
  $derived: var offset = firstDay(year, month)
</script>

<Showcase title="Daily UI #080 — Date Picker" code={`<div class="bg-white rounded-2xl shadow-xl p-5 w-72">
  <!-- ヘッダー: flex justify-between items-center mb-4 -->
  <div class="flex justify-between items-center mb-4">
    <button class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">‹</button>
    <p class="font-semibold text-gray-800">2026年4月</p>
    <button class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">›</button>
  </div>
  <!-- カレンダーグリッド: grid grid-cols-7 -->
  <div class="grid grid-cols-7 gap-1 text-center text-sm">
    {#each days as day}
      <button class="w-8 h-8 rounded-full hover:bg-violet-100 transition {selected === day ? 'bg-violet-600 text-white' : ''}">
        {day}
      </button>
    {/each}
  </div>
</div>`}>
  <div class="bg-white rounded-2xl shadow-xl p-5 w-72">
    <Tooltip label="flex justify-between items-center mb-4 | w-8 h-8 rounded-full hover:bg-gray-100">
      <div class="flex justify-between items-center mb-4">
        <button onclick={() => { if (month === 0) { month = 11; year-- } else month-- }} class="w-8 h-8 rounded-full hover:bg-gray-100 transition flex items-center justify-center text-gray-600">‹</button>
        <p class="font-semibold text-gray-800 text-sm">{year}年 {months[month]}</p>
        <button onclick={() => { if (month === 11) { month = 0; year++ } else month++ }} class="w-8 h-8 rounded-full hover:bg-gray-100 transition flex items-center justify-center text-gray-600">›</button>
      </div>
    </Tooltip>

    <div class="grid grid-cols-7 gap-1 text-center mb-2">
      {#each ['日','月','火','水','木','金','土'] as d}
        <div class="text-xs font-medium text-gray-400 py-1">{d}</div>
      {/each}
    </div>

    <Tooltip label="grid grid-cols-7 gap-1 | w-8 h-8 rounded-full hover:bg-violet-100 | bg-violet-600 text-white (選択日)">
      <div class="grid grid-cols-7 gap-1 text-center">
        {#each Array(offset) as _}
          <div></div>
        {/each}
        {#each Array(days) as _, i}
          <button
            onclick={() => selected = i + 1}
            class="w-8 h-8 rounded-full text-xs transition mx-auto flex items-center justify-center {selected === i + 1 ? 'bg-violet-600 text-white font-bold' : 'hover:bg-violet-100 text-gray-700'} {i + 1 === 13 && selected !== 13 ? 'text-violet-500 font-semibold' : ''}"
          >{i + 1}</button>
        {/each}
      </div>
    </Tooltip>

    {#if selected}
      <div class="mt-3 pt-3 border-t border-gray-100 text-center">
        <p class="text-xs text-gray-500">選択日: <span class="font-semibold text-violet-600">{year}年{months[month]}{selected}日</span></p>
      </div>
    {/if}
  </div>
</Showcase>
