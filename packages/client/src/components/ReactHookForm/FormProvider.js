import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
export const ReactHookFormProvider = () => {
    const methods = useForm();
    const { register, handleSubmit } = methods;
    // console.log(methods.errors);
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: ["React-Hook-Form ", ">", " Form Provider"] }), _jsx("div", { className: "field", children: _jsx("div", { children: "https://github.com/react-hook-form/react-hook-form/blob/7fa082a94f92ffc8a208269926ea86a89cd75829/examples/V6/formProvider.tsx" }) }), _jsx(FormProvider, { ...methods, children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx("label", { children: "Test" }), _jsx("input", { name: "test" }), _jsx("label", { children: "Nested Input" }), _jsx(Test, {}), _jsx("input", { type: "submit" })] }) })] }) }));
};
const Test = () => {
    const { register } = useFormContext();
    const value = "test";
    return (_jsx("input", { name: "bill", defaultValue: value }));
};
