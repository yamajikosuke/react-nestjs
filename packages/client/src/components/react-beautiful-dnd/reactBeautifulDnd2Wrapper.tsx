import React from "react";

import { KanbanProvider } from "./KanbanProvider";
import { ReactBeautifulDnd2 } from "./reactBeautifulDnd2";

export const ReactBeautifulDnd2Wrapper: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">react-beautiful-dnd</h1>
        <div>公式　https://github.com/atlassian/react-beautiful-dnd</div>

        <div>
          コンテンツ　https://github.com/eggheadio-projects/Beautiful-and-Accessible-Drag-and-Drop-with-react-beautiful-dnd-notes
        </div>
      </div>
      <hr />
      {/* <KanbanProvider> */}
        <ReactBeautifulDnd2 />
      {/* </KanbanProvider> */}
    </section>
  );
};
