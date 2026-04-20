<script lang="ts">
  import Showcase from '../Showcase.svelte'

  let dismissed = $state<Record<string, boolean>>({})

  const code = `<!-- Info alert -->
<div class="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <span class="text-lg leading-none shrink-0">ℹ️</span>
  <div class="flex-1">
    <p class="text-sm font-semibold text-blue-800 mb-0.5">情報</p>
    <p class="text-xs text-blue-600">これはお知らせメッセージです。</p>
  </div>
  <button class="text-blue-400 hover:text-blue-600 transition">✕</button>
</div>

<!-- Success -->
<div class="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
  ...
</div>

<!-- Warning / Error も同様 —
  bg-yellow-50 border-yellow-200 text-yellow-800
  bg-red-50 border-red-200 text-red-800 -->

<!-- Toast スタイル (shadow + ring) -->
<div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">✅</div>
  <p class="text-sm font-medium text-gray-800">保存しました！</p>
</div>`

  const rationale = `アラートは「背景-50・ボーダー-200・テキスト-800」の三層構造で、コンテンツの邪魔をせずに状態を伝えます。アイコン + テキストの組み合わせはアクセシビリティ上も重要（色だけに頼らない）。Toastスタイルはring-1でボーダーを表現し、shadow-lgで浮遊感を与えます。`
</script>

<Showcase title="アラート & Toast" {code} {rationale}>
  <div class="w-full space-y-3">

    {#if !dismissed['info']}
      <div class="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <span class="text-base leading-none shrink-0 mt-0.5">ℹ️</span>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-blue-800 mb-0.5">情報</p>
          <p class="text-xs text-blue-600">これはお知らせメッセージです。</p>
        </div>
        <button onclick={() => dismissed = { ...dismissed, info: true }} class="text-blue-300 hover:text-blue-600 transition text-sm leading-none shrink-0">✕</button>
      </div>
    {/if}

    {#if !dismissed['success']}
      <div class="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
        <span class="text-base leading-none shrink-0 mt-0.5">✅</span>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-green-800 mb-0.5">成功</p>
          <p class="text-xs text-green-600">操作が正常に完了しました。</p>
        </div>
        <button onclick={() => dismissed = { ...dismissed, success: true }} class="text-green-300 hover:text-green-600 transition text-sm leading-none shrink-0">✕</button>
      </div>
    {/if}

    {#if !dismissed['warning']}
      <div class="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <span class="text-base leading-none shrink-0 mt-0.5">⚠️</span>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-yellow-800 mb-0.5">注意</p>
          <p class="text-xs text-yellow-700">この操作は元に戻せない場合があります。</p>
        </div>
        <button onclick={() => dismissed = { ...dismissed, warning: true }} class="text-yellow-300 hover:text-yellow-600 transition text-sm leading-none shrink-0">✕</button>
      </div>
    {/if}

    {#if !dismissed['error']}
      <div class="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
        <span class="text-base leading-none shrink-0 mt-0.5">❌</span>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-red-800 mb-0.5">エラー</p>
          <p class="text-xs text-red-600">予期しないエラーが発生しました。再試行してください。</p>
        </div>
        <button onclick={() => dismissed = { ...dismissed, error: true }} class="text-red-300 hover:text-red-600 transition text-sm leading-none shrink-0">✕</button>
      </div>
    {/if}

    <!-- Toast スタイル -->
    <div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-lg ring-1 ring-gray-100">
      <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-sm">✅</div>
      <div class="flex-1">
        <p class="text-sm font-semibold text-gray-800">保存しました！</p>
        <p class="text-xs text-gray-400">2秒前</p>
      </div>
      <button class="text-gray-300 hover:text-gray-500 transition text-sm">✕</button>
    </div>

    {#if Object.keys(dismissed).length >= 4}
      <button onclick={() => dismissed = {}} class="text-xs text-violet-600 hover:underline">
        アラートをリセット
      </button>
    {/if}

  </div>
</Showcase>
