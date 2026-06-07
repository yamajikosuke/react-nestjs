/**
 * 実行方法
 * npm start
 * または
 * npm run dev
 *
 */
export const message: string = "Hello TypeScript!";
console.log(message);

/**
 * 二つの数値を足し合わせる関数
 * @param a
 * @param b
 * @returns
 */
const func = (a: number, b: number): number => {
  return a + b;
};

console.log(func(1, 2));
