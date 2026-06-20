import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
const schema = z.object({
    screenName: z
        .string()
        .max(10, "最大文字数は10文字です")
        .min(5, {
        message: "5文字以上である必要があります。",
    })
        .min(1, { message: "必須項目です" }),
    password: z
        .string()
        .min(8, { message: "8桁以上のパスワードを入力してください" })
        .regex(/^[a-zA-Z0-9]+$/, {
        message: "英大文字、英小文字、数字で入力してください",
    }),
});
export const UsersWithZod = () => {
    const [items, setItems] = useState([]);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        defaultValues: {
            screenName: "",
            password: "",
        },
        resolver: zodResolver(schema),
    });
    const fetchList = useCallback(async () => {
        const res = await axios.get("/users");
        setItems(res.data);
    }, []);
    useEffect(() => {
        fetchList();
    }, [fetchList]);
    const handleClick = async (data) => {
        await axios.post("/users/register", {
            screenName: data.screenName,
            password: data.password,
        });
        fetchList();
        reset({ screenName: "", password: "" });
    };
    console.log(errors.screenName);
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "UsersWithZod"] }), _jsxs("form", { onSubmit: handleSubmit(handleClick), children: [_jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { className: errors.screenName ? "input is-danger" : "input", type: "text", ...register("screenName"), placeholder: "Text input" }) }) }), _jsx("div", { style: { color: "red" }, children: errors.screenName?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("password"), className: errors.password ? "input is-danger" : "input", placeholder: "Input password" }) }) }), _jsx("div", { style: { color: "red" }, children: errors.password?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", children: "register" }) }) })] }), _jsx("table", { className: "table is-fullwidth", children: _jsx("tbody", { children: items.map((item, idx) => {
                            return (_jsxs("tr", { children: [_jsx("td", {}), _jsxs("td", { children: [_jsx("div", { children: item.screenName }), _jsx("div", { style: { fontSize: "0.7rem" }, children: item.password })] })] }, idx));
                        }) }) })] }) }));
};
