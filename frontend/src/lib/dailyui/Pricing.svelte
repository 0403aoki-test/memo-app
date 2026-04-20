<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let annual = $state(false)
  const plans = [
    { name: 'Free', price: 0, color: 'border-gray-200', btn: 'bg-gray-100 text-gray-700 hover:bg-gray-200', features: ['プロジェクト 3件', 'ストレージ 1GB', 'サポートなし'] },
    { name: 'Pro', price: annual ? 980 : 1200, color: 'border-violet-500 shadow-lg shadow-violet-100', btn: 'bg-violet-600 text-white hover:bg-violet-700', badge: 'おすすめ', features: ['プロジェクト 無制限', 'ストレージ 50GB', 'メールサポート', 'カスタムドメイン'] },
    { name: 'Team', price: annual ? 2800 : 3500, color: 'border-gray-200', btn: 'bg-gray-800 text-white hover:bg-gray-900', features: ['全Pro機能', 'ストレージ 500GB', '優先サポート', 'SSO・監査ログ'] },
  ]
</script>

<Showcase title="Daily UI #030 — Pricing" code={`<div class="grid grid-cols-3 gap-4">
  <!-- おすすめプラン: border-violet-500 shadow-lg shadow-violet-100 scale-105 -->
  <div class="rounded-2xl border-2 border-violet-500 shadow-lg shadow-violet-100 p-6 scale-105">
    <span class="bg-violet-600 text-white text-xs px-2 py-0.5 rounded-full">おすすめ</span>
    <p class="text-3xl font-bold mt-3">¥1,200<span class="text-sm text-gray-400">/月</span></p>
  </div>
</div>`}>
  <div class="w-full">
    <div class="flex justify-center mb-5">
      <Tooltip label="flex items-center gap-2 text-sm | peer-checked:bg-violet-600 (年払いトグル)">
        <label class="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
          月払い
          <div class="relative">
            <input type="checkbox" class="sr-only peer" bind:checked={annual} />
            <div class="w-10 h-5 bg-gray-200 rounded-full peer-checked:bg-violet-600 transition"></div>
            <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>
          </div>
          年払い <span class="text-green-600 font-medium text-xs">(-20%)</span>
        </label>
      </Tooltip>
    </div>
    <div class="grid grid-cols-3 gap-3">
      {#each plans as plan}
        <Tooltip label="rounded-2xl border-2 {plan.color} p-4 flex flex-col {plan.name === 'Pro' ? 'scale-105 shadow-violet-100' : ''}">
          <div class="rounded-2xl border-2 {plan.color} p-4 flex flex-col relative {plan.name === 'Pro' ? 'scale-105' : ''}">
            {#if plan.badge}
              <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">{plan.badge}</span>
            {/if}
            <p class="font-bold text-gray-800 text-sm mb-1">{plan.name}</p>
            <p class="text-2xl font-black text-gray-900 mb-0.5">¥{plan.price.toLocaleString()}</p>
            <p class="text-xs text-gray-400 mb-3">/月</p>
            <ul class="space-y-1.5 mb-4 flex-1">
              {#each plan.features as f}
                <li class="text-xs text-gray-600 flex items-center gap-1.5"><span class="text-violet-500 text-xs">✓</span>{f}</li>
              {/each}
            </ul>
            <button class="w-full py-2 rounded-xl text-xs font-semibold transition {plan.btn}">選択する</button>
          </div>
        </Tooltip>
      {/each}
    </div>
  </div>
</Showcase>
