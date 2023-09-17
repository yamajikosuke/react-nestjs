import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SampleProps2, SampleContext } from "../context/sampleContext";
import { FormTypeProps } from "../context/sampleContext";
import { FormTypeModal } from "./FormTypeModal";

export const Context: React.FC = () => {
  const sampleContext = useContext<SampleProps2>(SampleContext);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [formType, setFormType] = useState<FormTypeProps>({ type: "normal" });

  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React.useContext</h1>
        <div className="field">
          <label className="label">Sample context</label>
          <div>{sampleContext.title.en}</div>
          <div>{sampleContext.title.ja}</div>
        </div>
        <hr />
        <div className="field">
          <label className="label">Form type context</label>
          {/* <div>{type.type}</div> */}
        </div>
        <div className="field">
          <button className="button" onClick={(): void => setOpenModal(true)}>
            open modal
          </button>
        </div>
        <div className="field">
          <ul>
            <li>
              <div
                onClick={(): void => {
                  navigate.push({
                    pathname: "/contextNextPage",
                    state: { centerType: "existCenter", formType: formType },
                  });
                }}
              >
                フォーム
              </div>
              {/* <Link
                to="contextNextPage"
                onClick={(): void => {
                  setCenterType("existCenter");
                }}
              >
                フォーム
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
      {isOpenModal && (
        <FormTypeModal
          setOpenModal={setOpenModal}
          formType={formType}
          setFormType={setFormType}
        />
      )}
    </section>
  );
};
