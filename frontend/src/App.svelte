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

  type Section = 'tailwind' | 'daisyui'
  let section = $state<Section>('tailwind')
</script>

<div style="min-height: 100svh; background: #f5f5f7;">
  <!-- Apple-style Nav -->
  <header style="
    position: sticky;
    top: 0;
    z-index: 50;
    height: 48px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    display: flex;
    align-items: center;
  ">
    <div style="
      max-width: 980px;
      margin: 0 auto;
      padding: 0 24px;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 24px;
    ">
      <!-- Logo -->
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <span style="color: white; font-size: 10px; font-weight: 700; font-family: system-ui, sans-serif; line-height: 1;">UI</span>
        </div>
        <span style="color: white; font-size: 12px; font-family: 'SF Pro Text', system-ui, sans-serif; opacity: 0.8;">学習ショーケース</span>
      </div>

      <!-- Nav tabs -->
      <nav style="display: flex; gap: 4px;">
        <button
          onclick={() => section = 'tailwind'}
          style="
            padding: 5px 14px;
            border-radius: 980px;
            font-size: 12px;
            font-family: 'SF Pro Text', system-ui, sans-serif;
            font-weight: 400;
            letter-spacing: -0.12px;
            border: 1px solid {section === 'tailwind' ? 'rgba(255,255,255,0.3)' : 'transparent'};
            background: {section === 'tailwind' ? 'rgba(255,255,255,0.15)' : 'transparent'};
            color: {section === 'tailwind' ? '#ffffff' : 'rgba(255,255,255,0.6)'};
            cursor: pointer;
            transition: all 0.2s;
          "
        >
          Tailwind CSS
        </button>
        <button
          onclick={() => section = 'daisyui'}
          style="
            padding: 5px 14px;
            border-radius: 980px;
            font-size: 12px;
            font-family: 'SF Pro Text', system-ui, sans-serif;
            font-weight: 400;
            letter-spacing: -0.12px;
            border: 1px solid {section === 'daisyui' ? 'rgba(255,255,255,0.3)' : 'transparent'};
            background: {section === 'daisyui' ? 'rgba(255,255,255,0.15)' : 'transparent'};
            color: {section === 'daisyui' ? '#ffffff' : 'rgba(255,255,255,0.6)'};
            cursor: pointer;
            transition: all 0.2s;
          "
        >
          DaisyUI
        </button>
      </nav>
    </div>
  </header>

  <!-- Hero section -->
  <section style="
    background: #000000;
    padding: 80px 24px 72px;
    text-align: center;
  ">
    <div style="max-width: 980px; margin: 0 auto;">
      <p style="
        font-family: 'SF Pro Display', system-ui, sans-serif;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        color: #2997ff;
        margin-bottom: 12px;
      ">
        {section === 'tailwind' ? 'Tailwind CSS' : 'DaisyUI'}
      </p>
      <h1 style="
        font-family: 'SF Pro Display', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.07;
        letter-spacing: -0.28px;
        color: #ffffff;
        margin-bottom: 20px;
      ">
        {section === 'tailwind' ? 'ユーティリティ集' : 'コンポーネント一覧'}
      </h1>
      <p style="
        font-family: 'SF Pro Text', system-ui, sans-serif;
        font-size: 21px;
        font-weight: 400;
        line-height: 1.19;
        letter-spacing: 0.231px;
        color: rgba(255,255,255,0.7);
        margin-bottom: 32px;
      ">
        {section === 'tailwind'
          ? '各コンポーネントの「コード」タブでクラスを確認できます。'
          : 'DaisyUI の主要コンポーネントをカテゴリ別に紹介します。'}
      </p>
      <!-- Pill CTAs -->
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <button
          onclick={() => section = 'tailwind'}
          style="
            padding: 8px 20px;
            border-radius: 980px;
            font-family: 'SF Pro Text', system-ui, sans-serif;
            font-size: 17px;
            font-weight: 400;
            background: {section === 'tailwind' ? '#0071e3' : 'transparent'};
            color: #ffffff;
            border: 1px solid {section === 'tailwind' ? 'transparent' : 'rgba(255,255,255,0.6)'};
            cursor: pointer;
            transition: all 0.2s;
          "
        >Tailwind CSS</button>
        <button
          onclick={() => section = 'daisyui'}
          style="
            padding: 8px 20px;
            border-radius: 980px;
            font-family: 'SF Pro Text', system-ui, sans-serif;
            font-size: 17px;
            font-weight: 400;
            background: {section === 'daisyui' ? '#0071e3' : 'transparent'};
            color: #ffffff;
            border: 1px solid {section === 'daisyui' ? 'transparent' : 'rgba(255,255,255,0.6)'};
            cursor: pointer;
            transition: all 0.2s;
          "
        >DaisyUI</button>
      </div>
    </div>
  </section>

  <!-- Main content -->
  <main style="
    max-width: 980px;
    margin: 0 auto;
    padding: 60px 24px 80px;
  ">
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
    {:else}
      <DaisyShowcase />
    {/if}
  </main>

  <!-- Footer -->
  <footer style="
    background: #000000;
    padding: 24px;
    text-align: center;
  ">
    <p style="
      font-family: 'SF Pro Text', system-ui, sans-serif;
      font-size: 12px;
      color: rgba(255,255,255,0.4);
      letter-spacing: -0.12px;
    ">学習ショーケース — Apple Design System インスパイア</p>
  </footer>
</div>
