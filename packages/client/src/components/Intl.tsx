import axios from "axios";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";

type itemProps = {
  id: number;
  data: string;
  is_done: boolean;
};

export const Intl = () => {
  const [, setItems] = useState<itemProps[]>([]);
  const intl = useIntl();

  useEffect(() => {
    const fetch = async () => {
      getList();
    };
    fetch();
  }, []);

  const getList = async () => {
    const res = await axios.get("/dictionary/1");
    console.log(res.data);
    setItems(res.data);
  };

  // const getKey = async () => {
  //   const res = await axios.get("/keys/");
  //   console.log(res.data);
  //   setItems(res.data);
  // };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React intl</h1>
        {/* Name */}
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
          <div>{intl.formatMessage({ id: "title" })}</div>
        </div>
      </div>
    </section>
  );
};
