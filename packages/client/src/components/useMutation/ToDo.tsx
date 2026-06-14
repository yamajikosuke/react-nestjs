import React, { useState } from "react";
import axios from "axios";
import { FormattedDate } from "react-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { EditModal, InputProps, Details } from "./EditModal";

type itemProps = {
  id: number;
  data: string;
  is_done: boolean;
  details: Details;
  dead_line: Date;
};

type CategoryProps = {
  name: string;
};

const todoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "入力してください。" })
    .max(50, { message: "最大文字数は50文字です" }),
  detail: z.string().optional(),
  deadLine: z.string().optional().nullable(),
});

type TodoFormValues = z.infer<typeof todoSchema>;

const fetchTodoList = async (): Promise<itemProps[]> => {
  const res = await axios.get("/todos/list");
  return res.data;
};

const fetchCategoryList = async (): Promise<CategoryProps[]> => {
  const res = await axios.get("/todos/category");
  return res.data;
};

const UseMutationContent: React.FC = () => {
  const queryClient = useQueryClient();
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const [editId, setEditId] = useState<number>(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    mode: "onChange",
  });

  const {
    data: items = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
  });

  const { data: category = [] } = useQuery({
    queryKey: ["todo-categories"],
    queryFn: fetchCategoryList,
  });

  const createTodoMutation = useMutation({
    mutationFn: async (data: InputProps) =>
      axios.post("/todos/register", {
        is_done: false,
        data: data.title,
        detail: data.detail,
        dead_line: data.deadLine,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      reset({ title: "", detail: "", deadLine: null });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (deleteId: number) =>
      axios.delete(`/todos/${deleteId}/delete`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: async ({ id, item }: { id: number; item: itemProps }) =>
      axios.put(`/todos/${id}`, {
        data: item.data,
        is_done: item.is_done,
        detail: item.details?.detail,
        dead_line: item.dead_line,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const getItem = (id: number): itemProps | null => {
    return items.find((item: itemProps) => item.id === id) ?? null;
  };

  const handleClick = async (data: TodoFormValues) => {
    await createTodoMutation.mutateAsync({
      title: data.title,
      detail: data.detail ?? "",
      deadLine: data.deadLine ? new Date(data.deadLine) : null,
    } as InputProps);
  };

  const handleDelete = async (deleteId: number) => {
    if (window.confirm("削除してよろしいですか？")) {
      await deleteTodoMutation.mutateAsync(deleteId);
    }
  };

  const handleEdit = (editId: number) => {
    setIsOpenCardModal(true);
    setEditId(editId);
  };

  const updateIsDone = async (id: number): Promise<void> => {
    const item = getItem(id);
    if (!item) return;

    await updateTodoMutation.mutateAsync({
      id,
      item: {
        ...item,
        is_done: !item.is_done,
      },
    });
  };

  if (isLoading) {
    return <p>ロード中...</p>;
  }

  if (error) {
    return <p>エラーが発生しました: {error.message}</p>;
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <FontAwesomeIcon icon={faListAlt} />
          ToDo
        </h1>
        <div className="field">
          <div className="control">
            <input
              className={errors.title ? "input is-danger" : "input"}
              type="text"
              {...register("title", {
                required: "入力してください。",
                maxLength: { value: 50, message: "最大文字数は50文字です" },
              })}
              placeholder="Text input"
            />
          </div>
        </div>
        <div style={{ color: "red" }}>{errors.title?.message}</div>
        <div className="field">
          <div className="control">
            <textarea
              {...register("detail")}
              className="textarea"
              placeholder="Input detail"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <div className="select">
              <select>
                <option>選択</option>
                {category.map((item: CategoryProps) => {
                  return <option key={item.name}>{item.name}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              {...register("deadLine")}
              className="input"
              type="Date"
              placeholder="Deadline"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="button is-link"
              onClick={handleSubmit(handleClick)}
            >
              Submit
            </button>
          </div>
        </div>

        <table className="table is-fullwidth">
          <tbody>
            {items.map((item: itemProps, idx: number) => {
              const titleStyle = item.is_done
                ? { color: "#aaa", textDecoration: "line-through" }
                : {};
              return (
                <tr key={idx}>
                  <td>
                    <input
                      className="is-checkradio"
                      type="checkbox"
                      name="exampleCheckbox"
                      checked={item.is_done}
                      onChange={(): Promise<void> => updateIsDone(item.id)}
                    />
                  </td>
                  <td style={titleStyle}>
                    <div>{item.data}</div>
                    <div style={{ fontSize: "0.7rem" }}>
                      {item.details?.detail}
                    </div>
                  </td>
                  <td>
                    <div>
                      {item.dead_line ? (
                        <FormattedDate
                          value={item.dead_line}
                          year="numeric"
                          month="2-digit"
                          day="2-digit"
                        />
                      ) : (
                        "-"
                      )}
                    </div>
                  </td>
                  <td>
                    <button
                      className="button is-small"
                      onClick={(): void => handleEdit(item.id)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>{" "}
                    <button
                      className="button is-small"
                      onClick={(): Promise<void> => handleDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isOpenCardModal && (
        <EditModal
          id={editId}
          item={getItem(editId) ?? items[0]}
          setIsOpenCardModal={setIsOpenCardModal}
        />
      )}
    </section>
  );
};

export const UseMutation: React.FC = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UseMutationContent />
    </QueryClientProvider>
  );
};
