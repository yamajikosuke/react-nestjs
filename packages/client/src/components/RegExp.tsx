import React from "react";
import { useForm } from "react-hook-form";

export const RegExp1: React.FC = () => {
  const initVal = { value: "^\\d*$" };
  const { register, setError, handleSubmit } =
    useForm<{ regExp: string }>();

  const checkRegExp = (data: string): boolean => {
    // Check regular expression
    const res = JSON.stringify(`{value:"${data}"}`)
      .replace('{\\"value":"', "")
      .replace('"}', "");
    try {
      new RegExp(res);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleOnChange = (data: string) => {
    if (checkRegExp(data)) {
      setError("regExp", {});
    } else {
      setError("regExp", {
        type: "manual",
        message: "Syntax error in regular expression.",
      });
    }
  };

  const getJsonVal = (): string | undefined => {
    const rule = new RegExp(initVal.value);
    return String(rule).slice(1).slice(0, -1);
  };

  const onSubmit = () => {
    console.log("onSubmit");
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Regular Expression</h1>

        <div className="field">
          <div className="control">
            <input
              type="text"
              className="input"
              name="regExp"
              defaultValue={getJsonVal()}
              onChange={(e): void => {
                handleOnChange(e.target.value);
              }}
              // ref={register}
            />
          </div>
          <div className="control">
            <button onClick={handleSubmit(onSubmit)}>Submit</button>
          </div>
          <div className="control">
            {/* {errors.regExp && errors.regExp?.message} */}
          </div>
        </div>
      </div>
    </section>
  );
};
