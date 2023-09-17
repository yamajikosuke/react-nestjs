import React from "react";
import { useForm } from "react-hook-form";
import { useEdit } from "./useEdit";

type FormProps = {
  title: string;
};
export const EditModal: React.FC = () => {
  const { setOpenModal, selectedId, getItem, editTitle } = useEdit();
  const { register, handleSubmit } = useForm<FormProps>({
    mode: "onChange",
  });
  const submit = (data: FormProps): void => {
    console.log(data.title);
    setOpenModal(false);
    editTitle(selectedId, data.title);
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
              setOpenModal(false);
            }}
          ></button>
        </header>
        <section className="modal-card-body">
          <input
            name="title"
            className="input"
            type="text"
            defaultValue={getItem(selectedId).title}
            // ref={register({
            //   required: "This field is required",
            //   maxLength: { value: 50, message: "最大文字数は50文字です" },
            // })}
          />
          {/* <div style={{ color: "red" }}>{errors.title?.message}</div> */}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={handleSubmit(submit)}>
            Save
          </button>
          <button
            className="button"
            onClick={(): void => {
              setOpenModal(false);
            }}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
