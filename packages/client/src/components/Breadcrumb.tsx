import React from "react";

export const Breadcrumb: React.FC = () => {
  return (
    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#test">Bulma</a>
        </li>
        <li>
          <a href="#test">Documentation</a>
        </li>
        <li>
          <a href="#test">Components</a>
        </li>
        <li className="is-active">
          <a href="#test" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </ul>
    </nav>
  );
};
