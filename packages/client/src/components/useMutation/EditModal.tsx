import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type Details = {
  id: number;
  detail: string;
};

export type InputProps = {
  title: string;
  detail: string;
  deadLine: Date | null;
};

export type itemProps = {
  id: number;
  data: string;
  is_done: boolean;
  details: Details;
  dead_line: Date;
};

const editTodoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "入力してください。" })
    .max(50, { message: "最大文字数は50文字です" }),
  detail: z.string().optional(),
  deadLine: z.string().optional().nullable(),
});

type EditTodoFormValues = z.infer<typeof editTodoSchema>;

type Props = {
  id: number;
  item: itemProps;
  setIsOpenCardModal: (isOpenCardModal: boolean) => void;
};

export const EditModal: React.FC<Props> = ({
  id,
  item,
  setIsOpenCardModal,
}) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTodoFormValues>({
    resolver: zodResolver(editTodoSchema),
    mode: "onChange",
    defaultValues: {
      title: item.data,
      detail: item.details?.detail ?? "",
      deadLine: String(item.dead_line).substring(0, 10) || null,
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: async (data: EditTodoFormValues) =>
      axios.put(`/todos/${id}`, {
        data: data.title,
        is_done: item.is_done,
        detail: data.detail ?? "",
        dead_line: data.deadLine ? new Date(data.deadLine) : null,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setIsOpenCardModal(false);
    },
  });

  const submit = async (data: EditTodoFormValues): Promise<void> => {
    await updateTodoMutation.mutateAsync(data);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button
            className="delete"
            aria-label="close"
            onClick={(): void => {
              setIsOpenCardModal(false);
            }}
          ></button>
        </header>
        <section className="modal-card-body">
          <input
            className="input"
            type="text"
            defaultValue={item.data}
            {...register("title")}
          />
          <div style={{ color: "red" }}>{errors.title?.message}</div>
          <textarea
            className="textarea"
            defaultValue={item.details?.detail ?? ""}
            placeholder="Input detail"
            {...register("detail")}
          />
          <input
            type="date"
            className="input"
            {...register("deadLine")}
            defaultValue={String(item.dead_line).substring(0, 10)}
          />
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={handleSubmit(submit)}>
            Save
          </button>
          <button
            className="button"
            onClick={(): void => {
              setIsOpenCardModal(false);
            }}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
