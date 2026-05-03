<script lang="ts">
  let { label, active, onclick }: { label: string; active: boolean; onclick: () => void } = $props()
</script>

<button
  {onclick}
  style="
    padding: 5px 14px;
    border-radius: 980px;
    font-size: 12px;
    font-family: 'SF Pro Text', system-ui, sans-serif;
    font-weight: 400;
    letter-spacing: -0.12px;
    border: 1px solid {active ? 'rgba(255,255,255,0.3)' : 'transparent'};
    background: {active ? 'rgba(255,255,255,0.15)' : 'transparent'};
    color: {active ? '#ffffff' : 'rgba(255,255,255,0.6)'};
    cursor: pointer;
    transition: all 0.2s;
  "
>
  {label}
</button>
