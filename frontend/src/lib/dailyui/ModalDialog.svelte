<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  let modal = $state<'none' | 'confirm' | 'form' | 'success'>('none')
  let name = $state('')
</script>

<Showcase title="Daily UI #092 — Modal Dialog" code={`<!-- オーバーレイ: fixed inset-0 bg-black/50 backdrop-blur-sm z-50 -->
<div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  onclick={(e) => { if (e.target === e.currentTarget) close() }}>
  <!-- モーダル: bg-white rounded-2xl shadow-2xl w-full max-w-md animate -->
  <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
    ...
  </div>
</div>`}>
  <div class="flex flex-wrap gap-3 justify-center">
    {#each [['confirm','確認ダイアログ'],['form','フォームモーダル'],['success','成功モーダル']] as [type, label]}
      <Tooltip label="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-sm transition">
        <button onclick={() => modal = type as typeof modal} class="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-sm text-gray-700 transition">{label}</button>
      </Tooltip>
    {/each}
  </div>

  {#if modal !== 'none'}
    <Tooltip label="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onclick={(e) => { if (e.target === e.currentTarget) modal = 'none' }}>
        <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
          {#if modal === 'confirm'}
            <div class="text-center">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"><span class="text-2xl">🗑</span></div>
              <p class="font-bold text-gray-900 mb-2">削除しますか？</p>
              <p class="text-sm text-gray-500 mb-6">この操作は元に戻せません。</p>
              <div class="flex gap-3">
                <button onclick={() => modal = 'none'} class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition">キャンセル</button>
                <button onclick={() => modal = 'none'} class="flex-1 py-2.5 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition">削除する</button>
              </div>
            </div>
          {:else if modal === 'form'}
            <p class="font-bold text-gray-900 mb-4">プロフィール編集</p>
            <div class="space-y-3 mb-5">
              <input type="text" bind:value={name} placeholder="名前" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-300" />
              <input type="email" placeholder="メールアドレス" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-300" />
            </div>
            <div class="flex gap-3">
              <button onclick={() => modal = 'none'} class="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition">キャンセル</button>
              <button onclick={() => modal = 'success'} class="flex-1 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 transition">保存する</button>
            </div>
          {:else if modal === 'success'}
            <div class="text-center py-2">
              <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><span class="text-3xl">✅</span></div>
              <p class="font-bold text-gray-900 mb-1">保存しました！</p>
              <p class="text-sm text-gray-500 mb-5">プロフィールが更新されました。</p>
              <button onclick={() => modal = 'none'} class="px-6 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 transition">閉じる</button>
            </div>
          {/if}
        </div>
      </div>
    </Tooltip>
  {/if}
</Showcase>
