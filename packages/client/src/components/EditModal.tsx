import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

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

type Props = {
  id: number;
  item: itemProps;
  setIsOpenCardModal: (isOpenCardModal: boolean) => void;
  fetchList: () => void;
};

export const EditModal: React.FC<Props> = ({
  id,
  item,
  setIsOpenCardModal,
  fetchList,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({
    mode: "onChange",
  });

  const submit = async (data: InputProps): Promise<void> => {
    await axios.put(`/todos/${id}`, {
      data: data.title,
      is_done: item.is_done,
      detail: data.detail,
      dead_line: data.deadLine,
    });
    fetchList();
    setIsOpenCardModal(false);
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
            {...register("title", {
              required: "入力してください。",
              maxLength: { value: 50, message: "最大文字数は50文字です" },
            })}
          />
          <div style={{ color: "red" }}>{errors.title?.message}</div>
          <textarea
            className="textarea"
            defaultValue={item.details.detail}
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
