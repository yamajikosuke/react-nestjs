import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CounterDisplay } from "./CounterDisplay";
import { ClickDisplay } from "./ClickDisplay";
import { useCounter } from "./useCounter";
import { useClick } from "./useClick";
export const CustomHook1 = () => {
    const { count, decrement, increment } = useCounter();
    const { isClicked, click } = useClick();
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Custom Hook" }), _jsxs("div", { className: "field", children: [_jsx("label", { className: "label", children: "Click" }), _jsx("div", { className: "control", children: _jsx(ClickDisplay, { click: click, isClicked: isClicked }) })] }), _jsx("hr", {}), _jsxs("div", { className: "field", children: [_jsx("div", { children: "https://qiita.com/FumioNonaka/items/62285e474608388cbbe3" }), _jsx("label", { className: "label", children: "Counter" }), _jsx("div", { className: "control", children: _jsx(CounterDisplay, { count: count, decrement: decrement, increment: increment }) })] })] }) }));
};
