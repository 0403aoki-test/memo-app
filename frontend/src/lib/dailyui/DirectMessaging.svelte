<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let input = $state('')
  type Msg = { from: 'me' | 'them'; text: string }
  let messages = $state<Msg[]>([
    { from: 'them', text: 'こんにちは！元気ですか？' },
    { from: 'me', text: 'はい、元気です！あなたは？' },
    { from: 'them', text: '私も元気です。今日のミーティングはどうでしたか？' },
    { from: 'me', text: 'とても良かったです！新しいプロジェクトが始まります 🎉' },
  ])

  function send() {
    if (!input.trim()) return
    messages = [...messages, { from: 'me', text: input }]
    input = ''
  }
</script>

<Showcase title="Daily UI #013 — Direct Messaging" code={`<!-- 自分のメッセージ: ml-auto bg-violet-600 text-white rounded-2xl rounded-br-sm -->
<div class="flex justify-end">
  <div class="ml-auto bg-violet-600 text-white px-4 py-2 rounded-2xl rounded-br-sm text-sm max-w-xs">
    メッセージ内容
  </div>
</div>

<!-- 相手のメッセージ: bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm -->
<div class="flex gap-2">
  <div class="w-8 h-8 rounded-full bg-violet-200 flex items-center justify-center shrink-0">A</div>
  <div class="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-sm text-sm max-w-xs">
    メッセージ内容
  </div>
</div>`}>
  <div class="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
    <!-- ヘッダー -->
    <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white">
      <div class="relative">
        <div class="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">YK</div>
        <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white"></div>
      </div>
      <div>
        <p class="text-sm font-semibold text-gray-800">山田 幸子</p>
        <p class="text-xs text-green-500">オンライン</p>
      </div>
    </div>
    <!-- メッセージ一覧 -->
    <div class="h-48 overflow-y-auto p-4 space-y-3 bg-gray-50">
      {#each messages as msg}
        {#if msg.from === 'me'}
          <Tooltip label="ml-auto bg-violet-600 text-white rounded-2xl rounded-br-sm max-w-[75%]">
            <div class="flex justify-end">
              <div class="ml-auto bg-violet-600 text-white px-3 py-2 rounded-2xl rounded-br-sm text-xs max-w-[75%]">{msg.text}</div>
            </div>
          </Tooltip>
        {:else}
          <Tooltip label="bg-white text-gray-800 rounded-2xl rounded-bl-sm shadow-sm max-w-[75%]">
            <div class="flex gap-2 items-end">
              <div class="w-7 h-7 rounded-full bg-violet-200 flex items-center justify-center text-violet-700 text-xs font-bold shrink-0">YK</div>
              <div class="bg-white text-gray-800 px-3 py-2 rounded-2xl rounded-bl-sm text-xs max-w-[75%] shadow-sm">{msg.text}</div>
            </div>
          </Tooltip>
        {/if}
      {/each}
    </div>
    <!-- 入力 -->
    <div class="flex gap-2 p-3 border-t border-gray-100">
      <Tooltip label="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-violet-300">
        <input
          type="text"
          bind:value={input}
          onkeydown={(e) => e.key === 'Enter' && send()}
          placeholder="メッセージを入力..."
          class="flex-1 border border-gray-200 rounded-full px-4 py-1.5 text-xs outline-none focus:ring-2 focus:ring-violet-300 min-w-0"
        />
      </Tooltip>
      <Tooltip label="w-8 h-8 bg-violet-600 rounded-full hover:bg-violet-700 active:scale-90">
        <button onclick={send} class="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 active:scale-90 transition-transform shrink-0 text-sm">→</button>
      </Tooltip>
    </div>
  </div>
</Showcase>
