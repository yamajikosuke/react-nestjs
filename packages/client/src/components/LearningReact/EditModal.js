import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { useEdit } from "./useEdit";
export const EditModal = () => {
    const { setOpenModal, selectedId, getItem, editTitle } = useEdit();
    const { register, handleSubmit } = useForm({
        mode: "onChange",
    });
    const submit = (data) => {
        console.log(data.title);
        setOpenModal(false);
        editTitle(selectedId, data.title);
    };
    return (_jsxs("div", { className: "modal is-active", children: [_jsx("div", { className: "modal-background" }), _jsxs("div", { className: "modal-card", children: [_jsxs("header", { className: "modal-card-head", children: [_jsx("p", { className: "modal-card-title", children: "Modal title" }), _jsx("button", { className: "delete", "aria-label": "close", onClick: () => {
                                    setOpenModal(false);
                                } })] }), _jsx("section", { className: "modal-card-body", children: _jsx("input", { name: "title", className: "input", type: "text", defaultValue: getItem(selectedId).title }) }), _jsxs("footer", { className: "modal-card-foot", children: [_jsx("button", { className: "button is-info", onClick: handleSubmit(submit), children: "Save" }), _jsx("button", { className: "button", onClick: () => {
                                    setOpenModal(false);
                                }, children: "Cancel" })] })] })] }));
};
