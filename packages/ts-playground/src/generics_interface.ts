// 1. 最小のジェネリックインターフェース
interface Box<T> {
  value: T;
}
const a1: Box<number> = { value: 123 };
const b1: Box<string> = { value: "hello" };
console.log(a1); // { value: 123 }
console.log(b1); // { value: "hello" }

/*
ポイント
・<T> が型の変数
・Box<number> や Box<string> のように型を注入
・型推論も効く
*/
