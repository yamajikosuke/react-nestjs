import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

export const Typograpy: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Typography</h1>
        <div className="content">
          <div className="field">
            <a
              href="https://mui.com/components/typography/"
              target="_blank"
              rel="noreferrer"
            >
              https://mui.com/components/typography/
            </a>
          </div>
          <hr />
          <Typography variant="h1" component="div" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom component="div">
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            h3. Heading
          </Typography>
          <Typography variant="h4" gutterBottom component="div">
            h4. Heading
          </Typography>
          <Typography variant="h5" gutterBottom component="div">
            h5. Heading
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            h6. Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
        </div>
      </div>
    </section>
  );
};
