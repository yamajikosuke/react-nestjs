import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";
const style = {
    height: "200px",
    backgroundColor: "lightblue",
    padding: "8px",
};
export const Child1 = memo((props) => {
    console.log("Child1 レンダリング");
    const { onClickReset } = props;
    return (_jsxs("div", { style: style, children: [_jsx("p", { children: "Child1" }), _jsx("button", { onClick: onClickReset, children: "\u30EA\u30BB\u30C3\u30C8" }), _jsx(Child2, {}), _jsx(Child3, {})] }));
});
