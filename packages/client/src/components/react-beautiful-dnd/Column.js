import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useKanban } from "./useKanban";
import { KanbanContext } from "./KanbanContext";
import { Task } from "./Task";
export const Column = (props) => {
    const { setOpenModal, setColumnName, setTargetColumnId, setMode } = useContext(KanbanContext);
    const { createTask, deleteColumn } = useKanban();
    return (_jsx(Draggable, { draggableId: props.column.id, index: props.index, children: (provided) => (_jsxs(ColumnContainer, { ...provided.draggableProps, ref: provided.innerRef, children: [_jsxs(Title, { ...provided.dragHandleProps, children: [_jsx("div", { style: { float: "left" }, children: props.column.title }), _jsxs("div", { style: { marginLeft: "1rem" }, children: [_jsx("button", { className: "button is-small", style: { backgroundColor: "transparent", border: "none" }, onClick: () => {
                                        deleteColumn(props.column.id);
                                    }, children: _jsx("span", { className: "icon is-small", children: _jsx(FontAwesomeIcon, { icon: faTrash }) }) }), _jsx("button", { className: "button is-small", style: { backgroundColor: "transparent", border: "none" }, onClick: () => {
                                        setOpenModal(true);
                                        setColumnName(props.column.title);
                                        setTargetColumnId(props.column.id);
                                        setMode("edit");
                                    }, children: _jsx("span", { className: "icon is-small", children: _jsx(FontAwesomeIcon, { icon: faEdit }) }) })] })] }), _jsx("div", { style: { padding: "0.5rem" }, children: _jsxs("button", { className: "button is-small", onClick: () => {
                            createTask(props.column.id);
                            // if (props.inputElm.current) props.inputElm.current.focus();
                        }, children: [_jsx("span", { className: "icon", children: _jsx("span", { className: "icon is-small", children: _jsx(FontAwesomeIcon, { icon: faPlus }) }) }), _jsx("span", { children: "Create New Task" })] }) }), _jsx(Droppable, { droppableId: props.column.id, type: "task", children: (provided, snapshot) => (_jsxs(TaskList, { isDraggingOver: snapshot.isDraggingOver, ...provided.droppableProps, ref: provided.innerRef, children: [props.tasks.map((task, idx) => (_jsx(Task, { task: task, index: idx, columnId: props.column.id }, task.id))), provided.placeholder] })) })] })) }));
};
const ColumnContainer = styled.div `
  margin: 8px 0 8px 0;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
`;
const Title = styled.h3 `
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #aaa;
  color: #fff;
  font-weight: bold;
  padding: 8px;
`;
const TaskList = styled.div `
  padding: 8px;
  background-color: white;
  flex-grow: 1;
  min-width: 300px;
  background-color: ${(props) => props.isDraggingOver ? "#efefef" : "white"};
`;
