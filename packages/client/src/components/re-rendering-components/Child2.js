import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
const style = {
    height: "50px",
    backgroundColor: "lightgray",
};
export const Child2 = memo(() => {
    console.log("Child2 レンダリング");
    return (_jsx("div", { children: _jsx("p", { style: style, children: "Child2" }) }));
});
