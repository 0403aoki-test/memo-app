import { useState } from "react";
import type { ReactElement } from "react";

// =============================================
// 共通データ: 文法トピック
// =============================================

type Topic = {
  id: string;
  label: string;
  explanation: string;
  code: string;
  demo: () => ReactElement;
};

// ---- デモコンポーネント群 ----

function DemoTypeAnnotation() {
  const [isNumber, setIsNumber] = useState(false);
  const value: string | number = isNumber ? 42 : "Hello, TypeScript!";
  return (
    <div style={demoBox}>
      <p style={demoText}>変数の型: <b style={{ color: "#00d4ff" }}>{typeof value}</b></p>
      <p style={demoText}>値: <b style={{ color: "#ffd700" }}>{String(value)}</b></p>
      <div style={btnRow}>
        <button style={btn("#10b981", !isNumber)} onClick={() => setIsNumber(false)}>string にする</button>
        <button style={btn("#6366f1", isNumber)} onClick={() => setIsNumber(true)}>number にする</button>
      </div>
    </div>
  );
}

function DemoUnion() {
  type Status = "loading" | "success" | "error";
  const [status, setStatus] = useState<Status>("loading");
  const colors: Record<Status, string> = { loading: "#f59e0b", success: "#10b981", error: "#ef4444" };
  const messages: Record<Status, string> = {
    loading: "読み込み中...",
    success: "データ取得成功！",
    error: "エラーが発生しました",
  };
  return (
    <div style={demoBox}>
      <p style={demoText}>現在のステータス: <b style={{ color: colors[status] }}>{status}</b></p>
      <p style={demoText}>{messages[status]}</p>
      <div style={btnRow}>
        {(["loading", "success", "error"] as Status[]).map((s) => (
          <button key={s} style={btn(colors[s], status === s)} onClick={() => setStatus(s)}>{s}</button>
        ))}
      </div>
    </div>
  );
}

function DemoGenerics() {
  const [useNumbers, setUseNumbers] = useState(false);

  function getFirst<T>(arr: T[]): T {
    return arr[0];
  }

  const strResult = getFirst(["Apple", "Banana", "Cherry"]);
  const numResult = getFirst([100, 200, 300]);

  return (
    <div style={demoBox}>
      <p style={demoText}>
        getFirst{useNumbers ? "<number>" : "<string>"}({useNumbers ? "[100, 200, 300]" : '["Apple", "Banana", "Cherry"]'})
      </p>
      <p style={demoText}>戻り値: <b style={{ color: "#ffd700" }}>{useNumbers ? numResult : strResult}</b></p>
      <p style={demoText}>型: <b style={{ color: "#00d4ff" }}>{useNumbers ? "number" : "string"}</b></p>
      <div style={btnRow}>
        <button style={btn("#10b981", !useNumbers)} onClick={() => setUseNumbers(false)}>string[]</button>
        <button style={btn("#6366f1", useNumbers)} onClick={() => setUseNumbers(true)}>number[]</button>
      </div>
    </div>
  );
}

function DemoInterface() {
  interface Animal {
    name: string;
    sound: string;
    legs: number;
  }

  const animals: Animal[] = [
    { name: "犬", sound: "ワンワン", legs: 4 },
    { name: "鳥", sound: "チュンチュン", legs: 2 },
    { name: "猫", sound: "ニャー", legs: 4 },
  ];

  const [index, setIndex] = useState(0);
  const animal = animals[index];

  return (
    <div style={demoBox}>
      <p style={demoText}>name: <b style={{ color: "#ffd700" }}>{animal.name}</b></p>
      <p style={demoText}>sound: <b style={{ color: "#ffd700" }}>{animal.sound}</b></p>
      <p style={demoText}>legs: <b style={{ color: "#ffd700" }}>{animal.legs}</b></p>
      <div style={btnRow}>
        {animals.map((a, i) => (
          <button key={i} style={btn("#6366f1", index === i)} onClick={() => setIndex(i)}>{a.name}</button>
        ))}
      </div>
    </div>
  );
}

function DemoAsync() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    setResult(null);
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    setResult(data.name);
    setLoading(false);
  };

  return (
    <div style={demoBox}>
      <p style={demoText}>
        {loading
          ? "取得中..."
          : result
          ? <>取得したユーザー: <b style={{ color: "#ffd700" }}>{result}</b></>
          : "ボタンを押すと非同期でデータを取得します"}
      </p>
      <div style={btnRow}>
        <button style={btn("#10b981", false)} onClick={fetchUser} disabled={loading}>
          {loading ? "Loading..." : "fetchUser() を実行"}
        </button>
        {result && (
          <button style={btn("#ef4444", false)} onClick={() => setResult(null)}>リセット</button>
        )}
      </div>
    </div>
  );
}

