import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FormContext,
  FormTypeProps,
  CenterType,
  FormMode,
} from "../context/sampleContext";
export const ContextNextPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // formの変数を定義
  const [type, setType] = useState<FormTypeProps>({ type: "normal" });
  const [centerType, setCenterType] = useState<CenterType>(undefined);
  const [formMode, setFormMode] = useState<FormMode>("view");
  const formContext = {
    type,
    centerType,
    formMode,
    setType,
    setCenterType,
    setFormMode,
  };

  useEffect(() => {
    if (!location.state) {
      navigate.push("context");
    }
  }, [navigate, location.state]);
  return (
    <FormContext.Provider value={formContext}>
      <section className="section">
        <div className="container">
          <h1 className="title">React.useContext</h1>
          <div className="field">
            <label className="label">Form type</label>
            {/* existCenterの場合は、DBにデータが入っている*/}
            <div>{location.state && location.state.formType.type}</div>
          </div>
          <div className="field">
            <label className="label">center type</label>
            <div>{location.state && location.state.centerType}</div>
          </div>
        </div>
      </section>
    </FormContext.Provider>
  );
};
