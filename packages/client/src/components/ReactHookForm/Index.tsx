import React from "react";
import { Link } from "react-router-dom";

export const ReactHookFormIndex: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React-Hook-Form</h1>
        <div className="content">
          <div className="field">
            <div>https://react-hook-form.com/jp/get-started</div>
            <div>
              https://github.com/react-hook-form/react-hook-form/tree/master/examples/V6
            </div>
          </div>
          <ul>
            <li>
              <Link to="./react-hook-form/basic">basic</Link>
            </li>
            <li>
              <Link to="./react-hook-form/basic-validation">
                basic validation
              </Link>
            </li>
            <li>
              <Link to="./react-hook-form/basic-validation-display-error">
                basic validation display error
              </Link>
            </li>
            <li>
              <Link to="./react-hook-form/form-provider">form provider</Link>
            </li>
            <li>
              <Link to="./react-hook-form/controller">Controller</Link>
              <br />
            </li>
            <li>useController</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
