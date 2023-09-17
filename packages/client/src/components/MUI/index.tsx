import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const MuiIndex: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">MUI</h1>
        <div className="content">
          <a
            href="https://mui.com/getting-started/usage/"
            target="_blank"
            rel="noreferrer"
          >
            https://mui.com/getting-started/usage/
          </a>
          <hr />
          <Button
            variant="contained"
            onClick={() => {
              alert("Hello world!");
            }}
          >
            Hello World
          </Button>
          <hr />
          <ul>
            <li>
              <Link to="/mui/typography">Typography</Link>
            </li>
            <li>
              <Link to="/mui/theming">Theming</Link>
            </li>
            <li>
              <Link to="/mui/customize">How to customize</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
