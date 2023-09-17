import React from "react";
import { useNavigate } from "react-router-dom";

import { FormTypeProps } from "../context/sampleContext";
export const FormTypeModal: React.FC<{
  formType: { type: string };
  setFormType: (formType: FormTypeProps) => void;
  setOpenModal: (isOpenModal: boolean) => void;
}> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Form Type</p>
          <button
            className="delete"
            aria-label="close"
            onClick={(): void => {
              props.setOpenModal(false);
            }}
          ></button>
        </header>
        <section className="modal-card-body">
          <div>Please select the form type.</div>
          <label className="radio">
            <input
              name="formType"
              type="radio"
              value="normal"
              checked={props.formType.type === "normal"}
              onChange={(): void => {
                props.setFormType({ type: "normal" });
                // setType({ type: "normal" });
              }}
            />
            normal
          </label>
          <label className="radio">
            <input
              name="formType"
              type="radio"
              value="viewOnly"
              checked={props.formType.type === "viewOnly"}
              onChange={(): void => {
                props.setFormType({ type: "viewOnly" });
                // setFormType({ type: "viewOnly" });
              }}
            />
            viewOnly
          </label>
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-info"
            onClick={(): void => {
              //              setCenterType("newCenter");
              //              history.push("contextNextPage");
              navigate.push({
                pathname: "/contextNextPage",
                state: { centerType: "newCenter", formType: props.formType },
              });
            }}
          >
            OK
          </button>
          <button
            className="button"
            onClick={(): void => {
              props.setOpenModal(false);
            }}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
