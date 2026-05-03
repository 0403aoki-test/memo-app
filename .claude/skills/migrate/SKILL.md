# Migrate Skill

ユーザーが `/migrate` を実行したとき、Alembic を使って DB マイグレーションを管理する。

## 引数

- `/migrate` — 現在のリビジョン（適用状態）を確認する
- `/migrate generate "メッセージ"` — モデルの差分からマイグレーションファイルを自動生成する
- `/migrate up` — 未適用のマイグレーションをすべて適用する（`upgrade head`）
- `/migrate down` — 直前のマイグレーションを1つ戻す（`downgrade -1`）
- `/migrate history` — マイグレーション履歴を一覧表示する

## 前提

- 作業ディレクトリ: `backend/`（常にここで実行）
- Python 仮想環境: `backend/.venv/bin/alembic` を使う（グローバルの alembic は使わない）
- `.env` に `DATABASE_URL` が設定されていること

## 手順

### `/migrate`（状態確認）

```bash
cd backend
.venv/bin/alembic current
```

現在のリビジョンを表示する。何も表示されない場合はまだ1件も適用されていない状態。

---

### `/migrate generate "メッセージ"`

```bash
cd backend
.venv/bin/alembic revision --autogenerate -m "メッセージ"
```

- `models.py` の現在の定義と DB の状態を比較して差分を自動検出する
- 生成されたファイルのパスを表示する
- 生成後、ファイルの内容をユーザーに見せて確認を促す

---

### `/migrate up`

```bash
cd backend
.venv/bin/alembic upgrade head
```

未適用のマイグレーションをすべて適用する。完了後に `alembic current` で結果を確認する。

---

### `/migrate down`

**破壊的操作のため、実行前にユーザーに確認を取ること。**

```bash
cd backend
.venv/bin/alembic downgrade -1
```

直前の1件をロールバックする。完了後に `alembic current` で結果を確認する。

---

### `/migrate history`

```bash
cd backend
.venv/bin/alembic history --verbose
```

適用済み（`[X]`）と未適用（`[ ]`）の一覧を表示する。

---

## 関連ファイル

| ファイル | 役割 |
|---|---|
| `backend/alembic.ini` | Alembic の設定ファイル |
| `backend/alembic/env.py` | 接続・メタデータ設定 |
| `backend/alembic/versions/` | 生成されたマイグレーションファイル |
| `backend/models.py` | SQLAlchemy モデル（autogenerate の参照元） |
