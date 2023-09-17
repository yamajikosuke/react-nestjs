import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

export const ReactHookFormProvider: React.FC = () => {
  const methods = useForm();
  const { register, handleSubmit } = methods;

  // console.log(methods.errors);
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React-Hook-Form {">"} Form Provider</h1>
        <div className="field">
          <div>
            https://github.com/react-hook-form/react-hook-form/blob/7fa082a94f92ffc8a208269926ea86a89cd75829/examples/V6/formProvider.tsx
          </div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Test</label>
            <input name="test" />
            <label>Nested Input</label>
            <Test />
            <input type="submit" />
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

const Test: React.FC = () => {
  const { register } = useFormContext();
  const value = "test";
  return (
    <input
      name="bill"
      defaultValue={value}
      // ref={register({ required: "必須です" })}
    />
  );
};
