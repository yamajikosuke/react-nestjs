import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useContext } from "react";
import { useCounter } from "./useCounter";
import { CounterContext } from "./context";
export const Member = React.memo((member) => {
    const { count, countUp } = useCounter();
    const context = useContext(CounterContext);
    const { idx, name, profession } = member;
    const handleClick = () => {
        const countArray = context.count.concat();
        countArray[idx] = context.count[idx] + 1;
        context.setCount(countArray);
    };
    console.log("render Member");
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [name, ": ", profession] }), _jsx("div", { children: _jsx("button", { className: "button", onClick: handleClick, children: "button(context)" }) }), _jsx("div", { children: context.count[idx] })] }));
});
