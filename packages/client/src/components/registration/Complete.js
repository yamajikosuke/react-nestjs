import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRegisterStore } from "./store/useRegisterStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Complete = () => {
    const navigate = useNavigate();
    const clear = useRegisterStore((s) => s.clear);
    useEffect(() => {
        clear(); // 完了画面に来たら Store をクリア
    }, []);
    return (_jsxs("div", { children: [_jsx("h2", { children: "\u767B\u9332\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F" }), _jsx("p", { children: "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002" }), _jsx("button", { onClick: () => navigate("/registration"), children: "\u30C8\u30C3\u30D7\u3078" })] }));
};
