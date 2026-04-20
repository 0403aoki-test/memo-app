<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let wifi = $state(true), bluetooth = $state(false), airplane = $state(false),
      location = $state(true), darkMode = $state(false), battery = $state(true)
  const items = [
    { label: 'Wi-Fi', icon: '📶', get: () => wifi, set: (v: boolean) => wifi = v },
    { label: 'Bluetooth', icon: '🔵', get: () => bluetooth, set: (v: boolean) => bluetooth = v },
    { label: '機内モード', icon: '✈️', get: () => airplane, set: (v: boolean) => airplane = v },
    { label: '位置情報', icon: '📍', get: () => location, set: (v: boolean) => location = v },
    { label: 'ダークモード', icon: '🌙', get: () => darkMode, set: (v: boolean) => darkMode = v },
    { label: '省エネモード', icon: '🔋', get: () => battery, set: (v: boolean) => battery = v },
  ]
</script>

<Showcase title="Daily UI #015 — On/Off Switch" code={`<!-- Tailwindトグル: sr-only peer + peer-checked + peer-checked:translate-x -->
<label class="flex items-center justify-between cursor-pointer">
  <span class="text-sm font-medium text-gray-800">Wi-Fi</span>
  <div class="relative">
    <input type="checkbox" class="sr-only peer" checked />
    <div class="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-violet-600 transition-colors"></div>
    <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow
      transition-transform peer-checked:translate-x-6"></div>
  </div>
</label>`}>
  <div class="w-72 bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
    {#each items as item}
      <Tooltip label="sr-only peer | peer-checked:bg-violet-600 | peer-checked:translate-x-6">
        <label class="flex items-center justify-between px-5 py-3.5 cursor-pointer hover:bg-gray-50 transition">
          <div class="flex items-center gap-3">
            <span class="text-lg">{item.icon}</span>
            <span class="text-sm font-medium text-gray-800">{item.label}</span>
          </div>
          <div class="relative">
            <input type="checkbox" class="sr-only peer" checked={item.get()} onchange={(e) => item.set((e.target as HTMLInputElement).checked)} />
            <div class="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-violet-600 transition-colors duration-200"></div>
            <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-6"></div>
          </div>
        </label>
      </Tooltip>
    {/each}
  </div>
</Showcase>
