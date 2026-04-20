<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let copied = $state(false)
  function copy() { copied = true; setTimeout(() => copied = false, 2000) }

  const socials = [
    { label: 'X', bg: 'bg-black hover:bg-gray-800', tooltip: 'bg-black rounded-full w-12 h-12 flex items-center justify-center' },
    { label: 'f', bg: 'bg-blue-600 hover:bg-blue-700', tooltip: 'bg-blue-600 rounded-full w-12 h-12' },
    { label: 'in', bg: 'bg-sky-500 hover:bg-sky-600', tooltip: 'bg-sky-500 rounded-full w-12 h-12' },
    { label: '✉', bg: 'bg-red-500 hover:bg-red-600', tooltip: 'bg-red-500 rounded-full w-12 h-12' },
  ]
</script>

<Showcase title="Daily UI #010 — Social Share" code={`<div class="bg-white rounded-2xl shadow-xl p-6 w-80">
  <p class="font-bold text-gray-800 mb-4">シェアする</p>
  <div class="flex gap-3 justify-center mb-5">
    <button class="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">X</button>
    ...
  </div>
  <div class="flex gap-2">
    <input class="flex-1 border rounded-lg px-3 py-2 text-sm" value="https://example.com" readonly />
    <button class="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm">コピー</button>
  </div>
</div>`}>
  <div class="bg-white rounded-2xl shadow-xl p-6 w-80">
    <p class="font-bold text-gray-800 mb-1 text-sm">シェアする</p>
    <p class="text-xs text-gray-400 mb-5">このコンテンツを友達に共有しましょう</p>
    <div class="flex gap-3 justify-center mb-5">
      {#each socials as s}
        <Tooltip label={s.tooltip}>
          <button class="w-12 h-12 rounded-full {s.bg} text-white flex items-center justify-center text-sm font-bold hover:scale-110 transition-transform">
            {s.label}
          </button>
        </Tooltip>
      {/each}
    </div>
    <div class="flex gap-2">
      <Tooltip label="flex-1 border border-gray-200 rounded-lg text-sm font-mono truncate">
        <input class="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs font-mono text-gray-500 bg-gray-50 w-full min-w-0 truncate" value="https://example.com/post/123" readonly />
      </Tooltip>
      <Tooltip label="bg-violet-600 hover:bg-violet-700 rounded-lg transition active:scale-95">
        <button onclick={copy} class="px-3 py-2 {copied ? 'bg-green-500' : 'bg-violet-600 hover:bg-violet-700'} text-white rounded-lg text-xs font-medium transition active:scale-95 transform whitespace-nowrap">
          {copied ? '✓ コピー済' : 'コピー'}
        </button>
      </Tooltip>
    </div>
  </div>
</Showcase>
