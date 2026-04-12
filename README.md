# ts-practice

TypeScript・Svelte・FastAPI の学習用リポジトリです。

## 構成

| ディレクトリ | 技術スタック | 説明 |
|---|---|---|
| `frontend/` | Svelte + Vite + Tailwind CSS | フロントエンド |
| `backend/` | FastAPI (Python) | バックエンド API |

---

## 前提条件

- Node.js (npm)
- Python 3.x

---

## セットアップ & 起動

### フロントエンド

```bash
cd frontend
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開く。

### バックエンド

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

API は http://localhost:8000 で起動する。

---

## 主なコマンド

### フロントエンド

| コマンド | 説明 |
|---|---|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run check` | 型チェック |

### バックエンド

| コマンド | 説明 |
|---|---|
| `uvicorn main:app --reload` | 開発サーバー起動（ホットリロード有効） |
