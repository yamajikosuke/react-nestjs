import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export const RegisterDataFromCLI = () => {
    const [, setLanguage] = useState();
    useEffect(() => {
        setLanguage(browserLanguage());
    }, []);
    const browserLanguage = () => {
        const userlanguage = navigator.language.substr(0, 2);
        return userlanguage === "zh" ? navigator.language : userlanguage;
    };
    return (_jsxs("section", { className: "section", children: [_jsx("div", { className: "container", children: _jsx("h1", { className: "title", children: "Register Data From CLI" }) }), _jsx("hr", {}), _jsx("div", { children: "CLI\u304B\u3089DB\u306B\u30C7\u30FC\u30BF\u6295\u5165" })] }));
};
