<script lang="ts">
  import Showcase from '../Showcase.svelte'

  let modalOpen = $state(false)
  let drawerOpen = $state(false)
  let activeTab = $state(0)
  let toastVisible = $state(false)
  let swapOn = $state(false)
  let collapseOpen = $state(false)
</script>

<!-- ボタン -->
<Showcase
  title="ボタン"
  code={`<!-- サイズ -->
<button class="btn btn-xs">極小</button>
<button class="btn btn-sm">小</button>
<button class="btn">中（デフォルト）</button>
<button class="btn btn-lg">大</button>

<!-- カラー -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-neutral">Neutral</button>

<!-- スタイル -->
<button class="btn btn-outline btn-primary">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>`}
>
  <div class="flex flex-wrap gap-3">
    <button class="btn btn-xs">極小</button>
    <button class="btn btn-sm">小</button>
    <button class="btn">中</button>
    <button class="btn btn-lg">大</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-outline btn-primary">Outline</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-link">Link</button>
  </div>
</Showcase>

<!-- Join（ボタングループ） -->
<Showcase
  title="Join（グループ化）"
  code={`<!-- ボタングループ -->
<div class="join">
  <button class="btn join-item">左</button>
  <button class="btn btn-active join-item">中央</button>
  <button class="btn join-item">右</button>
</div>

<!-- 入力グループ -->
<div class="join">
  <input type="text" placeholder="検索キーワード" class="input input-bordered join-item" />
  <button class="btn btn-primary join-item">検索</button>
</div>

<!-- ラジオグループ -->
<div class="join">
  <input class="join-item btn" type="radio" name="options" aria-label="月額" />
  <input class="join-item btn" type="radio" name="options" aria-label="年額" checked />
</div>`}
>
  <div class="flex flex-col gap-4">
    <div class="join">
      <button class="btn join-item">左</button>
      <button class="btn btn-active join-item">中央</button>
      <button class="btn join-item">右</button>
    </div>
    <div class="join">
      <input type="text" placeholder="検索キーワード" class="input input-bordered join-item" />
      <button class="btn btn-primary join-item">検索</button>
    </div>
    <div class="join">
      <input class="join-item btn" type="radio" name="options" aria-label="月額" />
      <input class="join-item btn" type="radio" name="options" aria-label="年額" checked />
    </div>
  </div>
</Showcase>

<!-- バッジ -->
<Showcase
  title="バッジ"
  code={`<span class="badge">デフォルト</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-outline">Outline</span>
<span class="badge badge-lg badge-primary">Large</span>
<span class="badge badge-sm badge-primary">Small</span>`}
>
  <div class="flex flex-wrap gap-2">
    <span class="badge">デフォルト</span>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-accent">Accent</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-error">Error</span>
    <span class="badge badge-info">Info</span>
    <span class="badge badge-outline">Outline</span>
    <span class="badge badge-lg badge-primary">Large</span>
    <span class="badge badge-sm badge-primary">Small</span>
  </div>
</Showcase>

<!-- Indicator -->
<Showcase
  title="Indicator（インジケーター）"
  code={`<!-- バッジ付きボタン -->
<div class="indicator">
  <span class="indicator-item badge badge-error">3</span>
  <button class="btn">通知</button>
</div>

<!-- バッジ付きアバター -->
<div class="indicator">
  <span class="indicator-item badge badge-success badge-xs"></span>
  <div class="avatar">
    <div class="w-10 rounded-full">
      <img src="https://i.pravatar.cc/40?img=1" alt="" />
    </div>
  </div>
</div>

<!-- 位置指定 -->
<div class="indicator">
  <span class="indicator-item indicator-start badge badge-primary">NEW</span>
  <div class="card bg-base-200 p-4">コンテンツ</div>
</div>`}
>
  <div class="flex flex-wrap items-center gap-6">
    <div class="indicator">
      <span class="indicator-item badge badge-error">3</span>
      <button class="btn">通知</button>
    </div>
    <div class="indicator">
      <span class="indicator-item badge badge-success badge-xs"></span>
      <div class="avatar">
        <div class="w-10 rounded-full">
          <img src="https://i.pravatar.cc/40?img=1" alt="" />
        </div>
      </div>
    </div>
    <div class="indicator">
      <span class="indicator-item indicator-start badge badge-primary">NEW</span>
      <div class="card bg-base-200 px-6 py-4 text-sm">コンテンツ</div>
    </div>
  </div>
</Showcase>

<!-- アラート -->
<Showcase
  title="アラート"
  code={`<div class="alert alert-info"><span>情報：処理が開始されました。</span></div>
<div class="alert alert-success"><span>成功：保存が完了しました。</span></div>
<div class="alert alert-warning"><span>警告：ディスク容量が不足しています。</span></div>
<div class="alert alert-error"><span>エラー：接続に失敗しました。</span></div>`}
>
  <div class="flex flex-col gap-2 w-full">
    <div class="alert"><span>デフォルトのアラートメッセージです。</span></div>
    <div class="alert alert-info"><span>情報：処理が開始されました。</span></div>
    <div class="alert alert-success"><span>成功：保存が完了しました。</span></div>
    <div class="alert alert-warning"><span>警告：ディスク容量が不足しています。</span></div>
    <div class="alert alert-error"><span>エラー：接続に失敗しました。</span></div>
  </div>
</Showcase>

