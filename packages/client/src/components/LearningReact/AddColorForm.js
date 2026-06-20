import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useRef } from "react";
import { useInput } from "./useInput";
import { useColors } from "./useColor";
import { ColorContext } from "./colorContext";
export const AddColorForm = () => {
    const inputEl = useRef(null);
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const { addColor } = useColors();
    const { setFormProps } = useContext(ColorContext);
    useEffect(() => {
        inputEl.current?.focus();
        setFormProps({ id: 1, name: "sample form" });
    }, [setFormProps]);
    const submit = (event) => {
        event.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };
    return (_jsxs("form", { onSubmit: (e) => submit(e), children: [_jsx("input", { ...titleProps, ref: inputEl, type: "text", placeholder: "color title...", required: true }), _jsx("input", { ...colorProps, type: "color", required: true }), _jsx("button", { children: "ADD" })] }));
};
