import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { FormattedDate } from "react-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faEdit, faTrashAlt, } from "@fortawesome/free-solid-svg-icons";
import { EditModal } from "./EditModal";
import { useCategoryList, useCreateTodo, useDeleteTodo, useTodoList, useUpdateTodo, } from "./todoHooks";
const todoSchema = z.object({
    title: z
        .string()
        .min(1, { message: "入力してください。" })
        .max(50, { message: "最大文字数は50文字です" }),
    detail: z.string().optional(),
    deadLine: z.string().optional().nullable(),
});
const UseMutationContent = () => {
    const [isOpenCardModal, setIsOpenCardModal] = useState(false);
    const [editId, setEditId] = useState(0);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        resolver: zodResolver(todoSchema),
        mode: "onChange",
    });
    const { data: items = [], isLoading, error } = useTodoList();
    const { data: category = [] } = useCategoryList();
    const createTodoMutation = useCreateTodo();
    const deleteTodoMutation = useDeleteTodo();
    const updateTodoMutation = useUpdateTodo();
    const getItem = (id) => {
        return items.find((item) => item.id === id) ?? null;
    };
    const handleClick = async (data) => {
        await createTodoMutation.mutateAsync({
            title: data.title,
            detail: data.detail,
            deadLine: data.deadLine ? new Date(data.deadLine) : null,
        });
        reset({ title: "", detail: "", deadLine: null });
    };
    const handleDelete = async (deleteId) => {
        if (window.confirm("削除してよろしいですか？")) {
            await deleteTodoMutation.mutateAsync(deleteId);
        }
    };
    const handleEdit = (editId) => {
        setIsOpenCardModal(true);
        setEditId(editId);
    };
    const updateIsDone = async (id) => {
        const item = getItem(id);
        if (!item)
            return;
        await updateTodoMutation.mutateAsync({
            id,
            data: {
                data: item.data,
                is_done: !item.is_done,
                detail: item.details?.detail,
                dead_line: item.dead_line,
            },
        });
    };
    if (isLoading) {
        return _jsx("p", { children: "\u30ED\u30FC\u30C9\u4E2D..." });
    }
    if (error) {
        return _jsxs("p", { children: ["\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ", error.message] });
    }
    return (_jsxs("section", { className: "section", children: [_jsxs("div", { className: "container", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "ToDo"] }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { className: errors.title ? "input is-danger" : "input", type: "text", ...register("title", {
                                    required: "入力してください。",
                                    maxLength: { value: 50, message: "最大文字数は50文字です" },
                                }), placeholder: "Text input" }) }) }), _jsx("div", { style: { color: "red" }, children: errors.title?.message }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("textarea", { ...register("detail"), className: "textarea", placeholder: "Input detail" }) }) }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("div", { className: "select", children: _jsxs("select", { children: [_jsx("option", { children: "\u9078\u629E" }), category.map((item) => {
                                            return _jsx("option", { children: item.name }, item.name);
                                        })] }) }) }) }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("input", { ...register("deadLine"), className: "input", type: "Date", placeholder: "Deadline" }) }) }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: handleSubmit(handleClick), children: "Submit" }) }) }), _jsx("table", { className: "table is-fullwidth", children: _jsx("tbody", { children: items.map((item, idx) => {
                                const titleStyle = item.is_done
                                    ? { color: "#aaa", textDecoration: "line-through" }
                                    : {};
                                return (_jsxs("tr", { children: [_jsx("td", { children: _jsx("input", { className: "is-checkradio", type: "checkbox", name: "exampleCheckbox", checked: item.is_done, onChange: () => updateIsDone(item.id) }) }), _jsxs("td", { style: titleStyle, children: [_jsx("div", { children: item.data }), _jsx("div", { style: { fontSize: "0.7rem" }, children: item.details?.detail })] }), _jsx("td", { children: _jsx("div", { children: item.dead_line ? (_jsx(FormattedDate, { value: item.dead_line, year: "numeric", month: "2-digit", day: "2-digit" })) : ("-") }) }), _jsxs("td", { children: [_jsx("button", { className: "button is-small", onClick: () => handleEdit(item.id), children: _jsx(FontAwesomeIcon, { icon: faEdit }) }), " ", _jsx("button", { className: "button is-small", onClick: () => handleDelete(item.id), children: _jsx(FontAwesomeIcon, { icon: faTrashAlt }) })] })] }, idx));
                            }) }) })] }), isOpenCardModal && (_jsx(EditModal, { id: editId, item: getItem(editId) ?? items[0], setIsOpenCardModal: setIsOpenCardModal }))] }));
};
export const UseMutation = () => {
    const [queryClient] = useState(() => new QueryClient());
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(UseMutationContent, {}) }));
};
