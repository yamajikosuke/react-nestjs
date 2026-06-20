import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useStore, useTextStore, useCheckBoxStore } from "../store/useStore";
const IncrementButton = () => {
    const increment = useStore((state) => state.increaseCount);
    return (_jsx("div", { children: _jsx("button", { onClick: increment, children: "+1" }) }));
};
const InputText = () => {
    const text = useTextStore((state) => state.text);
    const setText = useTextStore((state) => state.setText);
    return (_jsxs("div", { children: [_jsx("input", { type: "text", value: text, onChange: (e) => setText(e.target.value) }), _jsxs("p", { children: ["\u5165\u529B\u3057\u305F\u30C6\u30AD\u30B9\u30C8: ", text] })] }));
};
const CheckBox = () => {
    const isChecked = useCheckBoxStore((state) => state.isChecked);
    const setChecked = useCheckBoxStore((state) => state.setChecked);
    return (_jsx("div", { children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", checked: isChecked, onChange: (e) => setChecked(e.target.checked) }), "\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9"] }) }));
};
export const Zustand = () => {
    const { increaseCount, decreaseCount, resetCount } = useStore();
    const count = useStore((state) => state.count);
    return (_jsxs("section", { className: "section", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "Zustand"] }), _jsx("p", { className: "subtitle", children: "Zustand is a simple and fast state management solution for React." }), _jsx("hr", {}), _jsxs("div", { className: "container", children: [_jsx("h2", { className: "subtitle", children: "Counter Example (with custom hook)" }), _jsxs("p", { children: ["Count: ", count] }), _jsx(IncrementButton, {})] }), _jsx("hr", {}), _jsxs("div", { className: "container", children: [_jsx("h2", { className: "subtitle", children: "Counter Example" }), _jsxs("p", { children: ["Count: ", count] }), _jsx("button", { onClick: increaseCount, children: "Increase" }), _jsx("button", { onClick: decreaseCount, children: "Decrease" }), _jsx("button", { onClick: resetCount, children: "Reset" })] }), _jsx("hr", {}), _jsx("div", { className: "container", children: _jsx(InputText, {}) }), _jsx("hr", {}), _jsx("div", { className: "container", children: _jsx(CheckBox, {}) }), _jsx("hr", {}), _jsx("h2", { className: "subtitle", children: "\u53C2\u8003\u30EA\u30F3\u30AF" }), _jsxs("div", { className: "container", children: [_jsx("div", { children: _jsx("a", { href: "https://github.com/pmndrs/zustand", target: "_blank", rel: "noopener noreferrer", children: "Learn more about Zustand\uFF08\u516C\u5F0F\uFF09" }) }), _jsx("div", { children: _jsx("a", { href: "https://zustand.docs.pmnd.rs/learn/getting-started/introduction", target: "_blank", rel: "noopener noreferrer", children: "Tutorial\uFF08\u516C\u5F0F\uFF09" }) }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "https://zenn.dev/b13o/articles/tutorial-zustand", target: "_blank", rel: "noopener noreferrer", children: "\u72B6\u614B\u7BA1\u7406\u30E9\u30A4\u30D6\u30E9\u30EA Zustand \u306E\u7D39\u4ECB\u3068\u5C0E\u5165\u3010React\u3011" }) }), _jsx("li", { children: _jsx("a", { href: "https://qiita.com/3062_in_zamud/items/33baeb133461cfdde8be", target: "_blank", rel: "noopener noreferrer", children: "zustand\u3092\u4F7F\u3063\u3066\u307F\u305F\u3044" }) }), _jsx("li", { children: _jsx("a", { href: "https://zenn.dev/stmn_inc/articles/f1101cfa20dedc", target: "_blank", rel: "noopener noreferrer", children: "\u8EFD\u91CF\u306A\u30B0\u30ED\u30FC\u30D0\u30EB\u72B6\u614B\u7BA1\u7406\u30E9\u30A4\u30D6\u30E9\u30EA\u300Czustand\u300D" }) }), " ", _jsx("li", { children: _jsx("a", { href: "https://envader.plus/article/524", target: "_blank", rel: "noopener noreferrer", children: "\u3010\u521D\u5FC3\u8005\u5411\u3051\u3011Zustand\u3067React\u306E\u72B6\u614B\u7BA1\u7406\u3092\u7C21\u5358\u306B\uFF01\u4F7F\u3044\u65B9\u3092\u5FB9\u5E95\u89E3\u8AAC\uFF01" }) })] })] })] }));
};
