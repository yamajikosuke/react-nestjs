import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
const style = {
    height: "50px",
    backgroundColor: "lightgray",
};
export const Child3 = memo(() => {
    console.log("Child3 レンダリング");
    return (_jsx("div", { children: _jsx("p", { style: style, children: "Child3" }) }));
});
