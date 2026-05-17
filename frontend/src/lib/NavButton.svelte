<script lang="ts">
  let { label, active, onclick }: { label: string; active: boolean; onclick: () => void } = $props()
</script>

<button
  {onclick}
  class="px-3.5 py-1 rounded-full text-xs font-normal tracking-tight cursor-pointer transition-all duration-200 {active ? 'bg-white/15 border border-white/30 text-white' : 'text-white/60'}"
>
  {label}
</button>
