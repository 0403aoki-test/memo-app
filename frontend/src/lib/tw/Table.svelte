<script lang="ts">
  import Showcase from '../Showcase.svelte'

  type Row = { name: string; role: string; status: string; amount: string }

  const rows: Row[] = [
    { name: '田中 太郎', role: '管理者', status: '完了', amount: '¥12,000' },
    { name: '鈴木 花子', role: 'ユーザー', status: '進行中', amount: '¥8,500' },
    { name: '佐藤 一郎', role: 'ユーザー', status: '未着手', amount: '¥3,200' },
    { name: '高橋 美穂', role: 'モデレーター', status: '完了', amount: '¥21,000' },
    { name: '伊藤 健二', role: 'ユーザー', status: '進行中', amount: '¥5,700' },
  ]

  const statusClass: Record<string, string> = {
    '完了': 'bg-green-100 text-green-700',
    '進行中': 'bg-yellow-100 text-yellow-700',
    '未着手': 'bg-red-100 text-red-700',
  }

  const code = `<div class="overflow-x-auto rounded-xl border border-gray-200">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-gray-200 bg-gray-50">
        <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">名前</th>
        <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">ロール</th>
        <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">ステータス</th>
        <th class="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">金額</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <tr class="hover:bg-gray-50 transition">
        <td class="py-3 px-4 font-medium text-gray-800">田中 太郎</td>
        <td class="py-3 px-4 text-gray-500">管理者</td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">完了</span>
        </td>
        <td class="py-3 px-4 text-right font-mono text-gray-700">¥12,000</td>
      </tr>
    </tbody>
  </table>
</div>`

  const rationale = `テーブルは divide-y divide-gray-100 で行の区切り線を軽量に表現し、hover:bg-gray-50 でインタラクティブ感を演出します。thead の uppercase tracking-wide は「ラベル」としての視覚的階層を作ります。金額などの数値は font-mono + text-right で縦に揃えて比較しやすくします。`
</script>

<Showcase title="テーブル" {code} {rationale}>
  <div class="w-full overflow-x-auto rounded-xl border border-gray-200">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-gray-200 bg-gray-50">
          <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">名前</th>
          <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">ロール</th>
          <th class="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">ステータス</th>
          <th class="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">金額</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        {#each rows as row}
          <tr class="hover:bg-gray-50 transition cursor-pointer">
            <td class="py-3 px-4">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-xs font-bold shrink-0">
                  {row.name[0]}
                </div>
                <span class="font-medium text-gray-800">{row.name}</span>
              </div>
            </td>
            <td class="py-3 px-4 text-gray-500 hidden sm:table-cell">{row.role}</td>
            <td class="py-3 px-4">
              <span class="px-2 py-0.5 rounded-full text-xs font-medium {statusClass[row.status]}">{row.status}</span>
            </td>
            <td class="py-3 px-4 text-right font-mono text-gray-700">{row.amount}</td>
          </tr>
        {/each}
      </tbody>
      <tfoot class="border-t border-gray-200 bg-gray-50">
        <tr>
          <td class="py-2 px-4 text-xs text-gray-400" colspan={2}>合計 {rows.length} 件</td>
          <td class="hidden sm:table-cell"></td>
          <td class="py-2 px-4 text-right text-xs font-semibold text-gray-700 font-mono">
            ¥{rows.reduce((s, r) => s + parseInt(r.amount.replace(/[¥,]/g, '')), 0).toLocaleString()}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</Showcase>
