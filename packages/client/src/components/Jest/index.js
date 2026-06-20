import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const MyButton = ({ txt, handleClick }) => (_jsx(_Fragment, { children: _jsx("button", { onClick: handleClick, children: txt }) }));
export const JestIndex = () => {
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Jest" }), _jsxs("div", { className: "content", children: [_jsx("a", { href: "https://dev.classmethod.jp/articles/lets-start-unit-test-with-react-and-jest/", target: "_blank", rel: "noreferrer", children: "https://dev.classmethod.jp/articles/lets-start-unit-test-with-react-and-jest/" }), _jsx("hr", {}), _jsx(MyButton, { txt: "\u30DC\u30BF\u30F3", handleClick: () => {
                                window.alert("click");
                            } })] })] }) }));
};
