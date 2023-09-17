import React, { useState } from "react";
import Select from "react-select";
import OptionsType from "react-select";

type OptionType = {
  value: number;
  label: string;
};

export const ReactSelect: React.FC = () => {
  // const [, setValue] = useState<OptionsType<OptionType>>();
  const items = [
    { value: 1, label: "taro" },
    { value: 2, label: "hanako" },
  ];

  const handleOnChange = () => {
    // console.log(data);
    // setValue(data);
  };
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React Select</h1>
        <div className="field">
          <div className="control">
            <Select isMulti options={items} onChange={handleOnChange} />
          </div>
        </div>
      </div>
    </section>
  );
};
