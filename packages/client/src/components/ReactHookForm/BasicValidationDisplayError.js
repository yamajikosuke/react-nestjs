import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const ReactHookFormBasicValidationDisplayError = () => {
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    // console.log(errors);
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: ["React-Hook-Form ", ">", " basic validation display error"] }), _jsx("div", { className: "field", children: _jsx("div", { children: "https://github.com/react-hook-form/react-hook-form/blob/master/examples/V6/basicValidation.tsx" }) }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { children: [_jsx("label", { children: "item-1" }), _jsx("input", { type: "text", name: "item1", onChange: (e) => {
                                        setValue({ item1: Number(e.target.value) });
                                    } })] }), _jsxs("div", { children: [_jsx("label", { children: "item-2" }), _jsx("input", { type: "text", name: "item2", onChange: (e) => {
                                        setValue({ item2: Number(e.target.value) });
                                    } })] }), _jsx("input", { type: "submit" })] })] }) }));
};
