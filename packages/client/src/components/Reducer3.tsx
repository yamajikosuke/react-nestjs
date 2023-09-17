import React, { useReducer } from "react";

export const Reducer3: React.FC = () => {
  // const [checked, setChecked] = useState<boolean>(false);
  const [checked, toggle] = useReducer((checked) => !checked, false);
  // const toggle = () => {
  //   setChecked((checked) => !checked);
  // };
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          React.useReducer（Learning React: Improving Code with useReducer）
        </h1>
        <div>
          <input type="checkbox" checked={checked} onChange={toggle} />
        </div>
        <div>{checked ? "checked" : "not checked"}</div>
      </div>
    </section>
  );
};
