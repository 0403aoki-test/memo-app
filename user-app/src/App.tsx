// React から、状態管理と副作用用のフックを読み込む
import { useEffect, useState } from "react";

/**
 * API から取得するユーザーのデータ型
 */
type User = {
  id: number;
  name: string;
  email: string;
};

/**
 * 画面の状態のデータ型
 *
 * status によって、取り得る状態を3つに限定
 * - loading : データ取得中
 * - success : データ取得成功（data を持つ）
 * - error   : エラー発生（error メッセージを持つ）
 *
 * この書き方により、不正な状態を防げる
 */
type State =
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: string };

export default function App() {
  /**
   * 画面の状態を管理する state
   * 初期状態は「読み込み中」
   */
  const [state, setState] = useState<State>({ status: "loading" });

  /**
   * useEffect は「画面が表示された後」に実行される
   * 第2引数が [] のため、初回表示時に1回だけ実行される
   */
  useEffect(() => {
    /**
     * ユーザー一覧を取得する非同期関数
     * API 通信は時間がかかるため async / await を使う
     */
    const fetchUsers = async () => {
      try {
        // データ取得開始時に loading 状態にする
        setState({ status: "loading" });

        // 外部API にリクエストを送る
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        // HTTP ステータスがエラーの場合は例外を投げる
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        // レスポンスを JSON として読み込む
        const data: User[] = await res.json();

        // データ取得成功時は　success 状態にして data を保存
        setState({ status: "success", data });
      } catch (e) {
        // エラーの場合
        const message = e instanceof Error ? e.message : "Unknown error";

        // error 状態にして、エラーメッセージを保存
        setState({ status: "error", error: message });
      }
    };

    // 実際にユーザー取得処理を実行
    fetchUsers();
  }, []);

  /**
   * ここから下は画面に表示される UI
   * state.status によって表示内容を切り替えている
   */
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "40px auto",
        padding: 24,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <h1>ユーザー一覧</h1>

      {/* 読み込み中の場合に表示 */}
      {state.status === "loading" && <p>Loading...</p>}

      {/* エラーの場合に表示 */}
      {state.status === "error" && (
        <p style={{ color: "crimson" }}>
          Error: {state.error}
        </p>
      )}

      {/* データ取得成功時にユーザー一覧を表示 */}
      {state.status === "success" && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {state.data.map((u) => (
            <li
              key={u.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "12px 16px",
                marginBottom: 12,
                backgroundColor: "#fafafa",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{u.name}</div>
              <div style={{ color: "#555" }}>{u.email}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
