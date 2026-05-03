<script lang="ts">
  let { label, active, onclick }: { label: string; active: boolean; onclick: () => void } = $props()
</script>

<button
  {onclick}
  style="
    padding: 8px 20px;
    border-radius: 980px;
    font-family: 'SF Pro Text', system-ui, sans-serif;
    font-size: 17px;
    font-weight: 400;
    background: {active ? '#0071e3' : 'transparent'};
    color: #ffffff;
    border: 1px solid {active ? 'transparent' : 'rgba(255,255,255,0.6)'};
    cursor: pointer;
    transition: all 0.2s;
  "
>
  {label}
</button>
