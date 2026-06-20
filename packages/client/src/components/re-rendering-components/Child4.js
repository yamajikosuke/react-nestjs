import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
const style = {
    height: "200px",
    backgroundColor: "wheat",
    padding: "8px",
};
export const Child4 = memo(() => {
    console.log("Child4 レンダリング");
    return (_jsx("div", { children: _jsx("p", { style: style, children: "Child4" }) }));
});
