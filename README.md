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

### バックエンド

```bash
cd backend
```

**初回のみ**
```bash
# requirements.txt の依存パッケージ（FastAPI, uvicornなど）をインストール
pip3 install -r requirements.txt
```

**毎回**
```bash
# uvicorn で FastAPI サーバーを起動（--reload: ファイル変更時に自動再起動）
python3 -m uvicorn main:app --reload
```

API は http://localhost:8000 で起動する。

### フロントエンド

```bash
cd frontend
```

**初回のみ**
```bash
# package.json の依存パッケージ（Svelte, Vite, Tailwindなど）をインストール
npm install
```

**毎回**
```bash
# Vite 開発サーバーを起動（ファイル保存時に自動リロード）
npm run dev
```

ブラウザで http://localhost:5173 を開く。

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
| `pip3 install -r requirements.txt` | 依存パッケージのインストール |
| `python3 -m uvicorn main:app --reload` | 開発サーバー起動（ホットリロード有効） |
