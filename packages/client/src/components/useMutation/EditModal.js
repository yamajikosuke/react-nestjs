import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateTodo } from "./todoHooks";
const editTodoSchema = z.object({
    title: z
        .string()
        .min(1, { message: "入力してください。" })
        .max(50, { message: "最大文字数は50文字です" }),
    detail: z.string().optional(),
    deadLine: z.string().optional().nullable(),
});
export const EditModal = ({ id, item, setIsOpenCardModal, }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(editTodoSchema),
        mode: "onChange",
        defaultValues: {
            title: item.data,
            detail: item.details?.detail ?? "",
            deadLine: String(item.dead_line).substring(0, 10) || null,
        },
    });
    const updateTodoMutation = useUpdateTodo({
        onSuccess: () => {
            setIsOpenCardModal(false);
        },
    });
    const submit = async (data) => {
        await updateTodoMutation.mutateAsync({
            id,
            data: {
                data: data.title,
                is_done: item.is_done,
                detail: data.detail ?? "",
                dead_line: data.deadLine ? new Date(data.deadLine) : null,
            },
        });
    };
    return (_jsxs("div", { className: "modal is-active", children: [_jsx("div", { className: "modal-background" }), _jsxs("div", { className: "modal-card", children: [_jsxs("header", { className: "modal-card-head", children: [_jsx("p", { className: "modal-card-title", children: "Modal title" }), _jsx("button", { className: "delete", "aria-label": "close", onClick: () => {
                                    setIsOpenCardModal(false);
                                } })] }), _jsxs("section", { className: "modal-card-body", children: [_jsx("input", { className: "input", type: "text", defaultValue: item.data, ...register("title") }), _jsx("div", { style: { color: "red" }, children: errors.title?.message }), _jsx("textarea", { className: "textarea", defaultValue: item.details?.detail ?? "", placeholder: "Input detail", ...register("detail") }), _jsx("input", { type: "date", className: "input", ...register("deadLine"), defaultValue: String(item.dead_line).substring(0, 10) })] }), _jsxs("footer", { className: "modal-card-foot", children: [_jsx("button", { className: "button is-info", onClick: handleSubmit(submit), children: "Save" }), _jsx("button", { className: "button", onClick: () => {
                                    setIsOpenCardModal(false);
                                }, children: "Cancel" })] })] })] }));
};
