<script lang="ts">
  import type { Snippet } from 'svelte'

  let { label, children }: { label: string; children: Snippet } = $props()
  let hovered = $state(false)
</script>

<div
  class="relative inline-flex"
  onmouseenter={() => hovered = true}
  onmouseleave={() => hovered = false}
>
  {@render children()}
  {#if hovered}
    <div class="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded-md whitespace-nowrap z-20 pointer-events-none shadow-lg">
      {label}
      <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
    </div>
  {/if}
</div>
