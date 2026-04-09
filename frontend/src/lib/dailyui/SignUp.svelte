<script lang="ts">
  import Showcase from '../Showcase.svelte'

  let name = $state('')
  let email = $state('')
  let password = $state('')
  let submitted = $state(false)

  function handleSubmit(e: Event) {
    e.preventDefault()
    submitted = true
  }

  const code = `<div class="min-h-screen bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center p-4">
  <div class="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
    <h1 class="text-2xl font-bold text-gray-800 text-center mb-8">アカウント作成</h1>
    <form class="flex flex-col gap-5">
      <input type="text" placeholder="名前"
        class="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-400" />
      <input type="email" placeholder="メールアドレス"
        class="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-400" />
      <input type="password" placeholder="パスワード（8文字以上）"
        class="border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-violet-400" />
      <button class="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg transition">
        登録する
      </button>
    </form>
  </div>
</div>`
</script>

<Showcase title="Daily UI #001 — Sign Up" {code}>
  <div class="w-full max-w-sm mx-auto">
    {#if submitted}
      <div class="bg-white rounded-2xl shadow-md p-8 text-center">
        <div class="text-4xl mb-3">🎉</div>
        <h3 class="font-bold text-gray-800 mb-1">登録完了！</h3>
        <p class="text-sm text-gray-500 mb-4">ようこそ、{name} さん</p>
        <button onclick={() => { submitted = false; name = ''; email = ''; password = '' }}
          class="text-violet-600 text-sm underline">戻る</button>
      </div>
    {:else}
      <div class="bg-white rounded-2xl shadow-md p-8">
        <h3 class="text-lg font-bold text-gray-800 text-center mb-5">アカウント作成</h3>
        <form onsubmit={handleSubmit} class="flex flex-col gap-4">
          <input type="text" bind:value={name} required placeholder="名前"
            class="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-400" />
          <input type="email" bind:value={email} required placeholder="メールアドレス"
            class="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-400" />
          <input type="password" bind:value={password} required minlength="8" placeholder="パスワード（8文字以上）"
            class="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-400" />
          <button type="submit"
            class="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 rounded-lg transition text-sm">
            登録する
          </button>
        </form>
      </div>
    {/if}
  </div>
</Showcase>
