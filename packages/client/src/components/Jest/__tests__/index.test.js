import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { JestIndex } from "../";
import "@testing-library/jest-dom";
//https://www.webopixel.net/javascript/1777.html
//https://testing-library.com/docs/react-testing-library/example-intro
test("ボタン文言確認テスト", async () => {
    render(_jsx(JestIndex, {}));
    expect(screen.getByText("ボタン")).toBeTruthy();
});
