import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
export const ReactHookFormBasic = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: ["React-Hook-Form ", ">", " basic"] }), _jsx("div", { className: "field", children: _jsx("div", { children: "https://github.com/react-hook-form/react-hook-form/blob/master/examples/V6/basic.tsx" }) }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "firstName", children: "First Name" }), _jsx("input", { name: "firstName", placeholder: "bill" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "lastName", children: "Last Name" }), _jsx("input", { name: "lastName", placeholder: "luo" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { name: "email", placeholder: "bluebill1049@hotmail.com", type: "email" })] }), _jsx("button", { type: "submit", children: "Submit" })] })] }) }));
};
