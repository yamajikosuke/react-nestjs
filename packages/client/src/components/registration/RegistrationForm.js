import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./schema/registerSchema";
import { useRegisterStore } from "./store/useRegisterStore";
import { useLeaveConfirm } from "./hooks/useLeaveConfirm";
export const RegistrationForm = () => {
    const navigate = useNavigate();
    const { data, setData } = useRegisterStore();
    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(registerSchema),
        mode: "onBlur",
        defaultValues: {
            ...data,
            gender: data.gender ?? "",
        },
    });
    // 画面離脱防止
    useLeaveConfirm();
    const onSubmit = (values) => {
        // const onSubmit = (values: RegisterForm) => {
        setData(values);
        navigate("/registration/confirm");
    };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { children: [_jsx("label", { children: "\u540D\u524D" }), _jsx("input", { ...register("name") }), _jsx("p", { children: errors.name?.message })] }), _jsxs("div", { children: [_jsx("label", { children: "\u6027\u5225" }), _jsxs("label", { children: [_jsx("input", { type: "radio", value: "male", ...register("gender") }), " \u7537"] }), _jsxs("label", { children: [_jsx("input", { type: "radio", value: "female", ...register("gender") }), " \u5973"] }), _jsx("p", { children: errors.gender?.message })] }), _jsxs("div", { children: [_jsx("label", { children: "\u30E1\u30FC\u30EB" }), _jsx("input", { ...register("email") }), _jsx("p", { children: errors.email?.message })] }), _jsxs("div", { children: [_jsx("label", { children: "\u90FD\u9053\u5E9C\u770C" }), _jsxs("select", { ...register("prefecture"), children: [_jsx("option", { value: "", children: "\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044" }), _jsx("option", { value: "\u6771\u4EAC", children: "\u6771\u4EAC" }), _jsx("option", { value: "\u795E\u5948\u5DDD", children: "\u795E\u5948\u5DDD" }), _jsx("option", { value: "\u5927\u962A", children: "\u5927\u962A" })] }), _jsx("p", { children: errors.prefecture?.message })] }), _jsxs("div", { children: [_jsx("label", { children: "\u4F4F\u62401" }), _jsx("input", { ...register("address1") }), _jsx("p", { children: errors.address1?.message })] }), _jsxs("div", { children: [_jsx("label", { children: "\u4F4F\u62402" }), _jsx("input", { ...register("address2") })] }), _jsxs("div", { children: [_jsx("label", { children: "\u96FB\u8A71\u756A\u53F7" }), _jsx("input", { ...register("tel") }), _jsx("p", { children: errors.tel?.message })] }), _jsxs("div", { children: [_jsx("label", { children: "\u5099\u8003" }), _jsx("textarea", { ...register("note") })] }), _jsx("button", { type: "submit", disabled: isSubmitting, children: "\u9001\u4FE1" })] }));
};
