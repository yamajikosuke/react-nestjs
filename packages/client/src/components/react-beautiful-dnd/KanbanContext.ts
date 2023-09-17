import React, { createContext } from "react";

type TasksProps = Record<string, Record<string, string>>;
type ColumnProps = Record<
  string,
  { id: string; title: string; taskIds: string[] }
>;
export type ItemProps = {
  tasks: TasksProps;
  columns: ColumnProps;
  columnOrder: string[];
};

export type ContextProps = {
  items: ItemProps;
  setItems: React.Dispatch<React.SetStateAction<ItemProps>>;
  focusedTask: string;
  setFocusedTask: React.Dispatch<React.SetStateAction<string>>;
  isOpenModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  columnName: string;
  setColumnName: React.Dispatch<React.SetStateAction<string>>;
  targetColumnId: string;
  setTargetColumnId: React.Dispatch<React.SetStateAction<string>>;
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export const KanbanContext = createContext<ContextProps>({} as ContextProps);
