<script lang="ts">
  // Tailwind CSS
  import Typography from './lib/tw/Typography.svelte'
  import Buttons from './lib/tw/Buttons.svelte'
  import Cards from './lib/tw/Cards.svelte'
  import Badges from './lib/tw/Badges.svelte'
  import Forms from './lib/tw/Forms.svelte'
  import Animations from './lib/tw/Animations.svelte'
  import Grid from './lib/tw/Grid.svelte'
  import Alerts from './lib/tw/Alerts.svelte'
  import Avatars from './lib/tw/Avatars.svelte'
  import Progress from './lib/tw/Progress.svelte'
  import Skeleton from './lib/tw/Skeleton.svelte'
  import Table from './lib/tw/Table.svelte'

  // DaisyUI
  import DaisyShowcase from './lib/daisyui/DaisyShowcase.svelte'

  // Worker Demo
  import WorkerDemo from './lib/worker/WorkerDemo.svelte'

  // Navigation components
  import NavButton from './lib/NavButton.svelte'

  type Section = 'tailwind' | 'daisyui' | 'worker'
  let section = $state<Section>('tailwind')
  let menuOpen = $state(false)

  const sections: { label: string; value: Section }[] = [
    { label: 'Tailwind CSS', value: 'tailwind' },
    { label: 'DaisyUI', value: 'daisyui' },
    { label: 'Thread Worker', value: 'worker' }
  ]

  function handleSectionChange(s: Section) {
    section = s
    menuOpen = false
  }
</script>

<div class="min-h-screen bg-[#f5f5f7]">
  <!-- Apple-style Nav -->
  <header class="sticky top-0 z-50 h-12 bg-black/80 backdrop-blur-xl flex items-center">
    <div class="max-w-6xl mx-auto px-6 w-full flex items-center gap-6">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-5 h-5 rounded bg-white/15 border border-white/20 flex items-center justify-center">
          <span class="text-white text-xs font-bold leading-none">UI</span>
        </div>
        <span class="text-white text-xs opacity-80">学習ショーケース</span>
      </div>

      <!-- Desktop Nav tabs -->
      <nav class="hidden md:flex gap-1 ml-auto">
        {#each sections as { label, value } (value)}
          <NavButton {label} active={section === value} onclick={() => handleSectionChange(value)} />
        {/each}
      </nav>

      <!-- Mobile hamburger menu -->
      <button
        class="md:hidden ml-auto p-2 rounded hover:bg-white/10 transition-colors cursor-pointer"
        onclick={() => menuOpen = !menuOpen}
        aria-label="Menu"
      >
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu dropdown -->
    {#if menuOpen}
      <div class="absolute top-12 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden">
        <nav class="flex flex-col p-4 gap-2">
          {#each sections as { label, value } (value)}
            <button
              onclick={() => handleSectionChange(value)}
              class={`px-4 py-2 rounded text-sm text-white text-left hover:bg-white/10 transition-colors ${
                section === value ? 'bg-white/15' : ''
              }`}
            >
              {label}
            </button>
          {/each}
        </nav>
      </div>
    {/if}
  </header>


  <!-- Main content -->
  <main class="max-w-6xl mx-auto py-[60px] px-6 pb-20">
    {#if section === 'tailwind'}
      <Typography />
      <Buttons />
      <Badges />
      <Avatars />
      <Cards />
      <Alerts />
      <Progress />
      <Skeleton />
      <Forms />
      <Animations />
      <Grid />
      <Table />
    {:else if section === 'daisyui'}
      <DaisyShowcase />
    {:else}
      <WorkerDemo />
    {/if}
  </main>

  <!-- Footer -->
  <footer class="bg-black p-6 text-center">
    <p class="text-xs text-white/40 tracking-tight">学習ショーケース — Apple Design System インスパイア</p>
  </footer>
</div>
