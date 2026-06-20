import axios from "axios";
/**
 * ToDo 一覧を取得する。
 * @returns {Promise<TodoItem[]>} ToDo 一覧
 */
export const fetchTodoList = async () => {
    const res = await axios.get("/todos/list");
    return res.data;
};
/**
 * カテゴリ一覧を取得する。
 * @returns {Promise<CategoryItem[]>} カテゴリ一覧
 */
export const fetchCategoryList = async () => {
    const res = await axios.get("/todos/category");
    return res.data;
};
/**
 * 新しい ToDo を登録する。
 * @param {{ title: string; detail?: string; deadLine?: Date | null }} data 登録データ
 * @returns {Promise<import("axios").AxiosResponse>} 登録結果
 */
export const createTodo = async (data) => {
    return axios.post("/todos/register", {
        is_done: false,
        data: data.title,
        detail: data.detail ?? "",
        dead_line: data.deadLine ?? null,
    });
};
/**
 * 指定した ToDo を削除する。
 * @param {number} id 削除対象の ToDo ID
 * @returns {Promise<import("axios").AxiosResponse>} 削除結果
 */
export const deleteTodo = async (id) => {
    return axios.delete(`/todos/${id}/delete`);
};
/**
 * 指定した ToDo を更新する。
 * @param {number} id 更新対象の ToDo ID
 * @param {{ data: string; is_done: boolean; detail?: string; dead_line?: Date | null }} data 更新内容
 * @returns {Promise<import("axios").AxiosResponse>} 更新結果
 */
export const updateTodo = async (id, data) => {
    return axios.put(`/todos/${id}`, data);
};