// ---- トピック定義 ----

const TOPICS: Topic[] = [
  {
    id: "annotation",
    label: "型注釈",
    explanation: "変数や関数の引数・戻り値に型を明示します。",
    code: `const name: string = "Aoki";
const age: number = 25;

function greet(name: string): string {
  return \`Hello, \${name}\`;
}`,
    demo: () => <DemoTypeAnnotation />,
  },
  {
    id: "union",
    label: "Union型",
    explanation: "| を使って複数の型のいずれかを取れる型を定義します。",
    code: `type Status = "loading" | "success" | "error";

let status: Status = "loading";
status = "success"; // OK
status = "failed";  // ❌ エラー`,
    demo: () => <DemoUnion />,
  },
  {
    id: "generics",
    label: "ジェネリクス",
    explanation: "<T> を使って型を引数のように扱い、再利用性を高めます。",
    code: `function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst<string>(["A", "B"]); // "A"
getFirst<number>([1, 2, 3]);  // 1`,
    demo: () => <DemoGenerics />,
  },
  {
    id: "interface",
    label: "インターフェース",
    explanation: "オブジェクトの形（プロパティと型）を定義します。",
    code: `interface Animal {
  name: string;
  sound: string;
  legs: number;
}

const dog: Animal = {
  name: "犬",
  sound: "ワンワン",
  legs: 4,
};`,
    demo: () => <DemoInterface />,
  },
  {
    id: "async",
    label: "非同期",
    explanation: "async/await を使って非同期処理を同期的に書けます。",
    code: `async function fetchUser(): Promise<User> {
  const res = await fetch("/api/users/1");
  const data: User = await res.json();
  return data;
}`,
    demo: () => <DemoAsync />,
  },
];

// =============================================
// スタイルヘルパー
// =============================================

const demoBox: React.CSSProperties = {
  backgroundColor: "#111",
  border: "1px solid #00d4ff33",
  borderRadius: 10,
  padding: "20px 24px",
  marginTop: 12,
};

const demoText: React.CSSProperties = {
  color: "#ccc",
  margin: "6px 0",
  fontSize: 15,
};

const btnRow: React.CSSProperties = {
  display: "flex",
  gap: 10,
  marginTop: 16,
  flexWrap: "wrap",
};

function btn(color: string, active: boolean): React.CSSProperties {
  return {
    padding: "8px 18px",
    borderRadius: 8,
    border: `1px solid ${color}`,
    backgroundColor: active ? color : "transparent",
    color: active ? "#fff" : color,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 13,
    transition: "all 0.15s",
  };
}

const codeBlock: React.CSSProperties = {
  display: "block",
  backgroundColor: "#0a0a0a",
  border: "1px solid #333",
  borderRadius: 8,
  padding: "16px 20px",
  fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
  fontSize: 14,
  color: "#e2e8f0",
  whiteSpace: "pre",
  overflowX: "auto",
  lineHeight: 1.7,
  margin: 0,
};

// =============================================
// メインApp
// =============================================

export default function App() {
  const [activeId, setActiveId] = useState(TOPICS[0].id);
  const topic = TOPICS.find((t) => t.id === activeId)!;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f0f0f", fontFamily: "system-ui, sans-serif" }}>
      {/* タブバー */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        backgroundColor: "#0f0f0f",
        borderBottom: "1px solid #222",
        display: "flex",
        gap: 8,
        padding: "10px 40px",
      }}>
        {TOPICS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveId(t.id)}
            style={{
              padding: "8px 20px",
              borderRadius: 8,
              border: "none",
              backgroundColor: activeId === t.id ? "#00d4ff" : "#1a1a1a",
              color: activeId === t.id ? "#000" : "#aaa",
              cursor: "pointer",
              fontWeight: activeId === t.id ? 700 : 400,
              fontSize: 14,
              transition: "all 0.15s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <div style={{ padding: "80px 40px 60px", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ color: "#00d4ff", letterSpacing: 2, fontSize: 24, marginBottom: 8 }}>
          TypeScript 文法ガイド
        </h1>

        <h2 style={{ color: "#fff", fontSize: 20, marginBottom: 8, marginTop: 32 }}>
          {topic.label}
        </h2>
        <p style={{ color: "#aaa", marginBottom: 16, fontSize: 15 }}>{topic.explanation}</p>
        <pre style={codeBlock}>{topic.code}</pre>
        {topic.demo()}
      </div>
    </div>
  );
}
