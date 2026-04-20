<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const toasts = [
    { type: 'success', icon: '✅', title: '保存しました', desc: 'データが正常に保存されました。', ring: 'ring-green-200', bg: 'bg-green-50', dot: 'bg-green-500', tooltip: 'bg-green-50 ring-1 ring-green-200 rounded-xl shadow-lg' },
    { type: 'error', icon: '❌', title: 'エラーが発生しました', desc: 'もう一度お試しください。', ring: 'ring-red-200', bg: 'bg-red-50', dot: 'bg-red-500', tooltip: 'bg-red-50 ring-1 ring-red-200 rounded-xl shadow-lg' },
    { type: 'warning', icon: '⚠️', title: '注意', desc: 'ディスク容量が少なくなっています。', ring: 'ring-yellow-200', bg: 'bg-yellow-50', dot: 'bg-yellow-500', tooltip: 'bg-yellow-50 ring-1 ring-yellow-200 rounded-xl shadow-lg' },
    { type: 'info', icon: 'ℹ️', title: 'お知らせ', desc: 'アップデートが利用可能です。', ring: 'ring-blue-200', bg: 'bg-blue-50', dot: 'bg-blue-500', tooltip: 'bg-blue-50 ring-1 ring-blue-200 rounded-xl shadow-lg' },
  ]
</script>

<Showcase title="Daily UI #011 — Flash Message" code={`<!-- Toast通知 — ring-1 ring-green-200 shadow-lg rounded-xl -->
<div class="flex items-start gap-3 p-4 bg-green-50 ring-1 ring-green-200 rounded-xl shadow-lg w-80">
  <span class="text-lg">✅</span>
  <div class="flex-1">
    <p class="text-sm font-semibold text-gray-800">保存しました</p>
    <p class="text-xs text-gray-500">データが正常に保存されました。</p>
  </div>
  <button class="text-gray-400 hover:text-gray-600">✕</button>
</div>`}>
  <div class="w-full max-w-sm space-y-3">
    {#each toasts as t}
      <Tooltip label={t.tooltip}>
        <div class="flex items-start gap-3 p-4 {t.bg} ring-1 {t.ring} rounded-xl shadow-sm w-full">
          <span class="text-base leading-none mt-0.5">{t.icon}</span>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800">{t.title}</p>
            <p class="text-xs text-gray-500">{t.desc}</p>
          </div>
          <button class="text-gray-300 hover:text-gray-500 transition text-sm shrink-0">✕</button>
        </div>
      </Tooltip>
    {/each}
  </div>
</Showcase>
