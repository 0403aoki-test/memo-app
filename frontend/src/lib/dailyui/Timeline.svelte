<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const events = [
    { date: '2026年4月', title: 'Daily UI 100個達成', desc: 'Tailwind CSSで全100チャレンジを完成させた。', icon: '🏆', done: true },
    { date: '2026年3月', title: 'Svelte 5 移行完了', desc: 'Runes APIを使った新しいリアクティビティを習得。', icon: '⚡', done: true },
    { date: '2026年2月', title: 'Tailwind CSS v4 導入', desc: 'プロジェクトを最新バージョンにアップデート完了。', icon: '🎨', done: true },
    { date: '2026年1月', title: '学習開始', desc: 'フロントエンド開発の学習を本格的にスタート。', icon: '🚀', done: false },
  ]
</script>

<Showcase title="Daily UI #099 — Timeline" code={`<div class="relative">
  <!-- 縦線: absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 -->
  <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
  <div class="space-y-6">
    <div class="flex gap-4 relative">
      <!-- ドット: absolute left-4 w-3 h-3 rounded-full bg-violet-600 ring-2 ring-white ring-offset-2 -->
      <div class="absolute left-3.5 w-3 h-3 rounded-full bg-violet-600 ring-2 ring-white ring-offset-2 -translate-x-1/2 mt-1"></div>
      <div class="pl-8">
        <p class="text-xs text-gray-400">2026年4月</p>
        <p class="font-semibold text-gray-800">Daily UI 100個達成</p>
      </div>
    </div>
  </div>
</div>`}>
  <div class="w-full max-w-sm">
    <div class="relative pl-8">
      <Tooltip label="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 (縦線)">
        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      </Tooltip>
      <div class="space-y-5">
        {#each events as event, i}
          <Tooltip label="absolute left-3.5 w-5 h-5 rounded-full ring-2 ring-offset-2 (タイムラインドット)">
            <div class="relative">
              <div class="absolute -left-4 w-5 h-5 rounded-full {event.done ? 'bg-violet-600 ring-2 ring-violet-200' : 'bg-gray-200 ring-2 ring-gray-100'} flex items-center justify-center text-xs -translate-x-1/2 mt-0.5">
                {#if event.done}<span class="text-white text-xs">✓</span>{/if}
              </div>
              <div class="pb-5 {i < events.length - 1 ? '' : ''}">
                <p class="text-xs text-gray-400 mb-0.5">{event.date}</p>
                <p class="text-sm font-semibold text-gray-800 flex items-center gap-2">{event.icon} {event.title}</p>
                <p class="text-xs text-gray-500 mt-1 leading-relaxed">{event.desc}</p>
              </div>
            </div>
          </Tooltip>
        {/each}
      </div>
    </div>
  </div>
</Showcase>
