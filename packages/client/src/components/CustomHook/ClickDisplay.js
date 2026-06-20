import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const ClickDisplay = ({ isClicked, click }) => {
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: click, children: "Click" }), isClicked ? (_jsx("span", { children: "\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u307E\u3057\u305F" })) : (_jsx("span", { children: "\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u305B\u3093" }))] }));
};
