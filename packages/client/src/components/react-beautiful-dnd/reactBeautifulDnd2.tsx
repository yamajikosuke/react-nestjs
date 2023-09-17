import React, { useContext } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { KanbanContext, ContextProps } from "./KanbanContext";
import { Column } from "./Column";
import { EditModal } from "./EditModal";
import { useKanban } from "./useKanban";

export const ReactBeautifulDnd2: React.FC = () => {
  const { items, isOpenModal } = useContext<ContextProps>(KanbanContext);
  const { editColumn, openModal, createNewColumn, onDragEnd } = useKanban();

  return (
    <>
      <div className="App">
        <header className="App-header">
          <button className="button is-small" onClick={openModal}>
            <span className="icon">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </span>
            <span>Create New Column</span>
          </button>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-columns" type="column">
              {(provided) => (
                <Container {...provided.droppableProps} ref={provided.innerRef}>
                  {items.columnOrder.map((columnId, index) => {
                    const column = items.columns[columnId];
                    const tasks = column.taskIds.map((taskId) => {
                      return items.tasks[taskId];
                    });
                    return (
                      <Column
                        key={column.id}
                        index={index}
                        column={column}
                        tasks={tasks}
                      />
                    );
                  })}
                </Container>
              )}
            </Droppable>
          </DragDropContext>
        </header>
      </div>
      {isOpenModal && (
        <EditModal
          editColumn={editColumn}
          createNewColumn={(title) => createNewColumn(title)}
        />
      )}
    </>
  );
};

const Container = styled.div`
  margin-top: 1rem;
`;
