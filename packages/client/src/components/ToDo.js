import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { FormattedDate } from "react-intl";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faEdit, faTrashAlt, } from "@fortawesome/free-solid-svg-icons";
import { EditModal } from "./EditModal";
export const ToDo = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState([]);
    const [isOpenCardModal, setIsOpenCardModal] = useState(false);
    const [editId, setEditId] = useState(0);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const fetchList = useCallback(async () => {
        const res = await axios.get("/todos/list");
        setItems(res.data);
    }, []);
    const getCategoryList = useCallback(async () => {
        const res = await axios.get("/todos/category");
        // console.log(res.data);
        setCategory(res.data);
    }, []);
    useEffect(() => {
        fetchList();
        getCategoryList();
    }, [fetchList]);
    const getItem = (id) => {
        return items.filter((item) => item.id === id)[0];
    };
    const handleClick = async (data) => {
        console.log("data");
        console.log(data);
        await axios.post("/todos/register", {
            is_done: false,
            data: data.title,
            detail: data.detail,
            dead_line: data.deadLine,
        });
        fetchList();
        reset({ title: "", detail: "", deadLine: null });
    };
    const handleDelete = async (deleteId) => {
        if (window.confirm("削除してよろしいですか？")) {
            await axios.delete(`/todos/${deleteId}/delete`);
            fetchList();
        }
    };
    const handleEdit = (editId) => {
        setIsOpenCardModal(true);
        setEditId(editId);
    };
    const updateIsDone = async (id) => {
        await axios.put(`/todos/${id}`, {
            data: getItem(id).data,
            is_done: !getItem(id).is_done,
            detail: getItem(id).details?.detail,
        });
        fetchList();
    };
    console.log(errors);
    return (_jsxs("section", { className: "section", children: [_jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "ToDo"] }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { className: errors.title ? "input is-danger" : "input", type: "text", ...register("title", {
                                    required: "入力してください。",
                                    maxLength: { value: 50, message: "最大文字数は50文字です" },
                                }), placeholder: "Text input" }) }) }), _jsx("div", { style: { color: "red" }, children: errors.title?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("textarea", { ...register("detail"), className: "textarea", placeholder: "Input detail" }) }) }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("div", { className: "select", children: _jsxs("select", { children: [_jsx("option", { children: "\u9078\u629E" }), category.map((item) => {
                                            return _jsx("option", { children: item.name });
                                        })] }) }) }) }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("deadLine"), className: "input", type: "Date", placeholder: "Deadline" }) }) }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: handleSubmit(handleClick), children: "Submit" }) }) }), _jsx("table", { className: "table is-fullwidth", children: _jsx("tbody", { children: items.map((item, idx) => {
                                const titleStyle = item.is_done
                                    ? { color: "#aaa", textDecoration: "line-through" }
                                    : {};
                                return (_jsxs("tr", { children: [_jsx("td", { children: _jsx("input", { className: "is-checkradio", type: "checkbox", name: "exampleCheckbox", checked: item.is_done, onChange: () => updateIsDone(item.id) }) }), _jsxs("td", { style: titleStyle, children: [_jsx("div", { children: item.data }), _jsx("div", { style: { fontSize: "0.7rem" }, children: item.details?.detail })] }), _jsx("td", { children: _jsx("div", { children: item.dead_line ? (_jsx(FormattedDate, { value: item.dead_line, year: "numeric", month: "2-digit", day: "2-digit" })) : ("-") }) }), _jsxs("td", { children: [_jsx("button", { className: "button is-small", onClick: () => handleEdit(item.id), children: _jsx(FontAwesomeIcon, { icon: faEdit }) }), " ", _jsx("button", { className: "button is-small", onClick: () => handleDelete(item.id), children: _jsx(FontAwesomeIcon, { icon: faTrashAlt }) })] })] }, idx));
                            }) }) })] }), isOpenCardModal && (_jsx(EditModal, { id: editId, item: getItem(editId), setIsOpenCardModal: setIsOpenCardModal, fetchList: fetchList }))] }));
};
