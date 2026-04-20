<script lang="ts">
  import type { Snippet } from 'svelte'

  let { title, code, rationale, children }: {
    title: string
    code: string
    rationale?: string
    children: Snippet
  } = $props()

  let tab = $state<'preview' | 'code'>('preview')
</script>

<div style="margin-bottom: 40px;">
  <!-- Section title -->
  <h3 style="
    font-family: 'SF Pro Display', system-ui, sans-serif;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.19;
    letter-spacing: 0.231px;
    color: #1d1d1f;
    margin-bottom: 16px;
  ">{title}</h3>

  <!-- Card container -->
  <div style="
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0px;
  ">
    <!-- Tab bar -->
    <div style="
      display: flex;
      border-bottom: 1px solid rgba(0,0,0,0.08);
      background: #f5f5f7;
      padding: 0 4px;
    ">
      <button
        onclick={() => tab = 'preview'}
        style="
          padding: 10px 16px;
          font-family: 'SF Pro Text', system-ui, sans-serif;
          font-size: 14px;
          font-weight: {tab === 'preview' ? '600' : '400'};
          letter-spacing: -0.224px;
          color: {tab === 'preview' ? '#0071e3' : 'rgba(0,0,0,0.48)'};
          background: transparent;
          border: none;
          border-bottom: 2px solid {tab === 'preview' ? '#0071e3' : 'transparent'};
          cursor: pointer;
          transition: all 0.15s;
          margin-bottom: -1px;
        "
      >プレビュー</button>
      <button
        onclick={() => tab = 'code'}
        style="
          padding: 10px 16px;
          font-family: 'SF Pro Text', system-ui, sans-serif;
          font-size: 14px;
          font-weight: {tab === 'code' ? '600' : '400'};
          letter-spacing: -0.224px;
          color: {tab === 'code' ? '#0071e3' : 'rgba(0,0,0,0.48)'};
          background: transparent;
          border: none;
          border-bottom: 2px solid {tab === 'code' ? '#0071e3' : 'transparent'};
          cursor: pointer;
          transition: all 0.15s;
          margin-bottom: -1px;
        "
      >コード</button>
    </div>

    <!-- Content -->
    {#if tab === 'preview'}
      <div style="
        padding: 32px 24px;
        background: #ffffff;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        align-items: center;
      ">
        {@render children()}
      </div>
    {:else}
      <pre style="
        margin: 0;
        padding: 24px;
        background: #1d1d1f;
        color: #f5f5f7;
        font-family: ui-monospace, 'SF Mono', Consolas, monospace;
        font-size: 13px;
        line-height: 1.6;
        overflow-x: auto;
      "><code style="background: none; padding: 0; color: inherit; font-size: inherit;">{code}</code></pre>
    {/if}

    {#if rationale}
      <div style="
        padding: 16px 24px;
        background: #f5f5f7;
        border-top: 1px solid rgba(0,0,0,0.06);
        display: flex;
        gap: 10px;
        align-items: flex-start;
      ">
        <span style="
          font-size: 12px;
          background: #0071e3;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          font-weight: 600;
        ">i</span>
        <p style="
          font-family: 'SF Pro Text', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.43;
          letter-spacing: -0.224px;
          color: rgba(0,0,0,0.8);
        "><strong style="font-weight: 600; color: #1d1d1f;">なぜこのUIが良いのか：</strong>{rationale}</p>
      </div>
    {/if}
  </div>
</div>
