// 1. <T> の基本
console.log("=== 1.<T> の基本 ===");
function identity<T>(value: T): T {
  return value;
}

const a = identity<number>(123); // T = number
const b = identity("hello"); // T = string（推論される）
console.log(a); // 123
console.log(b); // "hello"
/**
・ <T> は「型の箱」
・identity<number>(123) のように 型を注入できる
・identity("hello") のように 型推論も効く
・関数の引数・戻り値・内部で T が使える
 */

// 2.複数の型パラメータの本質
console.log("=== 2.複数の型パラメータの本質 ===");
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

const p1 = pair("id", 123);
// ["id", 123] → [string, number]

const p2 = pair(true, { name: "Taro" });
// [boolean, { name: string }]
console.log(p1); // ["id", 123]
console.log(p2); // [true, { name: "Taro" }]
/**
✔ ポイント
・A と B は完全に独立した型
・呼び出し側が自由に型を決められる
・型推論も効くので <A, B> を書かなくてもよい
 * 
 */

const getObj = <A, B>(a: A, b: B): { a: A; b: B } => {
  return { a, b };
};

const obj1 = getObj("id", 123);
// { a: "id", b: 123 } → { a: string, b: number }

const obj2 = getObj(true, { name: "Taro" });
// { a: true, b: { name: "Taro" } } → { a: boolean, b: { name: string } }
console.log(obj1); // { a: "id", b: 123 }
console.log(obj2); // { a: true, b: { name: "Taro" } }

// 3.複数ジェネリクスの基本例
console.log("=== 3.複数ジェネリクスの基本例 ===");
function merge<A, B>(a: A, b: B): A & B {
  return { ...a, ...b };
}

const user = merge({ id: 1 }, { name: "Taro" });
// { id: number } & { name: string }
console.log(user); // { id: 1, name: "Taro" }
/**
・A & B は「両方の型を満たす」という意味( Intersection 型（A & B） を返す)
・merge({ id: 1 }, { name: "Taro" }) の戻り値は { id: number } & { name: string }
・つまり { id: number, name: string } と同じ
 */

// 4.制約（extends）を組み合わせる
console.log("=== 4.制約（extends）を組み合わせる ===");
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user2 = { id: 1, name: "Taro" };

console.log(getProp(user2, "id")); // OK
console.log(getProp(user2, "name")); // OK
//console.log(getProp(user2, "age")) ; // ❌ age は存在しない
/**
・K extends keyof T で「K は T のキーの一つ」という制約をつける
・getProp(user2, "age") はエラーになる（age は user2 のキーではないため）
 */
// ここが重要
// T は「オブジェクト全体」
// K は「T のキーのどれか」
// K extends keyof T が 型安全なキーアクセスを保証する

// 5.複数ジェネリクス × 配列
console.log("=== 5.複数ジェネリクス × 配列 ===");

function zip<A, B>(a: A[], b: B[]): [A, B][] {
  const len = Math.min(a.length, b.length);
  const result: [A, B][] = [];

  for (let i = 0; i < len; i++) {
    result.push([a[i], b[i]]);
  }

  return result;
}

const r = zip([1, 2], ["a", "b"]);
// [ [1, "a"], [2, "b"] ]
console.log(r); // [ [1, "a"], [2, "b"] ]
/**
・zip([1, 2], ["a", "b"]) の戻り値は [ [number, string], [number, string] ]
・つまり [ [1, "a"], [2, "b"] ] と同じ
 */
// ✔ 実務で使う場面
// 2つの配列を組み合わせる
// ペアデータを作る
// マッピング処理

// 5.複数ジェネリクス × クラス（実務で超使う
console.log("=== 5.複数ジェネリクス × クラス（実務で超使う ===");

class KeyValueStore<K, V> {
  private store = new Map<K, V>();

  set(key: K, value: V) {
    this.store.set(key, value);
  }

  get(key: K): V | undefined {
    return this.store.get(key);
  }
}

const s = new KeyValueStore<string, number>();
s.set("age", 20);
s.get("age"); // number
console.log(s.get("age")); // 20
/**
・KeyValueStore<string, number> は「キーが string、値が number のストア」という意味
・s.get("age") の戻り値は number | undefined
・実務で超使う！キーと値の型を自由に決められるストアクラス
*/

// 6. 複数ジェネリクス × API クライアント（実務レベル）
console.log("=== 6. 複数ジェネリクス × API クライアント（実務レベル） ===");

// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }
// class ApiClient {
//   async fetch<T>(url: string): Promise<ApiResponse<T>> {
//     const response = await fetch(url);
//     const data = await response.json();
//     return { data, status: response.status };
//   }
// }

// const api = new ApiClient();

class ApiClient<Req, Res> {
  constructor(private url: string) {}

  async send(body: Req): Promise<Res> {
    const res = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return res.json() as Promise<Res>;
  }

  async get(): Promise<Res> {
    const res = await fetch(this.url, {
      method: "GET",
    });

    return res.json() as Promise<Res>;
  }

  async getWithQuery(query: Record<string, string | number>): Promise<Res> {
    const params = new URLSearchParams(
      Object.entries(query).map(([k, v]) => [k, String(v)]),
    );

    const url = `${this.url}?${params.toString()}`;

    const res = await fetch(url, { method: "GET" });

    return res.json() as Promise<Res>;
  }
}

type CreateUserReq = { name: string };
type CreateUserRes = { id: number; name: string };

const client = new ApiClient<CreateUserReq, CreateUserRes>(
  "http://localhost:3000/api/user",
);

client.send({ name: "Taro" }).then((res) => {
  console.log(res.id);
  console.log(res.name);
});

/** GETリクエストの例 */
type GetUserRes = { id: number; name: string };
const getClient = new ApiClient<void, GetUserRes>(
  "http://localhost:3000/api/user/1",
);

getClient.get().then((res) => {
  console.log(res.id);
  console.log(res.name);
});

/** GET + クエリパラメータに対応したバージョン（実務でよく使う）の例 */
client.getWithQuery({ page: 1, limit: 20 }).then(console.log);

/**
・ApiClient<Req, Res> は「リクエストが Req、レスポンスが Res の API クライアント」という意味
・client.send({ name: "Taro" }) の戻り値は Promise<CreateUserRes>
・実務レベルの API クライアントクラス。リクエストとレスポンスの型を自由に決められる
 */