<!-- Toast -->
<Showcase
  title="Toast（トースト通知）"
  code={`<!-- 右下に表示 -->
<div class="toast toast-end">
  <div class="alert alert-success">
    <span>保存しました！</span>
  </div>
</div>

<!-- 複数トースト -->
<div class="toast">
  <div class="alert alert-info"><span>新しいメッセージがあります</span></div>
  <div class="alert alert-warning"><span>セッションが期限切れです</span></div>
</div>`}
>
  <div class="flex flex-col items-start gap-3 w-full">
    <button class="btn btn-primary btn-sm" onclick={() => { toastVisible = true; setTimeout(() => toastVisible = false, 3000) }}>
      トースト表示
    </button>
    <p class="text-xs text-gray-400">ボタンを押すと右下に3秒間表示されます</p>
  </div>
  {#if toastVisible}
    <div class="toast toast-end toast-bottom fixed z-50">
      <div class="alert alert-success"><span>保存しました！</span></div>
    </div>
  {/if}
</Showcase>

<!-- カード -->
<Showcase
  title="カード"
  code={`<div class="card w-72 bg-base-100 shadow-md">
  <div class="card-body">
    <h2 class="card-title">カードタイトル</h2>
    <p>カードの説明文がここに入ります。</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary btn-sm">詳細を見る</button>
    </div>
  </div>
</div>`}
>
  <div class="flex flex-wrap gap-4">
    <div class="card w-64 bg-base-100 shadow-md border border-base-200">
      <div class="card-body">
        <h2 class="card-title text-base">カードタイトル</h2>
        <p class="text-sm">カードの説明文がここに入ります。DaisyUI のカードコンポーネントです。</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary btn-sm">詳細を見る</button>
        </div>
      </div>
    </div>
    <div class="card w-64 bg-base-100 shadow-md border border-base-200">
      <div class="card-body">
        <h2 class="card-title text-base">
          新着
          <span class="badge badge-secondary badge-sm">NEW</span>
        </h2>
        <p class="text-sm">バッジを組み合わせたカード。</p>
        <div class="card-actions justify-end">
          <button class="btn btn-outline btn-sm">キャンセル</button>
          <button class="btn btn-primary btn-sm">購入する</button>
        </div>
      </div>
    </div>
  </div>
</Showcase>

<!-- Stats -->
<Showcase
  title="Stats（統計表示）"
  code={`<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">総ユーザー数</div>
    <div class="stat-value">31,200</div>
    <div class="stat-desc">前月比 +21%</div>
  </div>
  <div class="stat">
    <div class="stat-title">新規登録</div>
    <div class="stat-value text-primary">4,200</div>
    <div class="stat-desc text-primary">↗ 先月より 400 増</div>
  </div>
  <div class="stat">
    <div class="stat-title">解約</div>
    <div class="stat-value text-error">1,200</div>
    <div class="stat-desc text-error">↘ 先月より 90 増</div>
  </div>
</div>`}
>
  <div class="stats stats-vertical sm:stats-horizontal shadow w-full">
    <div class="stat">
      <div class="stat-title">総ユーザー数</div>
      <div class="stat-value">31,200</div>
      <div class="stat-desc">前月比 +21%</div>
    </div>
    <div class="stat">
      <div class="stat-title">新規登録</div>
      <div class="stat-value text-primary">4,200</div>
      <div class="stat-desc text-primary">↗ 先月より 400 増</div>
    </div>
    <div class="stat">
      <div class="stat-title">解約</div>
      <div class="stat-value text-error">1,200</div>
      <div class="stat-desc text-error">↘ 先月より 90 増</div>
    </div>
  </div>
</Showcase>

<!-- Table -->
<Showcase
  title="Table（テーブル）"
  code={`<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>名前</th>
      <th>メール</th>
      <th>役割</th>
    </tr>
  </thead>
  <tbody>
    <tr class="hover">
      <td>1</td>
      <td>山田 太郎</td>
      <td>taro@example.com</td>
      <td><span class="badge badge-primary">管理者</span></td>
    </tr>
    <tr class="hover">
      <td>2</td>
      <td>鈴木 花子</td>
      <td>hanako@example.com</td>
      <td><span class="badge badge-ghost">一般</span></td>
    </tr>
  </tbody>
</table>`}
>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>名前</th>
          <th>メール</th>
          <th>役割</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover">
          <td>1</td>
          <td>山田 太郎</td>
          <td>taro@example.com</td>
          <td><span class="badge badge-primary badge-sm">管理者</span></td>
        </tr>
        <tr class="hover">
          <td>2</td>
          <td>鈴木 花子</td>
          <td>hanako@example.com</td>
          <td><span class="badge badge-ghost badge-sm">一般</span></td>
        </tr>
        <tr class="hover">
          <td>3</td>
          <td>田中 次郎</td>
          <td>jiro@example.com</td>
          <td><span class="badge badge-secondary badge-sm">編集者</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</Showcase>

<!-- Tabs -->
<Showcase
  title="Tabs（タブ）"
  code={`<!-- ボーダースタイル -->
<div role="tablist" class="tabs tabs-bordered">
  <button role="tab" class="tab tab-active">タブ1</button>
  <button role="tab" class="tab">タブ2</button>
  <button role="tab" class="tab">タブ3</button>
</div>

<!-- ボックススタイル -->
<div role="tablist" class="tabs tabs-boxed">
  <button role="tab" class="tab tab-active">タブ1</button>
  <button role="tab" class="tab">タブ2</button>
  <button role="tab" class="tab">タブ3</button>
</div>

<!-- リフトスタイル -->
<div role="tablist" class="tabs tabs-lifted">
  <button role="tab" class="tab tab-active">タブ1</button>
  <button role="tab" class="tab">タブ2</button>
  <button role="tab" class="tab">タブ3</button>
</div>`}
>
  <div class="flex flex-col gap-4 w-full">
    <div role="tablist" class="tabs tabs-bordered">
      {#each ['タブ1', 'タブ2', 'タブ3'] as tab, i}
        <button role="tab" class="tab {activeTab === i ? 'tab-active' : ''}" onclick={() => activeTab = i}>{tab}</button>
      {/each}
    </div>
    <div class="text-sm text-gray-500 px-1">選択中: タブ{activeTab + 1} のコンテンツ</div>
    <div role="tablist" class="tabs tabs-boxed">
      {#each ['タブ1', 'タブ2', 'タブ3'] as tab, i}
        <button role="tab" class="tab {activeTab === i ? 'tab-active' : ''}" onclick={() => activeTab = i}>{tab}</button>
      {/each}
    </div>
    <div role="tablist" class="tabs tabs-lifted">
      {#each ['タブ1', 'タブ2', 'タブ3'] as tab, i}
        <button role="tab" class="tab {activeTab === i ? 'tab-active' : ''}" onclick={() => activeTab = i}>{tab}</button>
      {/each}
    </div>
  </div>
</Showcase>

<!-- Navbar -->
<Showcase
  title="Navbar（ナビゲーションバー）"
  code={`<div class="navbar bg-base-100 shadow-sm rounded-box">
  <div class="navbar-start">
    <button class="btn btn-ghost btn-circle">
      <!-- ハンバーガーアイコン -->
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl">MyApp</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-primary btn-sm">ログイン</button>
  </div>
</div>`}
>
  <div class="w-full">
    <div class="navbar bg-base-100 shadow-sm rounded-box">
      <div class="navbar-start">
        <button class="btn btn-ghost btn-circle">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">MyApp</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-primary btn-sm">ログイン</button>
      </div>
    </div>
  </div>
</Showcase>

<!-- Menu -->
<Showcase
  title="Menu（メニュー）"
  code={`<ul class="menu bg-base-200 rounded-box w-56">
  <li class="menu-title">メインメニュー</li>
  <li><a>ホーム</a></li>
  <li><a class="active">ダッシュボード</a></li>
  <li><a>設定</a></li>
  <li class="menu-title">その他</li>
  <li>
    <details>
      <summary>サブメニュー</summary>
      <ul>
        <li><a>項目 A</a></li>
        <li><a>項目 B</a></li>
      </ul>
    </details>
  </li>
</ul>`}
>
  <ul class="menu bg-base-200 rounded-box w-56">
    <li class="menu-title">メインメニュー</li>
    <li><a>ホーム</a></li>
    <li><a class="active">ダッシュボード</a></li>
    <li><a>設定</a></li>
    <li class="menu-title">その他</li>
    <li>
      <details>
        <summary>サブメニュー</summary>
        <ul>
          <li><a>項目 A</a></li>
          <li><a>項目 B</a></li>
        </ul>
      </details>
    </li>
  </ul>
</Showcase>

<!-- Dropdown -->
<Showcase
  title="Dropdown（ドロップダウン）"
  code={`<div class="dropdown">
  <div tabindex="0" role="button" class="btn btn-primary m-1">メニューを開く</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>プロフィール</a></li>
    <li><a>設定</a></li>
    <li><a class="text-error">ログアウト</a></li>
  </ul>
</div>

<!-- 上方向 -->
<div class="dropdown dropdown-top">
  <div tabindex="0" role="button" class="btn m-1">上に開く ↑</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
    <li><a>選択肢 1</a></li>
    <li><a>選択肢 2</a></li>
  </ul>
</div>`}
>
  <div class="flex flex-wrap gap-4">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-primary">メニューを開く</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
        <li><a>プロフィール</a></li>
        <li><a>設定</a></li>
        <li><a class="text-error">ログアウト</a></li>
      </ul>
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-outline">右寄せ ▼</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 shadow">
        <li><a>選択肢 1</a></li>
        <li><a>選択肢 2</a></li>
      </ul>
    </div>
  </div>
</Showcase>

<!-- Collapse / Accordion -->
<Showcase
  title="Collapse・Accordion（折りたたみ）"
  code={`<!-- Collapse -->
<div class="collapse bg-base-200">
  <input type="checkbox" />
  <div class="collapse-title text-sm font-medium">クリックして開く</div>
  <div class="collapse-content text-sm">
    <p>折りたたまれたコンテンツがここに入ります。</p>
  </div>
</div>

<!-- Accordion -->
<div class="join join-vertical w-full">
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="faq" checked />
    <div class="collapse-title font-medium">質問1：DaisyUI とは？</div>
    <div class="collapse-content text-sm">
      <p>Tailwind CSS ベースのコンポーネントライブラリです。</p>
    </div>
  </div>
  <div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="faq" />
    <div class="collapse-title font-medium">質問2：無料で使えますか？</div>
    <div class="collapse-content text-sm">
      <p>はい、MIT ライセンスで無料です。</p>
    </div>
  </div>
</div>`}
>
  <div class="flex flex-col gap-3 w-full">
    <div class="collapse bg-base-200">
      <input type="checkbox" />
      <div class="collapse-title text-sm font-medium">クリックして開く</div>
      <div class="collapse-content text-sm">
        <p>折りたたまれたコンテンツがここに入ります。</p>
      </div>
    </div>
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-demo" checked />
        <div class="collapse-title font-medium text-sm">質問1：DaisyUI とは？</div>
        <div class="collapse-content text-sm"><p>Tailwind CSS ベースのコンポーネントライブラリです。</p></div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-demo" />
        <div class="collapse-title font-medium text-sm">質問2：無料で使えますか？</div>
        <div class="collapse-content text-sm"><p>はい、MIT ライセンスで無料です。</p></div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="faq-demo" />
        <div class="collapse-title font-medium text-sm">質問3：Svelte で使えますか？</div>
        <div class="collapse-content text-sm"><p>はい、フレームワーク非依存なので Svelte でも使えます。</p></div>
      </div>
    </div>
  </div>
</Showcase>

<!-- Tooltip -->
<Showcase
  title="Tooltip（ツールチップ）"
  code={`<div class="tooltip" data-tip="ここにヒントが表示されます">
  <button class="btn">ホバーしてみて</button>
</div>

<!-- 方向指定 -->
<div class="tooltip tooltip-right" data-tip="右に表示">
  <button class="btn btn-sm">右</button>
</div>
<div class="tooltip tooltip-bottom" data-tip="下に表示">
  <button class="btn btn-sm">下</button>
</div>

<!-- カラー -->
<div class="tooltip tooltip-primary" data-tip="Primary カラー">
  <button class="btn btn-primary btn-sm">Primary</button>
</div>
<div class="tooltip tooltip-error" data-tip="エラーカラー">
  <button class="btn btn-error btn-sm">Error</button>
</div>`}
>
  <div class="flex flex-wrap gap-4">
    <div class="tooltip" data-tip="ここにヒントが表示されます">
      <button class="btn">ホバーしてみて</button>
    </div>
    <div class="tooltip tooltip-right" data-tip="右に表示">
      <button class="btn btn-sm">右</button>
    </div>
    <div class="tooltip tooltip-bottom" data-tip="下に表示">
      <button class="btn btn-sm">下</button>
    </div>
    <div class="tooltip tooltip-primary" data-tip="Primary カラー">
      <button class="btn btn-primary btn-sm">Primary</button>
    </div>
    <div class="tooltip tooltip-error" data-tip="エラーカラー">
      <button class="btn btn-error btn-sm">Error</button>
    </div>
  </div>
</Showcase>

<!-- Swap -->
<Showcase
  title="Swap（切り替えアニメーション）"
  code={`<!-- テキスト切り替え -->
<label class="swap text-4xl">
  <input type="checkbox" />
  <div class="swap-on">😎</div>
  <div class="swap-off">😴</div>
</label>

<!-- ハンバーガー ↔ ✕ -->
<label class="swap swap-rotate btn btn-ghost btn-circle">
  <input type="checkbox" />
  <svg class="swap-off w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
  <svg class="swap-on w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
  </svg>
</label>`}
>
  <div class="flex flex-wrap items-center gap-6">
    <label class="swap text-4xl">
      <input type="checkbox" bind:checked={swapOn} />
      <div class="swap-on">😎</div>
      <div class="swap-off">😴</div>
    </label>
    <label class="swap swap-rotate btn btn-ghost btn-circle">
      <input type="checkbox" bind:checked={swapOn} />
      <svg class="swap-off w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg class="swap-on w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </label>
    <span class="text-sm text-gray-400">状態: {swapOn ? 'ON' : 'OFF'}</span>
  </div>
</Showcase>

<!-- フォーム -->
<Showcase
  title="フォーム"
  code={`<input type="text" placeholder="テキストを入力" class="input input-bordered w-full" />
<input type="text" placeholder="Primary" class="input input-primary w-full" />
<select class="select select-bordered w-full">
  <option disabled selected>選択してください</option>
  <option>オプション 1</option>
</select>
<textarea class="textarea textarea-bordered w-full" placeholder="メッセージ"></textarea>
<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="checkbox checkbox-primary" /><span>チェックボックス</span>
</label>
<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="toggle toggle-primary" /><span>トグル</span>
</label>
<input type="range" min="0" max="100" class="range range-primary" />`}
>
  <div class="flex flex-col gap-3 w-full max-w-sm">
    <input type="text" placeholder="テキストを入力" class="input input-bordered w-full" />
    <input type="text" placeholder="Primary スタイル" class="input input-primary w-full" />
    <select class="select select-bordered w-full">
      <option disabled selected>選択してください</option>
      <option>オプション 1</option>
      <option>オプション 2</option>
    </select>
    <textarea class="textarea textarea-bordered w-full" placeholder="メッセージを入力"></textarea>
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" class="checkbox checkbox-primary" />
      <span class="text-sm">チェックボックス</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" class="toggle toggle-primary" />
      <span class="text-sm">トグル</span>
    </label>
    <input type="range" min="0" max="100" value="60" class="range range-primary" />
  </div>
</Showcase>

<!-- Rating -->
<Showcase
  title="Rating（評価）"
  code={`<!-- 星評価 -->
<div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" checked />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
</div>

<!-- ハート -->
<div class="rating gap-1">
  <input type="radio" name="rating-2" class="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-2" class="mask mask-heart bg-red-400" checked />
  <input type="radio" name="rating-2" class="mask mask-heart bg-red-400" />
</div>

<!-- 色付き星 -->
<div class="rating rating-lg">
  <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
</div>`}
>
  <div class="flex flex-col gap-3">
    <div class="rating">
      <input type="radio" name="rating-a" class="mask mask-star" />
      <input type="radio" name="rating-a" class="mask mask-star" checked />
      <input type="radio" name="rating-a" class="mask mask-star" />
      <input type="radio" name="rating-a" class="mask mask-star" />
      <input type="radio" name="rating-a" class="mask mask-star" />
    </div>
    <div class="rating gap-1">
      <input type="radio" name="rating-b" class="mask mask-heart bg-red-400" />
      <input type="radio" name="rating-b" class="mask mask-heart bg-red-400" checked />
      <input type="radio" name="rating-b" class="mask mask-heart bg-red-400" />
    </div>
    <div class="rating rating-lg">
      <input type="radio" name="rating-c" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-c" class="mask mask-star-2 bg-orange-400" checked />
      <input type="radio" name="rating-c" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-c" class="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-c" class="mask mask-star-2 bg-orange-400" />
    </div>
  </div>
</Showcase>

<!-- プログレス・Radial Progress -->
<Showcase
  title="Progress・Radial Progress"
  code={`<!-- リニアプログレス -->
<progress class="progress progress-primary w-full" value="50" max="100"></progress>
<progress class="progress progress-success w-full" value="80" max="100"></progress>
<progress class="progress progress-warning w-full"></progress>

<!-- ラジアルプログレス -->
<div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
<div class="radial-progress text-success" style="--value:90; --size:5rem;" role="progressbar">90%</div>`}
>
  <div class="flex flex-wrap items-center gap-6 w-full">
    <div class="flex flex-col gap-2 flex-1 min-w-40">
      <progress class="progress progress-primary w-full" value="50" max="100"></progress>
      <progress class="progress progress-success w-full" value="80" max="100"></progress>
      <progress class="progress progress-warning w-full"></progress>
    </div>
    <div class="flex gap-4">
      <div class="radial-progress text-primary" style="--value:70;" role="progressbar">70%</div>
      <div class="radial-progress text-success" style="--value:90; --size:5rem;" role="progressbar">90%</div>
    </div>
  </div>
</Showcase>

<!-- Loading -->
<Showcase
  title="Loading（ローディング）"
  code={`<span class="loading loading-spinner loading-xs"></span>
<span class="loading loading-spinner loading-sm"></span>
<span class="loading loading-spinner"></span>
<span class="loading loading-spinner loading-lg"></span>

<span class="loading loading-dots"></span>
<span class="loading loading-ring"></span>
<span class="loading loading-ball"></span>
<span class="loading loading-bars"></span>
<span class="loading loading-infinity"></span>

<!-- カラー -->
<span class="loading loading-spinner text-primary"></span>
<span class="loading loading-spinner text-secondary"></span>
<span class="loading loading-spinner text-accent"></span>`}
>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <span class="loading loading-spinner loading-xs"></span>
      <span class="loading loading-spinner loading-sm"></span>
      <span class="loading loading-spinner"></span>
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <div class="flex items-center gap-4">
      <span class="loading loading-dots"></span>
      <span class="loading loading-ring"></span>
      <span class="loading loading-ball"></span>
      <span class="loading loading-bars"></span>
      <span class="loading loading-infinity"></span>
    </div>
    <div class="flex items-center gap-4">
      <span class="loading loading-spinner text-primary"></span>
      <span class="loading loading-spinner text-secondary"></span>
      <span class="loading loading-spinner text-accent"></span>
      <span class="loading loading-spinner text-success"></span>
      <span class="loading loading-spinner text-error"></span>
    </div>
  </div>
</Showcase>

<!-- Skeleton -->
<Showcase
  title="Skeleton（スケルトン）"
  code={`<!-- テキストスケルトン -->
<div class="skeleton h-4 w-full"></div>
<div class="skeleton h-4 w-3/4"></div>
<div class="skeleton h-4 w-1/2"></div>

<!-- カードスケルトン -->
<div class="flex gap-4">
  <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
  <div class="flex flex-col gap-2 flex-1">
    <div class="skeleton h-4 w-28"></div>
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-4 w-full"></div>
  </div>
</div>`}
>
  <div class="flex flex-col gap-3 w-full">
    <div class="skeleton h-4 w-full"></div>
    <div class="skeleton h-4 w-3/4"></div>
    <div class="skeleton h-4 w-1/2"></div>
    <div class="flex gap-4 mt-2">
      <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
      <div class="flex flex-col gap-2 flex-1">
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
    </div>
  </div>
</Showcase>

<!-- アバター -->
<Showcase
  title="アバター"
  code={`<div class="avatar"><div class="w-12 rounded-full"><img src="..." alt="" /></div></div>
<div class="avatar placeholder">
  <div class="bg-primary text-primary-content rounded-full w-12"><span>AB</span></div>
</div>
<div class="avatar online"><div class="w-12 rounded-full"><img src="..." alt="" /></div></div>
<div class="avatar-group -space-x-4">
  <div class="avatar"><div class="w-10 rounded-full"><img src="..." alt="" /></div></div>
  <!-- ... -->
  <div class="avatar placeholder"><div class="w-10 rounded-full bg-neutral text-neutral-content"><span>+3</span></div></div>
</div>`}
>
  <div class="flex flex-wrap items-center gap-4">
    <div class="avatar">
      <div class="w-12 rounded-full">
        <img src="https://i.pravatar.cc/48?img=1" alt="アバター" />
      </div>
    </div>
    <div class="avatar placeholder">
      <div class="bg-primary text-primary-content rounded-full w-12">
        <span>AB</span>
      </div>
    </div>
    <div class="avatar online">
      <div class="w-12 rounded-full">
        <img src="https://i.pravatar.cc/48?img=2" alt="アバター" />
      </div>
    </div>
    <div class="avatar-group -space-x-4">
      <div class="avatar"><div class="w-10 rounded-full"><img src="https://i.pravatar.cc/40?img=3" alt="" /></div></div>
      <div class="avatar"><div class="w-10 rounded-full"><img src="https://i.pravatar.cc/40?img=4" alt="" /></div></div>
      <div class="avatar"><div class="w-10 rounded-full"><img src="https://i.pravatar.cc/40?img=5" alt="" /></div></div>
      <div class="avatar placeholder">
        <div class="w-10 rounded-full bg-neutral text-neutral-content text-xs">
          <span>+3</span>
        </div>
      </div>
    </div>
  </div>
</Showcase>

<!-- Chat -->
<Showcase
  title="Chat（チャットバブル）"
  code={`<!-- 自分 -->
<div class="chat chat-end">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full"><img src="https://i.pravatar.cc/40?img=1" alt="" /></div>
  </div>
  <div class="chat-bubble chat-bubble-primary">こんにちは！</div>
  <div class="chat-footer opacity-50 text-xs">既読</div>
</div>

<!-- 相手 -->
<div class="chat chat-start">
  <div class="chat-image avatar">
    <div class="w-10 rounded-full"><img src="https://i.pravatar.cc/40?img=2" alt="" /></div>
  </div>
  <div class="chat-bubble">やあ、元気？</div>
  <div class="chat-footer opacity-50 text-xs">10:30</div>
</div>`}
>
  <div class="flex flex-col gap-1 w-full">
    <div class="chat chat-end">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full"><img src="https://i.pravatar.cc/40?img=1" alt="" /></div>
      </div>
      <div class="chat-bubble chat-bubble-primary">こんにちは！元気ですか？</div>
      <div class="chat-footer opacity-50 text-xs">既読 10:29</div>
    </div>
    <div class="chat chat-start">
      <div class="chat-image avatar">
        <div class="w-10 rounded-full"><img src="https://i.pravatar.cc/40?img=2" alt="" /></div>
      </div>
      <div class="chat-bubble">はい、元気です！DaisyUI 最高ですね。</div>
      <div class="chat-footer opacity-50 text-xs">10:30</div>
    </div>
    <div class="chat chat-end">
      <div class="chat-bubble chat-bubble-accent">ですね 🎉</div>
    </div>
  </div>
</Showcase>

<!-- Timeline -->
<Showcase
  title="Timeline（タイムライン）"
  code={`<ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start timeline-box">2022年</div>
    <div class="timeline-middle"><div class="bg-primary rounded-full w-3 h-3"></div></div>
    <div class="timeline-end">プロジェクト開始</div>
    <hr class="bg-primary"/>
  </li>
  <li>
    <hr class="bg-primary"/>
    <div class="timeline-start">2023年</div>
    <div class="timeline-middle"><div class="bg-primary rounded-full w-3 h-3"></div></div>
    <div class="timeline-end timeline-box">β版リリース</div>
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-start timeline-box">2024年</div>
    <div class="timeline-middle"><div class="rounded-full w-3 h-3 border-2 border-base-300"></div></div>
    <div class="timeline-end">v1.0 リリース予定</div>
  </li>
</ul>`}
>
  <ul class="timeline timeline-vertical">
    <li>
      <div class="timeline-start timeline-box text-sm">2022年</div>
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
      </div>
      <div class="timeline-end text-sm">プロジェクト開始</div>
      <hr class="bg-primary"/>
    </li>
    <li>
      <hr class="bg-primary"/>
      <div class="timeline-start text-sm">2023年</div>
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
      </div>
      <div class="timeline-end timeline-box text-sm">β版リリース</div>
      <hr />
    </li>
    <li>
      <hr />
      <div class="timeline-start timeline-box text-sm">2024年</div>
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
      </div>
      <div class="timeline-end text-sm">v1.0 リリース予定</div>
    </li>
  </ul>
</Showcase>

<!-- Steps -->
<Showcase
  title="Steps（ステップ）"
  code={`<ul class="steps steps-horizontal w-full">
  <li class="step step-primary">アカウント作成</li>
  <li class="step step-primary">プラン選択</li>
  <li class="step">支払い情報</li>
  <li class="step">完了</li>
</ul>

<!-- 縦方向 -->
<ul class="steps steps-vertical">
  <li class="step step-primary">注文確認</li>
  <li class="step step-primary">決済処理</li>
  <li class="step">発送準備</li>
  <li class="step">配送中</li>
</ul>`}
>
  <div class="flex flex-col gap-6 w-full">
    <ul class="steps steps-horizontal w-full">
      <li class="step step-primary">アカウント作成</li>
      <li class="step step-primary">プラン選択</li>
      <li class="step">支払い情報</li>
      <li class="step">完了</li>
    </ul>
    <ul class="steps steps-vertical">
      <li class="step step-primary">注文確認</li>
      <li class="step step-primary">決済処理</li>
      <li class="step">発送準備</li>
      <li class="step">配送中</li>
    </ul>
  </div>
</Showcase>

<!-- Breadcrumbs -->
<Showcase
  title="Breadcrumbs（パンくずリスト）"
  code={`<div class="breadcrumbs text-sm">
  <ul>
    <li><a>ホーム</a></li>
    <li><a>カテゴリ</a></li>
    <li>現在のページ</li>
  </ul>
</div>

<!-- アイコン付き -->
<div class="breadcrumbs text-sm">
  <ul>
    <li>
      <a>
        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z"/>
        </svg>
        ホーム
      </a>
    </li>
    <li><a>ドキュメント</a></li>
    <li>コンポーネント</li>
  </ul>
</div>`}
>
  <div class="flex flex-col gap-3">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a>ホーム</a></li>
        <li><a>カテゴリ</a></li>
        <li>現在のページ</li>
      </ul>
    </div>
    <div class="breadcrumbs text-sm">
      <ul>
        <li>
          <a class="flex items-center gap-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z"/>
            </svg>
            ホーム
          </a>
        </li>
        <li><a>ドキュメント</a></li>
        <li>コンポーネント</li>
      </ul>
    </div>
  </div>
</Showcase>

<!-- Divider -->
<Showcase
  title="Divider（区切り線）"
  code={`<div class="divider">OR</div>
<div class="divider divider-primary">Primary</div>
<div class="divider divider-start">左寄せ</div>
<div class="divider divider-end">右寄せ</div>

<!-- 縦方向 -->
<div class="flex h-16">
  <div class="flex-1 grid place-items-center">左</div>
  <div class="divider divider-horizontal">|</div>
  <div class="flex-1 grid place-items-center">右</div>
</div>`}
>
  <div class="flex flex-col gap-1 w-full">
    <div class="divider">OR</div>
    <div class="divider divider-primary">Primary</div>
    <div class="divider divider-start">左寄せ</div>
    <div class="divider divider-end">右寄せ</div>
    <div class="flex h-16">
      <div class="flex-1 grid place-items-center text-sm">左エリア</div>
      <div class="divider divider-horizontal"></div>
      <div class="flex-1 grid place-items-center text-sm">右エリア</div>
    </div>
  </div>
</Showcase>

<!-- Kbd -->
<Showcase
  title="Kbd（キーボードキー）"
  code={`<kbd class="kbd">A</kbd>
<kbd class="kbd">Enter</kbd>
<kbd class="kbd">Ctrl</kbd>

<!-- ショートカット表示 -->
<div class="flex items-center gap-1">
  <kbd class="kbd kbd-sm">Ctrl</kbd>
  <span>+</span>
  <kbd class="kbd kbd-sm">C</kbd>
  <span class="text-sm ml-2">コピー</span>
</div>
<div class="flex items-center gap-1">
  <kbd class="kbd kbd-sm">⌘</kbd>
  <span>+</span>
  <kbd class="kbd kbd-sm">K</kbd>
  <span class="text-sm ml-2">コマンドパレット</span>
</div>`}
>
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap gap-2">
      <kbd class="kbd">A</kbd>
      <kbd class="kbd">Enter</kbd>
      <kbd class="kbd">Ctrl</kbd>
      <kbd class="kbd">⌘</kbd>
      <kbd class="kbd">⇧</kbd>
      <kbd class="kbd">⌥</kbd>
    </div>
    <div class="flex items-center gap-1">
      <kbd class="kbd kbd-sm">Ctrl</kbd>
      <span>+</span>
      <kbd class="kbd kbd-sm">C</kbd>
      <span class="text-sm ml-2">コピー</span>
    </div>
    <div class="flex items-center gap-1">
      <kbd class="kbd kbd-sm">⌘</kbd>
      <span>+</span>
      <kbd class="kbd kbd-sm">K</kbd>
      <span class="text-sm ml-2">コマンドパレット</span>
    </div>
  </div>
</Showcase>

<!-- Hero -->
<Showcase
  title="Hero（ヒーローセクション）"
  code={`<div class="hero bg-base-200 py-12 rounded-box">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold">Hello, DaisyUI!</h1>
      <p class="py-4">美しい UI を素早く構築できるコンポーネントライブラリ。Tailwind CSS ベースで使いやすい。</p>
      <button class="btn btn-primary">始めてみる</button>
    </div>
  </div>
</div>`}
>
  <div class="w-full">
    <div class="hero bg-base-200 py-10 rounded-box">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-3xl font-bold">Hello, DaisyUI!</h1>
          <p class="py-4 text-sm">美しい UI を素早く構築できるコンポーネントライブラリ。Tailwind CSS ベースで使いやすい。</p>
          <button class="btn btn-primary">始めてみる</button>
        </div>
      </div>
    </div>
  </div>
</Showcase>

<!-- Drawer -->
<Showcase
  title="Drawer（ドロワー）"
  code={`<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="my-drawer" class="btn btn-primary drawer-button">ドロワーを開く</label>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-64 p-4">
      <li><a>ホーム</a></li>
      <li><a>プロフィール</a></li>
      <li><a>設定</a></li>
    </ul>
  </div>
</div>`}
>
  <div>
    <button class="btn btn-primary" onclick={() => drawerOpen = true}>ドロワーを開く</button>
    {#if drawerOpen}
      <div class="fixed inset-0 z-50 flex">
        <div class="fixed inset-0 bg-black/40" role="button" tabindex="0"
          onclick={() => drawerOpen = false}
          onkeydown={(e) => e.key === 'Enter' && (drawerOpen = false)}>
        </div>
        <div class="relative z-10 bg-base-200 w-64 min-h-full p-4">
          <ul class="menu">
            <li class="menu-title">メニュー</li>
            <li><a>ホーム</a></li>
            <li><a>プロフィール</a></li>
            <li><a>設定</a></li>
          </ul>
          <button class="btn btn-ghost btn-sm mt-4" onclick={() => drawerOpen = false}>閉じる</button>
        </div>
      </div>
    {/if}
  </div>
</Showcase>

<!-- モーダル -->
<Showcase
  title="Modal（モーダル）"
  code={`<button class="btn btn-primary" onclick="document.getElementById('my_modal').showModal()">
  モーダルを開く
</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">モーダルタイトル</h3>
    <p class="py-4">モーダルの内容がここに入ります。</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">閉じる</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>`}
>
  <button class="btn btn-primary" onclick={() => modalOpen = true}>
    モーダルを開く
  </button>
  {#if modalOpen}
    <div class="modal modal-open fixed z-50">
      <div class="modal-box">
        <h3 class="text-lg font-bold">モーダルタイトル</h3>
        <p class="py-4">モーダルの内容がここに入ります。背景クリックまたはボタンで閉じます。</p>
        <div class="modal-action">
          <button class="btn" onclick={() => modalOpen = false}>閉じる</button>
          <button class="btn btn-primary" onclick={() => modalOpen = false}>確認</button>
        </div>
      </div>
      <div class="modal-backdrop" role="button" tabindex="0"
        onclick={() => modalOpen = false}
        onkeydown={(e) => e.key === 'Enter' && (modalOpen = false)}>
      </div>
    </div>
  {/if}
</Showcase>

<!-- Mockup -->
<Showcase
  title="Mockup（モックアップ）"
  code={`<!-- ブラウザ -->
<div class="mockup-browser border border-base-300 w-full">
  <div class="mockup-browser-toolbar">
    <div class="input">https://example.com</div>
  </div>
  <div class="flex justify-center px-4 py-8 border-t border-base-300 bg-base-200">
    ページのコンテンツ
  </div>
</div>

<!-- コード -->
<div class="mockup-code">
  <pre data-prefix="$"><code>npm install daisyui</code></pre>
  <pre data-prefix=">" class="text-success"><code>インストール完了！</code></pre>
</div>

<!-- スマートフォン -->
<div class="mockup-phone">
  <div class="camera"></div>
  <div class="display">
    <div class="artboard artboard-demo phone-1 p-4">
      <p class="text-center">スマホ画面</p>
    </div>
  </div>
</div>`}
>
  <div class="flex flex-col gap-4 w-full">
    <div class="mockup-browser border border-base-300 w-full">
      <div class="mockup-browser-toolbar">
        <div class="input">https://example.com</div>
      </div>
      <div class="flex justify-center px-4 py-6 border-t border-base-300 bg-base-200 text-sm">
        ページのコンテンツがここに表示されます
      </div>
    </div>
    <div class="mockup-code">
      <pre data-prefix="$"><code>npm install daisyui</code></pre>
      <pre data-prefix=">" class="text-warning"><code>added 1 package in 622ms</code></pre>
      <pre data-prefix=">" class="text-success"><code>インストール完了！</code></pre>
    </div>
  </div>
</Showcase>

<!-- テーマ -->
<Showcase
  title="Theme Controller（テーマ切り替え）"
  code={`<!-- ページ全体のテーマを切り替える -->
<div class="flex flex-wrap gap-2">
  <input type="radio" name="theme-buttons" class="btn theme-controller" aria-label="Default" value="default" />
  <input type="radio" name="theme-buttons" class="btn theme-controller" aria-label="Light" value="light" />
  <input type="radio" name="theme-buttons" class="btn theme-controller" aria-label="Dark" value="dark" />
  <input type="radio" name="theme-buttons" class="btn theme-controller" aria-label="Cupcake" value="cupcake" />
  <input type="radio" name="theme-buttons" class="btn theme-controller" aria-label="Cyberpunk" value="cyberpunk" />
</div>

<!-- スワップ（ライト/ダーク） -->
<label class="swap swap-rotate btn btn-ghost btn-circle">
  <input type="checkbox" class="theme-controller" value="dark" />
  <svg class="swap-off w-5 h-5 fill-current" viewBox="0 0 24 24">...</svg>
  <svg class="swap-on w-5 h-5 fill-current" viewBox="0 0 24 24">...</svg>
</label>`}
>
  <div class="flex flex-col gap-3 w-full">
    <p class="text-xs text-gray-400">テーマを選択するとページ全体に反映されます</p>
    <div class="flex flex-wrap gap-2">
      <input type="radio" name="theme-btns" class="btn btn-sm theme-controller" aria-label="Default" value="default" />
      <input type="radio" name="theme-btns" class="btn btn-sm theme-controller" aria-label="Light" value="light" />
      <input type="radio" name="theme-btns" class="btn btn-sm theme-controller" aria-label="Dark" value="dark" />
      <input type="radio" name="theme-btns" class="btn btn-sm theme-controller" aria-label="Cupcake" value="cupcake" />
      <input type="radio" name="theme-btns" class="btn btn-sm theme-controller" aria-label="Cyberpunk" value="cyberpunk" />
      <input type="radio" name="theme-btns" class="btn btn-sm theme-controller" aria-label="Retro" value="retro" />
    </div>
  </div>
</Showcase>
