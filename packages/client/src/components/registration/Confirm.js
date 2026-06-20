import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRegisterStore } from "./store/useRegisterStore";
import { useNavigate } from "react-router-dom";
import { useLeaveConfirm } from "./hooks/useLeaveConfirm";
export const Confirm = () => {
    const navigate = useNavigate();
    const { data } = useRegisterStore();
    useLeaveConfirm();
    const handleRegister = () => {
        // 本来は API 登録処理など
        navigate("/registration/complete");
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "\u78BA\u8A8D\u753B\u9762" }), _jsxs("p", { children: ["\u540D\u524D\uFF1A", data.name] }), _jsxs("p", { children: ["\u6027\u5225\uFF1A", data.gender === "male" ? "男" : "女"] }), _jsxs("p", { children: ["\u30E1\u30FC\u30EB\uFF1A", data.email] }), _jsx("button", { onClick: () => navigate(-1), children: "\u623B\u308B" }), _jsx("button", { onClick: handleRegister, children: "\u767B\u9332" })] }));
};
