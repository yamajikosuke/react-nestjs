import React, { useState } from "react";
import { KanbanContext, ItemProps } from "./KanbanContext";
import { initialData } from "./initialData";

interface Props {
  children: React.ReactNode;
}

export const KanbanProvider: React.FC<Props> = ({ children }) => {
  const [items, setItems] = useState<ItemProps>(initialData);
  const [focusedTask, setFocusedTask] = useState<string>("");
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [columnName, setColumnName] = useState<string>("");
  const [targetColumnId, setTargetColumnId] = useState<string>("");
  const [mode, setMode] = useState<string>("new");
  const [color, setColor] = useState<string>("grey");

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

  return (
    <KanbanContext.Provider value={context}>{children}</KanbanContext.Provider>
  );
};
