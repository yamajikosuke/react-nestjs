import React, { useContext } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useKanban } from "./useKanban";
import { KanbanContext, ContextProps } from "./KanbanContext";
import { Task } from "./Task";

export const Column: React.FC<{
  column: { id: string; title: string; taskIds: string[] };
  tasks: Record<string, string>[];
  index: number;
}> = (props) => {
  const { setOpenModal, setColumnName, setTargetColumnId, setMode } =
    useContext<ContextProps>(KanbanContext);
  const { createTask, deleteColumn } = useKanban();

  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <ColumnContainer {...provided.draggableProps} ref={provided.innerRef}>
          <Title {...provided.dragHandleProps}>
            <div style={{ float: "left" }}>{props.column.title}</div>
            <div style={{ marginLeft: "1rem" }}>
              <button
                className="button is-small"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  deleteColumn(props.column.id);
                }}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </button>
              <button
                className="button is-small"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  setOpenModal(true);
                  setColumnName(props.column.title);
                  setTargetColumnId(props.column.id);
                  setMode("edit");
                }}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
              </button>
            </div>
          </Title>
          <div style={{ padding: "0.5rem" }}>
            <button
              className="button is-small"
              onClick={() => {
                createTask(props.column.id);
                // if (props.inputElm.current) props.inputElm.current.focus();
              }}
            >
              <span className="icon">
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </span>
              <span>Create New Task</span>
            </button>
          </div>

          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {props.tasks.map((task, idx) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={idx}
                    columnId={props.column.id}
                  />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </ColumnContainer>
      )}
    </Draggable>
  );
};

const ColumnContainer = styled.div`
  margin: 8px 0 8px 0;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
`;
const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #aaa;
  color: #fff;
  font-weight: bold;
  padding: 8px;
`;

const TaskList = styled.div<{
  isDraggingOver: boolean;
}>`
  padding: 8px;
  background-color: white;
  flex-grow: 1;
  min-width: 300px;
  background-color: ${(props): string =>
    props.isDraggingOver ? "#efefef" : "white"};
`;
