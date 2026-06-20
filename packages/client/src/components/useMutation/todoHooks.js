import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, fetchCategoryList, fetchTodoList, updateTodo, } from "./todoApi";
/**
 * ToDo 一覧を取得する React Query フック。
 * @returns {ReturnType<typeof useQuery>} ToDo 一覧のクエリ結果
 */
export const useTodoList = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodoList,
    });
};
/**
 * カテゴリ一覧を取得する React Query フック。
 * @returns {ReturnType<typeof useQuery>} カテゴリ一覧のクエリ結果
 */
export const useCategoryList = () => {
    return useQuery({
        queryKey: ["todo-categories"],
        queryFn: fetchCategoryList,
    });
};
/**
 * ToDo を登録する React Query Mutation フック。
 * @returns {ReturnType<typeof useMutation>} 登録用の mutation オブジェクト
 */
export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};
/**
 * ToDo を削除する React Query Mutation フック。
 * @returns {ReturnType<typeof useMutation>} 削除用の mutation オブジェクト
 */
export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
    });
};
/**
 * ToDo を更新する React Query Mutation フック。
 * @param {{ onSuccess?: () => void }} [options] 成功時に追加で実行する処理
 * @returns {ReturnType<typeof useMutation>} 更新用の mutation オブジェクト
 */
export const useUpdateTodo = (options) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data, }) => updateTodo(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["todos"] });
            options?.onSuccess?.();
        },
    });
};
