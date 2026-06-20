import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export const Translate = () => {
    const [, setLanguage] = useState();
    useEffect(() => {
        setLanguage(browserLanguage());
    }, []);
    const browserLanguage = () => {
        const userlanguage = navigator.language.substr(0, 2);
        return userlanguage === "zh" ? navigator.language : userlanguage;
    };
    return (_jsxs("section", { className: "section", children: [_jsx("div", { className: "container", children: _jsx("h1", { className: "title", children: "Translate" }) }), _jsx("hr", {}), _jsx("div", { children: "Google translate API key: AIzaSyBHAJAtw7e_lBCqQLzZn6WL67MCyD41s3w" })] }));
};
