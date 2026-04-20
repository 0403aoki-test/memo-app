<script lang="ts">
  import Showcase from '../Showcase.svelte'

  let progress = $state(65)

  const code = `<!-- 基本プログレスバー -->
<div class="w-full bg-gray-200 rounded-full h-2.5">
  <div class="bg-violet-600 h-2.5 rounded-full transition-all duration-500" style="width: 65%"></div>
</div>

<!-- ラベル付きバー -->
<div class="w-full bg-gray-100 rounded-lg h-6 overflow-hidden relative">
  <div class="h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg transition-all duration-500 flex items-center justify-end pr-2"
    style="width: 65%">
    <span class="text-white text-xs font-medium">65%</span>
  </div>
</div>

<!-- ストライプ (repeating-linear-gradient) -->
<div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
  <div class="h-4 rounded-full"
    style="width: 75%; background: repeating-linear-gradient(45deg, #8b5cf6, #8b5cf6 10px, #7c3aed 10px, #7c3aed 20px)">
  </div>
</div>

<!-- ステップ式 -->
<div class="flex gap-1">
  <div class="flex-1 h-2 rounded-full bg-violet-500"></div>
  <div class="flex-1 h-2 rounded-full bg-violet-500"></div>
  <div class="flex-1 h-2 rounded-full bg-violet-300"></div>
  <div class="flex-1 h-2 rounded-full bg-gray-200"></div>
</div>`

  const rationale = `プログレスバーは「どこまで進んでいるか」を視覚化します。transition-all duration-500 で値の変化をアニメーション付きにすることでユーザーへのフィードバックが向上します。ラベル付きバーは%の数値を重ねることで精度を高めます。ストライプはrepeating-linear-gradientで「処理中」を表現できます。`
</script>

<Showcase title="プログレスバー" {code} {rationale}>
  <div class="w-full space-y-5">

    <!-- スライダーで制御 -->
    <div class="space-y-2">
      <div class="flex justify-between text-xs text-gray-500">
        <span>完了率</span><span>{progress}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-violet-600 h-2.5 rounded-full transition-all duration-500" style="width: {progress}%"></div>
      </div>
      <input type="range" min="0" max="100" bind:value={progress} class="w-full accent-violet-600" />
    </div>

    <!-- カラーバリエーション -->
    <div class="space-y-2">
      <p class="text-xs text-gray-400">カラーバリエーション</p>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-green-500 h-2 rounded-full transition-all duration-500" style="width: {Math.min(progress + 15, 100)}%"></div>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-yellow-400 h-2 rounded-full transition-all duration-500" style="width: {Math.max(progress - 10, 0)}%"></div>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2">
        <div class="bg-red-500 h-2 rounded-full transition-all duration-500" style="width: {Math.round(progress * 0.4)}%"></div>
      </div>
    </div>

    <!-- ラベル内蔵バー -->
    <div class="space-y-1">
      <p class="text-xs text-gray-400">ラベル付きグラデーションバー</p>
      <div class="w-full bg-gray-100 rounded-lg h-6 overflow-hidden">
        <div
          class="h-6 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg transition-all duration-500 flex items-center justify-end pr-2"
          style="width: {progress}%"
        >
          {#if progress > 15}
            <span class="text-white text-xs font-medium">{progress}%</span>
          {/if}
        </div>
      </div>
    </div>

    <!-- ストライプ -->
    <div class="space-y-1">
      <p class="text-xs text-gray-400">ストライプ (repeating-linear-gradient)</p>
      <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div class="h-4 rounded-full transition-all duration-500" style="width: {progress}%; background: repeating-linear-gradient(45deg, #8b5cf6, #8b5cf6 10px, #7c3aed 10px, #7c3aed 20px)"></div>
      </div>
    </div>

    <!-- ステップ式 -->
    <div class="space-y-1">
      <p class="text-xs text-gray-400">ステップ式 (Step 2/4)</p>
      <div class="flex gap-1">
        <div class="flex-1 h-2 rounded-full bg-violet-500"></div>
        <div class="flex-1 h-2 rounded-full bg-violet-500"></div>
        <div class="flex-1 h-2 rounded-full bg-violet-200"></div>
        <div class="flex-1 h-2 rounded-full bg-gray-200"></div>
      </div>
    </div>

  </div>
</Showcase>
