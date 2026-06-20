import { sample } from "./sample";
// https://typescript-jp.gitbook.io/deep-dive/intro-1/jest#li
// test("basic", () => {
//   expect(sample(0, 1)).toBe(1);
// });
// test("basic again", () => {
//   expect(sample(1, 2)).toBe(3);
// });
// https://typescript-jp.gitbook.io/deep-dive/intro-1/jest#li
test("basic", async () => {
    expect(sample(0, 1)).toBe(1);
});
test("basic again", async () => {
    expect(sample(1, 2)).toBe(3);
}, 1000);
