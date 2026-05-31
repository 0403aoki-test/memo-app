# memo-app

FastAPI + Jinja2 で作ったシンプルなメモアプリ。

## 技術スタック

| 要素 | 技術 |
|---|---|
| バックエンド | FastAPI (Python) |
| フロント | Jinja2テンプレート |
| DB (ローカル) | PostgreSQL on Docker |
| DB (本番) | Supabase |
| デプロイ先 | Cloud Run (GCP) |
| CI/CD | GitHub Actions |

## 前提条件

- Docker / Docker Compose

## 起動方法

### 1. 環境変数の設定

```bash
cp backend/.env.example backend/.env
```

`.env` の `DATABASE_URL` はDocker Compose使用時はそのままでOK。

### 2. 起動

```bash
docker compose up
```

ブラウザで http://localhost:8000 を開く。

### 停止

```bash
docker compose down
```

DBのデータも消す場合:

```bash
docker compose down -v
```

## ローカル開発（Docker不使用）

```bash
cd backend
pip install -r requirements.txt
DATABASE_URL=postgresql://... uvicorn main:app --reload
```
