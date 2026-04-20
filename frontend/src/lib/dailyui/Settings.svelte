<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let notifications = $state(true)
  let darkMode = $state(false)
  let autoSave = $state(true)
  let volume = $state(70)
</script>

<Showcase title="Daily UI #007 — Settings" code={`<div class="divide-y divide-gray-100">
  <div class="flex items-center justify-between py-4">
    <div>
      <p class="font-medium text-gray-800">通知</p>
      <p class="text-xs text-gray-400">プッシュ通知を受け取る</p>
    </div>
    <!-- peer / peer-checked トグル -->
    <label class="relative cursor-pointer">
      <input type="checkbox" class="sr-only peer" />
      <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-violet-600 transition"></div>
      <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>
    </label>
  </div>
</div>`}>
  <div class="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div class="px-5 py-4 border-b border-gray-100">
      <p class="font-bold text-gray-900 text-sm">設定</p>
    </div>
    <div class="divide-y divide-gray-100">
      {#each [
        { label: '通知', desc: 'プッシュ通知を受け取る', bind: 'notifications' },
        { label: 'ダークモード', desc: '暗いテーマを使用する', bind: 'darkMode' },
        { label: '自動保存', desc: '変更を自動的に保存する', bind: 'autoSave' },
      ] as item, i}
        <div class="flex items-center justify-between px-5 py-4">
          <div>
            <p class="text-sm font-medium text-gray-800">{item.label}</p>
            <p class="text-xs text-gray-400">{item.desc}</p>
          </div>
          <Tooltip label="sr-only peer | peer-checked:bg-violet-600 | peer-checked:translate-x-5">
            <label class="relative cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                bind:checked={i === 0 ? notifications : i === 1 ? darkMode : autoSave}
              />
              <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-violet-600 transition"></div>
              <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>
            </label>
          </Tooltip>
        </div>
      {/each}
      <div class="px-5 py-4">
        <div class="flex justify-between text-sm mb-2">
          <span class="font-medium text-gray-800">音量</span>
          <span class="text-gray-400">{volume}%</span>
        </div>
        <Tooltip label="accent-violet-600 w-full">
          <input type="range" min="0" max="100" bind:value={volume} class="w-full accent-violet-600" />
        </Tooltip>
      </div>
    </div>
    <Tooltip label="w-full py-3 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium transition">
      <button class="w-full py-3 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-medium transition">
        アカウントを削除
      </button>
    </Tooltip>
  </div>
</Showcase>
