import React from "react";
import { useForm } from "react-hook-form";

export const ReactHookFormBasic: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React-Hook-Form {">"} basic</h1>
        <div className="field">
          <div>
            https://github.com/react-hook-form/react-hook-form/blob/master/examples/V6/basic.tsx
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" placeholder="bill" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" placeholder="luo" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="bluebill1049@hotmail.com"
              type="email"
              // ref={register}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};
