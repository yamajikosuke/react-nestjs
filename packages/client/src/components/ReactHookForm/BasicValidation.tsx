import React from "react";
import { useForm } from "react-hook-form";

export const ReactHookFormBasicValidation: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  // console.log(errors);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React-Hook-Form {">"} basic validation</h1>
        <div className="field">
          <div>
            https://github.com/react-hook-form/react-hook-form/blob/master/examples/V6/basicValidation.tsx
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>First name</label>
            <input
              type="text"
              name="First name"
              // ref={register({ required: "入力必須です", maxLength: 80 })}
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              type="text"
              name="Last name"
              // ref={register({ required: true, maxLength: 100 })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="Email"
              // ref={register({
              //   required: true,
              //   pattern:
              //     // eslint-disable-next-line no-useless-escape
              //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              // })}
            />
          </div>
          <div>
            <label>Mobile number</label>
            <input
              type="tel"
              name="Mobile number"
              // ref={register({ required: true, maxLength: 11, minLength: 8 })}
            />
          </div>
          <div>
            <label>Title</label>
            <select name="Title">
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>

          <div>
            <label>Are you a developer?</label>
            <input
              type="radio"
              value="Yes"
              // ref={register({ required: true })}
            />
            <input type="radio" value="No" />
          </div>

          <div>
            <input type="text" name="asdasd" />
          </div>

          <input type="submit" />
        </form>{" "}
      </div>
    </section>
  );
};
