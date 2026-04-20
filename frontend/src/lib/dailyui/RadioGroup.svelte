<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let plan = $state('pro')
  let color = $state('violet')
  let size = $state('md')
</script>

<Showcase title="Daily UI #089 — Radio Group" code={`<!-- ラジオボタン: peer + peer-checked でカスタムスタイル -->
<label class="flex items-center gap-3 cursor-pointer group">
  <div class="relative">
    <input type="radio" name="plan" class="sr-only peer" value="pro" bind:group={plan} />
    <div class="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-violet-600 transition"></div>
    <div class="absolute inset-0 m-1 rounded-full bg-violet-600 scale-0 peer-checked:scale-100 transition-transform"></div>
  </div>
  <span class="text-sm text-gray-700 peer-checked:text-violet-700">Pro</span>
</label>

<!-- カードラジオ: peer-checked:border-violet-500 peer-checked:bg-violet-50 -->
<label class="relative cursor-pointer">
  <input type="radio" class="sr-only peer" value="pro" bind:group={plan} />
  <div class="border-2 rounded-xl p-4 transition peer-checked:border-violet-500 peer-checked:bg-violet-50">...</div>
</label>`}>
  <div class="w-full max-w-sm space-y-6">

    <!-- カードラジオ (プラン選択) -->
    <div>
      <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">プランを選択</p>
      <div class="space-y-2">
        {#each [
          { value: 'free', label: 'Free', desc: '基本機能のみ', price: '無料' },
          { value: 'pro', label: 'Pro', desc: '全機能 + サポート', price: '¥1,200/月' },
          { value: 'team', label: 'Team', desc: 'チーム向け全機能', price: '¥3,500/月' },
        ] as p}
          <Tooltip label="relative cursor-pointer | peer-checked:border-violet-500 peer-checked:bg-violet-50 border-2 rounded-xl transition">
            <label class="relative cursor-pointer block">
              <input type="radio" name="plan" class="sr-only peer" bind:group={plan} value={p.value} />
              <div class="border-2 rounded-xl p-3.5 transition peer-checked:border-violet-500 peer-checked:bg-violet-50 hover:border-gray-300 border-gray-200">
                <div class="flex justify-between items-center">
                  <div class="flex items-center gap-3">
                    <div class="w-4 h-4 rounded-full border-2 border-gray-300 peer-checked:border-violet-600 flex items-center justify-center transition shrink-0 {plan === p.value ? 'border-violet-600' : ''}">
                      {#if plan === p.value}<div class="w-2 h-2 rounded-full bg-violet-600"></div>{/if}
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-gray-800">{p.label}</p>
                      <p class="text-xs text-gray-400">{p.desc}</p>
                    </div>
                  </div>
                  <p class="text-sm font-bold text-violet-600">{p.price}</p>
                </div>
              </div>
            </label>
          </Tooltip>
        {/each}
      </div>
    </div>

    <!-- カラー選択 -->
    <div>
      <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">カラー</p>
      <div class="flex gap-3">
        {#each [
          { value: 'violet', cls: 'bg-violet-500' },
          { value: 'pink', cls: 'bg-pink-500' },
          { value: 'sky', cls: 'bg-sky-500' },
          { value: 'amber', cls: 'bg-amber-500' },
        ] as c}
          <Tooltip label="w-9 h-9 rounded-full {c.cls} ring-2 ring-offset-2 (選択時)">
            <label class="cursor-pointer">
              <input type="radio" name="color" class="sr-only" bind:group={color} value={c.value} />
              <div class="w-9 h-9 rounded-full {c.cls} hover:scale-110 transition-transform flex items-center justify-center {color === c.value ? 'ring-2 ring-offset-2 ring-gray-400 scale-110' : ''}">
                {#if color === c.value}<span class="text-white text-sm font-bold">✓</span>{/if}
              </div>
            </label>
          </Tooltip>
        {/each}
      </div>
    </div>

  </div>
</Showcase>
