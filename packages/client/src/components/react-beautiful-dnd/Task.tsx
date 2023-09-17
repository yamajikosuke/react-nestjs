import React, { useContext } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { KanbanContext, ContextProps } from "./KanbanContext";

export const Task: React.FC<{
  task: Record<string, string>;
  index: number;
  columnId: string;
}> = ({ task, index, columnId }) => {
  const { items, setItems, setFocusedTask } =
    useContext<ContextProps>(KanbanContext);

  const changeColor = (taskId: string, colorCode: string): void => {
    setItems((items) => {
      items.tasks[taskId]["color"] = colorCode;
      return { ...items };
    });
  };

  const deleteTask = (taskId: string): void => {
    setItems((items) => {
      const taskIds = items.columns[columnId].taskIds.filter((item) => {
        const regexp = new RegExp(taskId);
        return item.match(regexp) === null;
      });

      items.columns[columnId].taskIds = taskIds;
      return { ...items };
    });
  };

  const editTask = (taskId: string, content: string): void => {
    setFocusedTask(taskId);
    setItems((items) => {
      items.tasks[taskId]["content"] = content;
      return { ...items };
    });
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
          borderColor={items.tasks[task.id].color}
        >
          <Handle {...provided.dragHandleProps} />
          <input
            className="input is-small"
            type="text"
            style={{ width: "100%" }}
            value={items.tasks[task.id].content}
            onChange={(e): void => {
              editTask(task.id, e.target.value);
            }}
            autoFocus
          />
          <input
            type="color"
            onChange={(e): void => {
              changeColor(task.id, e.target.value);
            }}
          />
          <button
            className="button is-small"
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "1rem",
            }}
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </button>
        </TaskContainer>
      )}
    </Draggable>
  );
};

const TaskContainer = styled.div<{
  isDragging: boolean;
  borderColor: string;
}>`
  display: flex;
  padding: 2px;
  border-radius: 2px;
  border: 1px solid ${(props): string => props.borderColor || "gray"};
  margin-bottom: 8px;
  background-color: ${(props): string => (props.isDragging ? "#ccc" : "white")};
`;

const Handle = styled.div`
  width: 20px;
  height: 30px;
  background-color: #aaa;
  margin-right: 2px;
`;
