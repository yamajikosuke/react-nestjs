import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { KanbanContext } from "./KanbanContext";
import { initialData } from "./initialData";
export const KanbanProvider = ({ children }) => {
    const [items, setItems] = useState(initialData);
    const [focusedTask, setFocusedTask] = useState("");
    const [isOpenModal, setOpenModal] = useState(false);
    const [columnName, setColumnName] = useState("");
    const [targetColumnId, setTargetColumnId] = useState("");
    const [mode, setMode] = useState("new");
    const [color, setColor] = useState("grey");
    const context = {
        items,
        setItems,
        focusedTask,
        setFocusedTask,
        isOpenModal,
        setOpenModal,
        columnName,
        setColumnName,
        targetColumnId,
        setTargetColumnId,
        mode,
        setMode,
        color,
        setColor,
    };
    return (_jsx(KanbanContext.Provider, { value: context, children: children }));
};
