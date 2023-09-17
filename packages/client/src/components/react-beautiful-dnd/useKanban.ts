import { useContext } from "react";
import { DropResult } from "react-beautiful-dnd";
import { v4 } from "uuid";

import { KanbanContext, ContextProps, ItemProps } from "./KanbanContext";

export const useKanban = () => {
  const { targetColumnId, setItems, setOpenModal, setMode, items } =
    useContext<ContextProps>(KanbanContext);

  const editColumn = (title: string) => {
    setItems((items) => {
      const buffer = items.columns[targetColumnId];
      buffer.title = title;
      items.columns[targetColumnId] = buffer;
      return { ...items };
    });
  };

  const openModal = (): void => {
    setOpenModal(true);
    setMode("new");
  };

  const createNewColumn = (title: string): void => {
    const newColumnId = `column-${Object.keys(items.columns).length + 1}`;
    items.columns[newColumnId] = {
      id: newColumnId,
      title: title,
      taskIds: [],
    };
    items.columnOrder.unshift(newColumnId);
    setItems({ ...items });
  };

  const onDragEnd = (result: DropResult) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = items.columns[source.droppableId];
    const finish = items.columns[destination.droppableId];
    if (start !== undefined && finish !== undefined && start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...finish,
        taskIds: newTaskIds,
      };

      const newState = {
        ...items,
        columns: {
          ...items.columns,
          [newColumn.id]: newColumn,
        },
      };
      setItems(newState);
      return;
    }

    if (result.type === "column") {
      const newColumnOrder = Array.from(items.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...items,
        columnOrder: newColumnOrder,
      };
      setItems(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...items,
      columns: {
        ...items.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setItems(newState);
  };

  const createTask = (columnId: string): void => {
    const uuid = v4();
    const buffer2: ItemProps = { tasks: {}, columns: {}, columnOrder: [] };
    const buffer3: ItemProps = { tasks: {}, columns: {}, columnOrder: [] };
    const newTaskIds = items.columns[columnId].taskIds;
    newTaskIds.unshift(uuid);
    buffer2.columns[columnId] = {
      id: columnId,
      title: items.columns[columnId].title,
      taskIds: newTaskIds,
    };
    buffer3.tasks = items.tasks;
    buffer3.tasks[uuid] = {
      ...{
        id: uuid,
        content: "",
      },
    };

    const buffer = {
      ...buffer2,
      ...buffer3,
      ...items,
    };
    setItems({ ...buffer });
  };

  const deleteColumn = (columnId: string): void => {
    setItems((items) => {
      //get taskIds
      items.columns[columnId].taskIds.forEach((taskId) => {
        delete items.tasks[taskId];
      });
      const taskIds = items.columnOrder.filter((item) => {
        const regexp = new RegExp(columnId);
        return item.match(regexp) === null;
      });

      items.columnOrder = taskIds;
      delete items.columns.columnId;
      return { ...items };
    });
  };

  return {
    editColumn,
    openModal,
    createNewColumn,
    onDragEnd,
    createTask,
    deleteColumn,
  };
};
