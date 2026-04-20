<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  type Msg = { role: 'user' | 'ai'; text: string }
  let messages = $state<Msg[]>([
    { role: 'ai', text: 'こんにちは！何かお手伝いできることはありますか？' },
    { role: 'user', text: 'Tailwind CSSについて教えてください。' },
    { role: 'ai', text: 'Tailwind CSSはユーティリティファーストのCSSフレームワークです。クラス名を組み合わせてスタイルを適用します。' },
  ])
  let input = $state('')

  function send() {
    if (!input.trim()) return
    messages = [...messages, { role: 'user', text: input }, { role: 'ai', text: 'ご質問ありがとうございます！引き続きお手伝いします。' }]
    input = ''
  }
</script>

<Showcase title="Daily UI #096 — Chat Interface" code={`<!-- AIメッセージ: bg-gray-100 rounded-2xl rounded-tl-sm -->
<div class="flex gap-2">
  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs">AI</div>
  <div class="bg-gray-100 px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm max-w-xs">
    メッセージ
  </div>
</div>
<!-- ユーザーメッセージ: bg-violet-600 text-white rounded-2xl rounded-tr-sm ml-auto -->
<div class="flex justify-end">
  <div class="bg-violet-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-xs">
    メッセージ
  </div>
</div>`}>
  <div class="w-full max-w-sm bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
    <!-- ヘッダー -->
    <div class="flex items-center gap-3 px-4 py-3 bg-violet-600 text-white">
      <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">AI</div>
      <div>
        <p class="text-sm font-semibold">Claude Assistant</p>
        <p class="text-xs text-violet-200">オンライン</p>
      </div>
    </div>
    <!-- メッセージ -->
    <div class="h-48 overflow-y-auto p-4 space-y-3 bg-gray-50">
      {#each messages as msg}
        {#if msg.role === 'ai'}
          <Tooltip label="bg-gray-100 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">
            <div class="flex gap-2 items-end">
              <div class="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shrink-0">AI</div>
              <div class="bg-white px-3 py-2 rounded-2xl rounded-tl-sm text-xs text-gray-700 max-w-[80%] shadow-sm">{msg.text}</div>
            </div>
          </Tooltip>
        {:else}
          <Tooltip label="bg-violet-600 text-white rounded-2xl rounded-tr-sm ml-auto max-w-[80%]">
            <div class="flex justify-end">
              <div class="bg-violet-600 text-white px-3 py-2 rounded-2xl rounded-tr-sm text-xs max-w-[80%]">{msg.text}</div>
            </div>
          </Tooltip>
        {/if}
      {/each}
    </div>
    <!-- 入力 -->
    <div class="flex gap-2 p-3 border-t border-gray-100 bg-white">
      <input type="text" bind:value={input} onkeydown={(e) => e.key === 'Enter' && send()} placeholder="メッセージを入力..." class="flex-1 border border-gray-200 rounded-full px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-violet-300 min-w-0" />
      <button onclick={send} class="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 active:scale-90 transition-transform text-sm shrink-0">→</button>
    </div>
  </div>
</Showcase>
