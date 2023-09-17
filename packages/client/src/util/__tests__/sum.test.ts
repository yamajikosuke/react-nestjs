import { sum } from "../sum";

//https://www.webopixel.net/javascript/1777.html
test("合計値が正しい", () => {
  expect(sum(2, 3)).toBe(5);
});
