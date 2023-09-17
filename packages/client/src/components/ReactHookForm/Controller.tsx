import React from "react";
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

export const ReactHookFormController: React.FC = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React-Hook-Form {">"} Controller</h1>
        <div className="field">
          <div>
            https://react-hook-form.com/jp/api#Controller
            <br />
            https://github.com/react-hook-form/react-hook-form/blob/e2038a3b37fd28d80e11b8ec96acfd96062f99e0/app/src/controller.tsx
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Controller
            control={control}
            name="ReactDatepicker"
            render={({ onChange, onBlur, value }) => (
              <DatePicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
              />
            )}
          /> */}

          <input type="submit" />
        </form>
      </div>
    </section>
  );
};
