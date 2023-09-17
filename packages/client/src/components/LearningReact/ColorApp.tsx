import React from "react";
import { ColorProvider } from "./ColorProvider";
import { AddColorForm } from "./AddColorForm";
import { ColorList } from "./ColorList";
// import { Breadcrumb } from "./Breadcrumb";

export const ColorApp: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Learning React</h1>
        <ColorProvider>
          {/* <Breadcrumb /> */}
          <AddColorForm />
          <ColorList />
        </ColorProvider>
      </div>
    </section>
  );
};
