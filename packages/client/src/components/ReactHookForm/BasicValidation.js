import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
export const ReactHookFormBasicValidation = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };
    // console.log(errors);
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: ["React-Hook-Form ", ">", " basic validation"] }), _jsx("div", { className: "field", children: _jsx("div", { children: "https://github.com/react-hook-form/react-hook-form/blob/master/examples/V6/basicValidation.tsx" }) }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { children: [_jsx("label", { children: "First name" }), _jsx("input", { type: "text", name: "First name" })] }), _jsxs("div", { children: [_jsx("label", { children: "Last name" }), _jsx("input", { type: "text", name: "Last name" })] }), _jsxs("div", { children: [_jsx("label", { children: "Email" }), _jsx("input", { type: "text", name: "Email" })] }), _jsxs("div", { children: [_jsx("label", { children: "Mobile number" }), _jsx("input", { type: "tel", name: "Mobile number" })] }), _jsxs("div", { children: [_jsx("label", { children: "Title" }), _jsxs("select", { name: "Title", children: [_jsx("option", { value: "Mr", children: "Mr" }), _jsx("option", { value: "Mrs", children: "Mrs" }), _jsx("option", { value: "Miss", children: "Miss" }), _jsx("option", { value: "Dr", children: "Dr" })] })] }), _jsxs("div", { children: [_jsx("label", { children: "Are you a developer?" }), _jsx("input", { type: "radio", value: "Yes" }), _jsx("input", { type: "radio", value: "No" })] }), _jsx("div", { children: _jsx("input", { type: "text", name: "asdasd" }) }), _jsx("input", { type: "submit" })] }), " "] }) }));
};
