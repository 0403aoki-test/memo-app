<script lang="ts">
  import Showcase from '../Showcase.svelte'
  import Tooltip from '../Tooltip.svelte'

  const jobs = [
    { title: 'フロントエンドエンジニア', company: 'TechCorp', location: '東京・リモート可', salary: '600〜900万', type: 'フルタイム', tags: ['React', 'TypeScript', 'Tailwind'], new: true },
    { title: 'UIデザイナー', company: 'DesignLab', location: '大阪', salary: '500〜750万', type: 'フルタイム', tags: ['Figma', 'CSS', 'Daily UI'], new: false },
    { title: 'バックエンドエンジニア', company: 'StartupXYZ', location: 'フルリモート', salary: '700〜1000万', type: 'フルタイム', tags: ['Go', 'Python', 'AWS'], new: true },
  ]
</script>

<Showcase title="Daily UI #050 — Job Listing" code={`<div class="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition">
  <div class="flex justify-between items-start">
    <div>
      <p class="font-bold text-gray-900">フロントエンドエンジニア</p>
      <p class="text-sm text-gray-500">TechCorp • 東京</p>
    </div>
    <span class="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">NEW</span>
  </div>
  <div class="flex gap-2 mt-3">
    <span class="bg-violet-100 text-violet-700 text-xs px-2 py-1 rounded-full">React</span>
  </div>
</div>`}>
  <div class="w-full max-w-lg space-y-3">
    {#each jobs as job}
      <Tooltip label="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-violet-200 transition cursor-pointer">
        <div class="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-violet-200 transition cursor-pointer group">
          <div class="flex justify-between items-start mb-2">
            <div>
              <p class="font-bold text-gray-900 text-sm group-hover:text-violet-700 transition">{job.title}</p>
              <p class="text-xs text-gray-500 mt-0.5">{job.company} • {job.location}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              {#if job.new}
                <span class="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">NEW</span>
              {/if}
              <span class="text-gray-300 hover:text-red-400 transition text-sm cursor-pointer">♡</span>
            </div>
          </div>
          <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
            <span>💰 {job.salary}</span>
            <span>⏰ {job.type}</span>
          </div>
          <div class="flex gap-1.5 flex-wrap">
            {#each job.tags as tag}
              <span class="bg-violet-50 text-violet-600 text-xs px-2 py-0.5 rounded-full">{tag}</span>
            {/each}
          </div>
        </div>
      </Tooltip>
    {/each}
  </div>
</Showcase>
