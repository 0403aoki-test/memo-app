<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'
  let step = $state(0)
  const steps = [
    { icon: '🚀', title: 'ようこそ！', desc: 'このアプリで毎日のタスクをスマートに管理しましょう。', color: 'from-violet-500 to-purple-600' },
    { icon: '📊', title: 'データを把握', desc: 'ダッシュボードで進捗をリアルタイムで確認できます。', color: 'from-sky-500 to-blue-600' },
    { icon: '🤝', title: 'チームで共有', desc: 'メンバーを招待してプロジェクトを共同管理しましょう。', color: 'from-emerald-500 to-green-600' },
  ]
</script>

<Showcase title="Daily UI #023 — Onboarding" code={`<!-- スライド: transition-transform translateX -->
<!-- ドットインジケーター: w-2 h-2 rounded-full bg-white/40 | bg-white (active) -->
<div class="flex gap-1.5 justify-center">
  {#each steps as _, i}
    <div class="rounded-full transition-all {i === step ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'}"></div>
  {/each}
</div>`}>
  <div class="w-full max-w-xs">
    <Tooltip label="rounded-3xl overflow-hidden bg-gradient-to-br shadow-xl">
      <div class="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br {steps[step].color}">
        <!-- メインコンテンツ -->
        <div class="px-8 pt-12 pb-6 text-center text-white">
          <div class="text-6xl mb-6">{steps[step].icon}</div>
          <h2 class="text-xl font-bold mb-3">{steps[step].title}</h2>
          <p class="text-sm text-white/80 leading-relaxed">{steps[step].desc}</p>
        </div>

        <!-- ドット -->
        <Tooltip label="flex gap-1.5 justify-center pb-4 | w-6 h-2 bg-white rounded-full (active) | w-2 h-2 bg-white/40 (inactive)">
          <div class="flex gap-1.5 justify-center pb-4">
            {#each steps as _, i}
              <button onclick={() => step = i} class="rounded-full transition-all {step === i ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'}"></button>
            {/each}
          </div>
        </Tooltip>

        <!-- ボタン -->
        <div class="px-6 pb-8 flex gap-3">
          {#if step > 0}
            <Tooltip label="flex-1 py-3 bg-white/20 text-white rounded-2xl text-sm font-semibold hover:bg-white/30">
              <button onclick={() => step--} class="flex-1 py-3 bg-white/20 text-white rounded-2xl text-sm font-semibold hover:bg-white/30 transition">戻る</button>
            </Tooltip>
          {:else}
            <Tooltip label="flex-1 py-3 text-white/60 text-sm">
              <button onclick={() => step = steps.length - 1} class="flex-1 py-3 text-white/60 text-sm hover:text-white transition">スキップ</button>
            </Tooltip>
          {/if}
          <Tooltip label="flex-1 py-3 bg-white text-violet-600 rounded-2xl text-sm font-bold hover:bg-white/90 shadow-lg">
            <button onclick={() => step < steps.length - 1 ? step++ : step = 0} class="flex-1 py-3 bg-white rounded-2xl text-sm font-bold shadow-lg hover:bg-white/90 transition" style="color: var(--tw-gradient-from, #7c3aed)">
              {step < steps.length - 1 ? '次へ' : 'はじめる'}
            </button>
          </Tooltip>
        </div>
      </div>
    </Tooltip>
  </div>
</Showcase>
