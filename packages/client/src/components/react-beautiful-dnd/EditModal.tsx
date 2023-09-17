import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { KanbanContext, ContextProps } from "./KanbanContext";

export const EditModal: React.FC<{
  editColumn: (title: string) => void;
  createNewColumn: (title: string) => void;
}> = ({ editColumn, createNewColumn }) => {
  const { register, handleSubmit } = useForm();
  const { columnName, setOpenModal, setColumnName, mode } =
    useContext<ContextProps>(KanbanContext);

  let value: string = "";

  const onSubmit = (data: any) => {
    setOpenModal(() => false);
    if (mode === "new") {
      createNewColumn(value);
    } else {
      editColumn(value || columnName);
    }
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
        </header>
        <section className="modal-card-body">
          <input
            name="title"
            className="input"
            type="text"
            placeholder="入力してください。"
            // ref={register({ required: true, maxLength: 80 })}
            defaultValue={mode === "edit" ? columnName : ""}
            onChange={(e): void => {
              value = e.target.value;
            }}
            autoFocus
          />
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={handleSubmit(onSubmit)}>
            Save
          </button>
          <button
            className="button"
            onClick={(): void => {
              setOpenModal(() => false);
              setColumnName(columnName);
            }}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
