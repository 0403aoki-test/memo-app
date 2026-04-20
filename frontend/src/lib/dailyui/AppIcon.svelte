<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
</script>

<Showcase title="Daily UI #005 — App Icon" code={`<div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl">
  <span class="text-4xl">✦</span>
</div>`}>
  <div class="flex flex-wrap gap-6 items-end">
    <Tooltip label="rounded-3xl bg-gradient-to-br shadow-2xl">
      <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform">
        <span class="text-4xl">✦</span>
      </div>
    </Tooltip>
    <Tooltip label="rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600">
      <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform">
        <span class="text-4xl">🎵</span>
      </div>
    </Tooltip>
    <Tooltip label="rounded-3xl bg-gradient-to-br from-teal-400 to-emerald-600">
      <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform">
        <span class="text-4xl">📸</span>
      </div>
    </Tooltip>
    <Tooltip label="rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500">
      <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform">
        <span class="text-4xl">🔥</span>
      </div>
    </Tooltip>
  </div>
</Showcase>
