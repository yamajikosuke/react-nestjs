import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Replace = () => {
    const baseMessage = "サンプルテキスト{hoge}{fuga}";
    const replace = (obj) => {
        let OldMessage = baseMessage;
        let NewMessage;
        Object.keys(obj).forEach((key) => {
            NewMessage = OldMessage.replace("{" + key + "}", obj[key]);
            OldMessage = NewMessage;
        });
        console.log(NewMessage);
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Replace" }), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: () => replace({ hoge: "あああ", fuga: "３３３" }), children: "replace" }) }), _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", children: "\u6607\u9806" }) })] })] }) }));
};
