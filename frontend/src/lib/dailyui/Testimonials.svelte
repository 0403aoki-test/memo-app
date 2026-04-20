<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const reviews = [
    { name: '田中 太郎', role: 'フロントエンジニア', text: 'Tailwind CSSのおかげで開発速度が3倍になりました。クラス名を覚えるだけでプロ級のUIが作れます。', rating: 5, avatar: 'TT' },
    { name: '鈴木 花子', role: 'UIデザイナー', text: 'デザインとコードの橋渡しが完璧。Figmaで設計してそのままTailwindで実装できます。', rating: 5, avatar: 'SH' },
    { name: '佐藤 一郎', role: 'フルスタック開発者', text: '最初は戸惑いましたが、一週間で慣れました。今では手放せないツールです。', rating: 4, avatar: 'SI' },
  ]
</script>

<Showcase title="Daily UI #039 — Testimonials" code={`<div class="grid grid-cols-3 gap-4">
  <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
    <!-- 星評価 -->
    <div class="flex gap-0.5 mb-3">
      {'★★★★★'.split('').map(s => <span class="text-yellow-400">{s}</span>)}
    </div>
    <p class="text-sm text-gray-600 leading-relaxed mb-4">"テキスト"</p>
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 rounded-full bg-violet-500">TT</div>
      <div>
        <p class="text-xs font-semibold">田中 太郎</p>
        <p class="text-xs text-gray-400">エンジニア</p>
      </div>
    </div>
  </div>
</div>`}>
  <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
    {#each reviews as r}
      <Tooltip label="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div class="flex gap-0.5 mb-3">
            {#each Array(r.rating) as _}
              <span class="text-yellow-400 text-sm">★</span>
            {/each}
          </div>
          <p class="text-xs text-gray-600 leading-relaxed mb-4">"{r.text}"</p>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold shrink-0">{r.avatar}</div>
            <div>
              <p class="text-xs font-semibold text-gray-800">{r.name}</p>
              <p class="text-xs text-gray-400">{r.role}</p>
            </div>
          </div>
        </div>
      </Tooltip>
    {/each}
  </div>
</Showcase>
