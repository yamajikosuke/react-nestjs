import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { KanbanContext } from "./KanbanContext";
import { Column } from "./Column";
import { EditModal } from "./EditModal";
import { useKanban } from "./useKanban";
export const ReactBeautifulDnd2 = () => {
    const { items, isOpenModal } = useContext(KanbanContext);
    const { editColumn, openModal, createNewColumn, onDragEnd } = useKanban();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "App", children: _jsxs("header", { className: "App-header", children: [_jsxs("button", { className: "button is-small", onClick: openModal, children: [_jsx("span", { className: "icon", children: _jsx("span", { className: "icon is-small", children: _jsx(FontAwesomeIcon, { icon: faPlus }) }) }), _jsx("span", { children: "Create New Column" })] }), _jsx(DragDropContext, { onDragEnd: onDragEnd, children: _jsx(Droppable, { droppableId: "all-columns", type: "column", children: (provided) => (_jsx(Container, { ...provided.droppableProps, ref: provided.innerRef, children: items.columnOrder.map((columnId, index) => {
                                        const column = items.columns[columnId];
                                        const tasks = column.taskIds.map((taskId) => {
                                            return items.tasks[taskId];
                                        });
                                        return (_jsx(Column, { index: index, column: column, tasks: tasks }, column.id));
                                    }) })) }) })] }) }), isOpenModal && (_jsx(EditModal, { editColumn: editColumn, createNewColumn: (title) => createNewColumn(title) }))] }));
};
const Container = styled.div `
  margin-top: 1rem;
`;
