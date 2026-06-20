import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
export const Users = () => {
    const [items, setItems] = useState([]);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const fetchList = useCallback(async () => {
        const res = await axios.get("/users");
        setItems(res.data);
    }, []);
    useEffect(() => {
        fetchList();
    }, [fetchList]);
    const handleClick = async (data) => {
        console.log("data");
        console.log(data);
        await axios.post("/users/register", {
            screenName: data.screenName,
            password: data.password,
        });
        fetchList();
        reset({ screenName: "", password: "" });
    };
    console.log(errors);
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "Users"] }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { className: errors.screenName ? "input is-danger" : "input", type: "text", ...register("screenName", {
                                required: "入力してください。",
                                maxLength: { value: 50, message: "最大文字数は50文字です" },
                            }), placeholder: "Text input" }) }) }), _jsx("div", { style: { color: "red" }, children: errors.screenName?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("password", {
                                required: "入力してください。",
                                maxLength: { value: 50, message: "最大文字数は50文字です" },
                            }), className: errors.password ? "input is-danger" : "input", placeholder: "Input password" }) }) }), _jsx("div", { style: { color: "red" }, children: errors.password?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: handleSubmit(handleClick), children: "register" }) }) }), _jsx("table", { className: "table is-fullwidth", children: _jsx("tbody", { children: items.map((item, idx) => {
                            return (_jsxs("tr", { children: [_jsx("td", {}), _jsxs("td", { children: [_jsx("div", { children: item.screenName }), _jsx("div", { style: { fontSize: "0.7rem" }, children: item.password })] })] }, idx));
                        }) }) })] }) }));
};
