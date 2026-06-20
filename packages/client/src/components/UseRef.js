import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
export const UseRef = () => {
    const number = useRef(100);
    console.log(number.current); // 100
    const inputEl = useRef(null);
    const changeValue = () => {
        console.log(number.current);
        number.current = 200;
    };
    const handleClick = () => {
        inputEl.current?.focus();
        console.log(inputEl.current?.value);
        console.log(inputEl.current?.id);
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useRef" }), _jsx("div", { children: _jsx("a", { href: "https://qiita.com/seira/items/0e6a2d835f1afb50544d", target: "_blank", rel: "noreferrer", children: "\u53C2\u8003\u30B5\u30A4\u30C8" }) }), _jsx("div", { children: number.current }), _jsx("div", { className: "field", children: _jsx("button", { className: "button is-link is-light", onClick: () => changeValue(), children: "\u5024\u3092\u5909\u66F4" }) }), _jsxs("div", { className: "field", children: [_jsx("input", { id: "test", ref: inputEl, type: "text" }), _jsx("button", { onClick: handleClick, children: "\u5165\u529B\u30A8\u30EA\u30A2\u3092\u30D5\u30A9\u30FC\u30AB\u30B9\u3059\u308B" })] })] }) }));
};
