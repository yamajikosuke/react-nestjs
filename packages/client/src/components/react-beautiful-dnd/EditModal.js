import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { KanbanContext } from "./KanbanContext";
export const EditModal = ({ editColumn, createNewColumn }) => {
    const { register, handleSubmit } = useForm();
    const { columnName, setOpenModal, setColumnName, mode } = useContext(KanbanContext);
    let value = "";
    const onSubmit = (data) => {
        setOpenModal(() => false);
        if (mode === "new") {
            createNewColumn(value);
        }
        else {
            editColumn(value || columnName);
        }
    };
    return (_jsxs("div", { className: "modal is-active", children: [_jsx("div", { className: "modal-background" }), _jsxs("div", { className: "modal-card", children: [_jsx("header", { className: "modal-card-head", children: _jsx("p", { className: "modal-card-title", children: "Modal title" }) }), _jsx("section", { className: "modal-card-body", children: _jsx("input", { name: "title", className: "input", type: "text", placeholder: "\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002", 
                            // ref={register({ required: true, maxLength: 80 })}
                            defaultValue: mode === "edit" ? columnName : "", onChange: (e) => {
                                value = e.target.value;
                            }, autoFocus: true }) }), _jsxs("footer", { className: "modal-card-foot", children: [_jsx("button", { className: "button is-info", onClick: handleSubmit(onSubmit), children: "Save" }), _jsx("button", { className: "button", onClick: () => {
                                    setOpenModal(() => false);
                                    setColumnName(columnName);
                                }, children: "Cancel" })] })] })] }));
};
