<script lang="ts">
  import Showcase from '../Showcase.svelte'

  type Song = { title: string; artist: string; duration: string; gradient: string; emoji: string }

  const songs: Song[] = [
    { title: 'Neon Dreams', artist: 'Synthwave Artist', duration: '3:42', gradient: 'from-violet-600 to-indigo-800', emoji: '🌃' },
    { title: 'Midnight Drive', artist: 'Lo-fi Beats', duration: '4:15', gradient: 'from-pink-600 to-rose-800', emoji: '🌙' },
    { title: 'Digital Forest', artist: 'Ambient Co.', duration: '5:02', gradient: 'from-teal-500 to-emerald-800', emoji: '🌲' },
  ]

  let currentIndex = $state(0)
  let isPlaying = $state(false)
  let progress = $state(35)
  let volume = $state(70)
  let liked = $state(false)
  let shuffled = $state(false)
  let repeated = $state(false)

  $effect(() => {
    if (currentIndex !== undefined) liked = false
  })

  function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length
    progress = 0
  }

  function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length
    progress = 0
  }

  function fmtTime(percent: number, totalStr: string): string {
    const [m, s] = totalStr.split(':').map(Number)
    const totalSec = m * 60 + s
    const cur = Math.round(totalSec * percent / 100)
    return `${Math.floor(cur / 60)}:${String(cur % 60).padStart(2, '0')}`
  }

  const code = `<!-- Daily UI #009 — Music Player -->
<div class="bg-gray-900 rounded-3xl p-6 w-80 shadow-2xl">
  <!-- アルバムアート (aspect-square + bg-gradient) -->
  <div class="w-full aspect-square rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-800 mb-5 shadow-xl flex items-center justify-center">
    <span class="text-6xl">🌃</span>
  </div>

  <!-- 曲名 + いいねボタン -->
  <div class="flex justify-between items-center mb-4">
    <div>
      <p class="font-bold text-white">Neon Dreams</p>
      <p class="text-xs text-gray-400">Synthwave Artist</p>
    </div>
    <button class="text-xl text-gray-500 hover:text-pink-400 transition">♡</button>
  </div>

  <!-- プログレスバー (accent-violet-500) -->
  <input type="range" min="0" max="100" class="w-full accent-violet-500" />
  <div class="flex justify-between text-xs text-gray-500 mt-1">
    <span>1:17</span><span>3:42</span>
  </div>

  <!-- コントロール -->
  <div class="flex justify-around items-center mt-5 text-xl">
    <button class="text-gray-500 hover:text-white transition">⏮</button>
    <button class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-900
      hover:scale-105 active:scale-95 transition-transform shadow-lg">▶</button>
    <button class="text-gray-500 hover:text-white transition">⏭</button>
  </div>

  <!-- ボリューム -->
  <div class="flex items-center gap-2 mt-4">
    <span class="text-gray-500 text-sm">🔈</span>
    <input type="range" min="0" max="100" class="flex-1 accent-gray-400" />
    <span class="text-gray-500 text-sm">🔊</span>
  </div>
</div>`
</script>

<Showcase title="Daily UI #009 — Music Player" {code}>
  <div class="bg-gray-900 rounded-3xl p-5 w-80 mx-auto shadow-2xl">

    <!-- プレイリスト (小チップ) -->
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1 scrollbar-hide">
      {#each songs as song, i}
        <button
          onclick={() => { currentIndex = i; progress = 0; isPlaying = false }}
          class="flex-none px-3 py-1 rounded-full text-xs font-medium transition {currentIndex === i ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'}"
        >
          {song.emoji} {song.title}
        </button>
      {/each}
    </div>

    <!-- アルバムアート -->
    <div class="w-full aspect-square rounded-2xl bg-gradient-to-br {songs[currentIndex].gradient} mb-5 shadow-xl flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <span class="text-7xl relative z-10 {isPlaying ? 'animate-bounce' : ''}">{songs[currentIndex].emoji}</span>
      {#if isPlaying}
        <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
          <div class="w-1 h-3 bg-white/60 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
          <div class="w-1 h-5 bg-white/60 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
          <div class="w-1 h-2 bg-white/60 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
          <div class="w-1 h-4 bg-white/60 rounded-full animate-bounce" style="animation-delay: 450ms"></div>
          <div class="w-1 h-3 bg-white/60 rounded-full animate-bounce" style="animation-delay: 100ms"></div>
        </div>
      {/if}
    </div>

    <!-- 曲名 + いいね -->
    <div class="flex justify-between items-start mb-4">
      <div>
        <p class="font-bold text-white text-sm">{songs[currentIndex].title}</p>
        <p class="text-xs text-gray-400">{songs[currentIndex].artist}</p>
      </div>
      <button
        onclick={() => liked = !liked}
        class="text-xl transition-all {liked ? 'text-pink-400 scale-125' : 'text-gray-500 hover:text-gray-300'}"
      >
        {liked ? '♥' : '♡'}
      </button>
    </div>

    <!-- プログレス -->
    <div class="mb-1">
      <input type="range" min="0" max="100" bind:value={progress} class="w-full accent-violet-500 cursor-pointer" />
      <div class="flex justify-between text-xs text-gray-500 mt-0.5">
        <span>{fmtTime(progress, songs[currentIndex].duration)}</span>
        <span>{songs[currentIndex].duration}</span>
      </div>
    </div>

    <!-- コントロールボタン -->
    <div class="flex justify-around items-center mt-4">
      <button
        onclick={() => shuffled = !shuffled}
        class="text-sm transition {shuffled ? 'text-violet-400' : 'text-gray-600 hover:text-gray-400'}"
        title="シャッフル"
      >🔀</button>

      <button
        onclick={prevSong}
        class="text-gray-400 hover:text-white transition text-xl active:scale-90 transform"
      >⏮</button>

      <button
        onclick={() => isPlaying = !isPlaying}
        class="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-105 active:scale-95 transition-transform shadow-lg text-lg"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      <button
        onclick={nextSong}
        class="text-gray-400 hover:text-white transition text-xl active:scale-90 transform"
      >⏭</button>

      <button
        onclick={() => repeated = !repeated}
        class="text-sm transition {repeated ? 'text-violet-400' : 'text-gray-600 hover:text-gray-400'}"
        title="リピート"
      >🔁</button>
    </div>

    <!-- ボリューム -->
    <div class="flex items-center gap-2 mt-4">
      <span class="text-gray-500 text-sm select-none">🔈</span>
      <input type="range" min="0" max="100" bind:value={volume} class="flex-1 accent-gray-500 cursor-pointer" />
      <span class="text-gray-500 text-sm select-none">🔊</span>
    </div>

  </div>
</Showcase>
