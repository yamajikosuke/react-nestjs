import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
export const RegExp1 = () => {
    const initVal = { value: "^\\d*$" };
    const { register, setError, handleSubmit } = useForm();
    const checkRegExp = (data) => {
        // Check regular expression
        const res = JSON.stringify(`{value:"${data}"}`)
            .replace('{\\"value":"', "")
            .replace('"}', "");
        try {
            new RegExp(res);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    const handleOnChange = (data) => {
        if (checkRegExp(data)) {
            setError("regExp", {});
        }
        else {
            setError("regExp", {
                type: "manual",
                message: "Syntax error in regular expression.",
            });
        }
    };
    const getJsonVal = () => {
        const rule = new RegExp(initVal.value);
        return String(rule).slice(1).slice(0, -1);
    };
    const onSubmit = () => {
        console.log("onSubmit");
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Regular Expression" }), _jsxs("div", { className: "field", children: [_jsx("div", { className: "control", children: _jsx("input", { type: "text", className: "input", name: "regExp", defaultValue: getJsonVal(), onChange: (e) => {
                                    handleOnChange(e.target.value);
                                } }) }), _jsx("div", { className: "control", children: _jsx("button", { onClick: handleSubmit(onSubmit), children: "Submit" }) }), _jsx("div", { className: "control" })] })] }) }));
};
