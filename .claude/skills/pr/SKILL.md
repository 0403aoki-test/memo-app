# Pull Request Skill

ユーザーが `/pr` を実行したとき、以下の手順でプルリクエストを作成する。

## 引数

- `/pr` — コミット履歴からタイトル・本文を自動生成してPRを作成する
- `/pr "タイトル"` — 指定したタイトルでPRを作成する

## 手順

### 1. 現状確認

以下を並行して実行する:

```bash
git status
git branch --show-current
git log main..HEAD --oneline
git diff main...HEAD
```

### 2. 事前チェック

**ブランチチェック:**
- 現在のブランチが `main` または `master` の場合はPRを作れないため、ユーザーに作業ブランチへの切り替えを促して終了する

**未コミットの変更:**
- 未コミットの変更がある場合は、先に `/commit` でコミットするよう促す

**コミットの有無:**
- `main` との差分コミットが0件の場合は、変更がないためPRを作れないと伝えて終了する

### 3. リモートへのプッシュ

ブランチがリモートに存在しない場合は push する:

```bash
git push -u origin <ブランチ名>
```

すでにリモートに存在する場合は通常の push:

```bash
git push
```

### 4. PR タイトルと本文の作成

引数でタイトルが渡された場合はそれを使う。  
引数がない場合は `main` からのコミット履歴を元に自動生成する。

**本文の形式:**

```markdown
## 概要
<変更内容を箇条書きで1〜3点>

## テスト手順
<動作確認のチェックリスト>

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

### 5. PR 作成

```bash
gh pr create --title "<タイトル>" --body "$(cat <<'EOF'
<本文>
EOF
)"
```

### 6. 完了

作成されたPRのURLをユーザーに表示する。
