import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useForm } from "react-hook-form";
export const EditModal = ({ id, item, setIsOpenCardModal, fetchList, }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        mode: "onChange",
    });
    const submit = async (data) => {
        await axios.put(`/todos/${id}`, {
            data: data.title,
            is_done: item.is_done,
            detail: data.detail,
            dead_line: data.deadLine,
        });
        fetchList();
        setIsOpenCardModal(false);
    };
    return (_jsxs("div", { className: "modal is-active", children: [_jsx("div", { className: "modal-background" }), _jsxs("div", { className: "modal-card", children: [_jsxs("header", { className: "modal-card-head", children: [_jsx("p", { className: "modal-card-title", children: "Modal title" }), _jsx("button", { className: "delete", "aria-label": "close", onClick: () => {
                                    setIsOpenCardModal(false);
                                } })] }), _jsxs("section", { className: "modal-card-body", children: [_jsx("input", { className: "input", type: "text", defaultValue: item.data, ...register("title", {
                                    required: "入力してください。",
                                    maxLength: { value: 50, message: "最大文字数は50文字です" },
                                }) }), _jsx("div", { style: { color: "red" }, children: errors.title?.message }), _jsx("textarea", { className: "textarea", defaultValue: item.details.detail, placeholder: "Input detail", ...register("detail") }), _jsx("input", { type: "date", className: "input", ...register("deadLine"), defaultValue: String(item.dead_line).substring(0, 10) })] }), _jsxs("footer", { className: "modal-card-foot", children: [_jsx("button", { className: "button is-info", onClick: handleSubmit(submit), children: "Save" }), _jsx("button", { className: "button", onClick: () => {
                                    setIsOpenCardModal(false);
                                }, children: "Cancel" })] })] })] }));
};
