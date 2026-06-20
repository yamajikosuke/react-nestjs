import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
export const ReactHookFormController = () => {
    const { handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: ["React-Hook-Form ", ">", " Controller"] }), _jsx("div", { className: "field", children: _jsxs("div", { children: ["https://react-hook-form.com/jp/api#Controller", _jsx("br", {}), "https://github.com/react-hook-form/react-hook-form/blob/e2038a3b37fd28d80e11b8ec96acfd96062f99e0/app/src/controller.tsx"] }) }), _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsx("input", { type: "submit" }) })] }) }));
};
