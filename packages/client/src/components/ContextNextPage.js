import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext, } from "../context/sampleContext";
export const ContextNextPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // formの変数を定義
    const [type, setType] = useState({ type: "normal" });
    const [centerType, setCenterType] = useState(undefined);
    const [formMode, setFormMode] = useState("view");
    const formContext = {
        type,
        centerType,
        formMode,
        setType,
        setCenterType,
        setFormMode,
    };
    useEffect(() => {
        if (!location.state) {
            navigate.push("context");
        }
    }, [navigate, location.state]);
    return (_jsx(FormContext.Provider, { value: formContext, children: _jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useContext" }), _jsxs("div", { className: "field", children: [_jsx("label", { className: "label", children: "Form type" }), _jsx("div", { children: location.state && location.state.formType.type })] }), _jsxs("div", { className: "field", children: [_jsx("label", { className: "label", children: "center type" }), _jsx("div", { children: location.state && location.state.centerType })] })] }) }) }));
};
