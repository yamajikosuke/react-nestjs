import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useClick } from "./useClick";
import { ClickDisplay } from "./ClickDisplay";
export const CounterDisplay = ({ count, decrement, increment }) => {
    const { isClicked, click } = useClick();
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("button", { onClick: decrement, children: "-" }), _jsx("span", { children: count }), _jsx("button", { onClick: increment, children: "+" })] }), _jsxs("div", { children: [_jsx("label", { className: "label", children: "Click" }), _jsx("div", { className: "control", children: _jsx(ClickDisplay, { click: click, isClicked: isClicked }) })] })] }));
};
