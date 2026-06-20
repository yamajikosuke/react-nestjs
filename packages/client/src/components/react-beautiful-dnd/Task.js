import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { KanbanContext } from "./KanbanContext";
export const Task = ({ task, index, columnId }) => {
    const { items, setItems, setFocusedTask } = useContext(KanbanContext);
    const changeColor = (taskId, colorCode) => {
        setItems((items) => {
            items.tasks[taskId]["color"] = colorCode;
            return { ...items };
        });
    };
    const deleteTask = (taskId) => {
        setItems((items) => {
            const taskIds = items.columns[columnId].taskIds.filter((item) => {
                const regexp = new RegExp(taskId);
                return item.match(regexp) === null;
            });
            items.columns[columnId].taskIds = taskIds;
            return { ...items };
        });
    };
    const editTask = (taskId, content) => {
        setFocusedTask(taskId);
        setItems((items) => {
            items.tasks[taskId]["content"] = content;
            return { ...items };
        });
    };
    return (_jsx(Draggable, { draggableId: task.id, index: index, children: (provided, snapshot) => (_jsxs(TaskContainer, { ref: provided.innerRef, ...provided.draggableProps, isDragging: snapshot.isDragging, borderColor: items.tasks[task.id].color, children: [_jsx(Handle, { ...provided.dragHandleProps }), _jsx("input", { className: "input is-small", type: "text", style: { width: "100%" }, value: items.tasks[task.id].content, onChange: (e) => {
                        editTask(task.id, e.target.value);
                    }, autoFocus: true }), _jsx("input", { type: "color", onChange: (e) => {
                        changeColor(task.id, e.target.value);
                    } }), _jsx("button", { className: "button is-small", style: {
                        backgroundColor: "transparent",
                        border: "none",
                        marginLeft: "1rem",
                    }, onClick: () => {
                        deleteTask(task.id);
                    }, children: _jsx("span", { className: "icon is-small", children: _jsx(FontAwesomeIcon, { icon: faTrash }) }) })] })) }));
};
const TaskContainer = styled.div `
  display: flex;
  padding: 2px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.borderColor || "gray"};
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "#ccc" : "white")};
`;
const Handle = styled.div `
  width: 20px;
  height: 30px;
  background-color: #aaa;
  margin-right: 2px;
`;
