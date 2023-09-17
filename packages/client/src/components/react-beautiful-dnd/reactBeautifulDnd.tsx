import React, { useState } from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

const Items = styled.ul`
  padding: 0.2rem;
  border: 1px solid #aaa;
`;

const Item = styled.li`
  display: flex;
  margin: 0.5rem;
  border: 1px solid #aaa;
  background: #fff;
  padding: 0.2rem;
  background-color: "white";
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 2px;
  margin-right: 8px;
`;

export const ReactBeautifulDnd: React.FC = () => {
  const initialData = [
    {
      id: "gambaruzoi",
      name: "がんばるぞい",
    },
    {
      id: "gyp",
      name: "ぎょぱー！",
    },
    {
      id: "iine",
      name: "いいね！",
    },
    {
      id: "shincyoku_doudesuka",
      name: "進捗どうですか",
    },
    {
      id: "shobon",
      name: "ショボーン",
    },
  ];
  const [items, setItems] = useState(initialData);

  const handleOnDragEnd = (result: DropResult) => {
    const res = Array.from(items);
    console.log(res === items);
    // console.log(res);
    const [reorderdItem] = res.splice(result.source.index, 1);
    console.log(reorderdItem);
    console.log(result.destination);
    if (result.destination === undefined) return;
    // res.splice(result.destination?.index, 0, reorderdItem);
    setItems(res);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">react-beautiful-dnd</h1>
        <div>公式　https://github.com/atlassian/react-beautiful-dnd</div>

        <div>
          参考 https://dev.classmethod.jp/articles/react-beautiful-dnd-react-ts/
          https://github.com/eggheadio-projects/Beautiful-and-Accessible-Drag-and-Drop-with-react-beautiful-dnd-notes
        </div>
      </div>
      <hr />
      <div className="App">
        <header className="App-header">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <Items
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {items.map(({ id, name }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <Item
                            key={id}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <Handle {...provided.dragHandleProps} />
                            <p>{name}</p>
                          </Item>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </Items>
              )}
            </Droppable>
          </DragDropContext>
        </header>
      </div>
    </section>
  );
};
