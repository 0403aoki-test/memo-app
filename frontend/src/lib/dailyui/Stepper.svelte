<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let step = $state(1)
  const steps = [
    { label: 'アカウント情報', icon: '👤' },
    { label: 'プラン選択', icon: '📋' },
    { label: 'お支払い', icon: '💳' },
    { label: '確認', icon: '✅' },
  ]
</script>

<Showcase title="Daily UI #088 — Stepper" code={`<div class="flex items-center">
  {#each steps as s, i}
    <!-- 完了ステップ: bg-violet-600 text-white -->
    <!-- 現在ステップ: bg-violet-600 text-white ring-4 ring-violet-100 -->
    <!-- 未来ステップ: bg-gray-200 text-gray-400 -->
    <div class="flex flex-col items-center">
      <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold
        {i < step ? 'bg-violet-600 text-white' : i === step ? 'bg-violet-600 text-white ring-4 ring-violet-100' : 'bg-gray-200 text-gray-400'}">
        {i < step ? '✓' : i + 1}
      </div>
      <p class="text-xs mt-1 text-gray-600">{s.label}</p>
    </div>
    <!-- 繋ぎ線: flex-1 h-0.5 bg-violet-600 or bg-gray-200 -->
    {#if i < steps.length - 1}
      <div class="flex-1 h-0.5 {i < step ? 'bg-violet-600' : 'bg-gray-200'} transition-colors"></div>
    {/if}
  {/each}
</div>`}>
  <div class="w-full max-w-md space-y-6">
    <!-- ステッパー -->
    <Tooltip label="flex items-center | w-10 h-10 rounded-full bg-violet-600 text-white ring-4 ring-violet-100 (現在) | flex-1 h-0.5 bg-violet-600 (完了繋ぎ線)">
      <div class="flex items-center">
        {#each steps as s, i}
          <div class="flex flex-col items-center">
            <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 {i < step ? 'bg-violet-600 text-white' : i === step ? 'bg-violet-600 text-white ring-4 ring-violet-100' : 'bg-gray-100 text-gray-400'}">
              {i < step ? '✓' : i + 1}
            </div>
            <p class="text-xs mt-1 text-center {i <= step ? 'text-gray-700 font-medium' : 'text-gray-400'} whitespace-nowrap" style="font-size:10px">{s.label}</p>
          </div>
          {#if i < steps.length - 1}
            <div class="flex-1 h-0.5 mb-4 transition-colors duration-300 {i < step ? 'bg-violet-600' : 'bg-gray-200'}"></div>
          {/if}
        {/each}
      </div>
    </Tooltip>

    <!-- コンテンツ -->
    <div class="bg-gray-50 rounded-xl p-5 text-center">
      <p class="text-2xl mb-2">{steps[step]?.icon ?? '🎉'}</p>
      <p class="font-semibold text-gray-800 text-sm">{step < steps.length ? steps[step].label : '完了！'}</p>
      <p class="text-xs text-gray-400 mt-1">ステップ {step + 1} / {steps.length}</p>
    </div>

    <div class="flex gap-3 justify-center">
      <Tooltip label="px-4 py-2 border border-gray-200 rounded-xl disabled:opacity-40">
        <button onclick={() => step = Math.max(0, step - 1)} disabled={step === 0} class="px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition">戻る</button>
      </Tooltip>
      <Tooltip label="px-5 py-2 bg-violet-600 text-white rounded-xl hover:bg-violet-700 active:scale-95">
        <button onclick={() => step = Math.min(steps.length - 1, step + 1)} disabled={step === steps.length - 1} class="px-5 py-2 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition transform">次へ</button>
      </Tooltip>
    </div>
  </div>
</Showcase>
