import React, { useEffect, useState } from "react";

export const FormBuilder: React.FC = () => {
  const [data, setData] = useState<string[]>([""]);
  const [, setEditedId] = useState<number>();
  const [, setDeleteId] = useState<number>();
  // const [todos, setTodos] = useState([]);
  // const onSortEnd = (e: any) => {
  //   var newTodos = arrayMove(todos, e.oldIndex, e.newIndex);
  //   setTodos(newTodos);
  // };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const addData = () => {
    setData(data.concat(""));
  };

  const deleteData = (id: any) => {
    console.log("delete");
    setDeleteId(id);
    console.log(id);
  };

  const up = (id: any) => {
    console.log("up");
    // setData(arrayMove(data, id, id - 1));
  };

  const down = (id: any) => {
    console.log("down");
    // setData(arrayMove(data, id, id + 1));
  };

  // const handlSelectChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   console.log("handlChange");
  //   const taregetId: number = Number(e.currentTarget.id);
  //   setEditedId(taregetId);
  //   const array = data.slice();
  //   array[taregetId] = e.target.value;
  //   console.log(array);
  //   setData(array);
  // };

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("handlChange");
    const taregetId: number = Number(e.currentTarget.id);
    setEditedId(taregetId);
    const array = data.slice();
    array[taregetId] = e.target.value;
    console.log(array);
    setData(array);
  };

  // test

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">FormBuilder</h1>
      </div>
      <button
        onClick={() => {
          addData();
        }}
      >
        Add
      </button>
      <hr />
      {data.map((value, index) => {
        return (
          <div>
            <input
              id={String(index)}
              className="input"
              type="text"
              value={value}
              onChange={(e) => {
                handlChange(e);
              }}
            />
            <button
              id={String(index)}
              onClick={(e) => deleteData(e.currentTarget.id)}
            >
              del
            </button>
            <button id={String(index)} onClick={(e) => up(e.currentTarget.id)}>
              up
            </button>
            <button
              id={String(index)}
              onClick={(e) => down(e.currentTarget.id)}
            >
              down
            </button>{" "}
          </div>
        );
      })}

      <hr />
      {/* <SortableList items={items} onSortEnd={(e: any) => onSortEnd(e)} /> */}
    </section>
  );

  // const SortableItem = SortableElement(({ value }: any) => (
  //   <li>
  //     {value}
  //     <input
  //       id={value}
  //       className="input"
  //       type="text"
  //       onChange={(e) => {
  //         handlChange(e, value);
  //       }}
  //     />
  //   </li>
  // ));

  // const SortableList = SortableContainer(({ items }: any) => {
  //   console.log(items);
  //   return (
  //     <ul>
  //       {items.map((value: any, index: any) => (
  //         <SortableItem key={`item-${value}`} index={index} value={index} />
  //       ))}
  //     </ul>
  //   );
  // });

  // const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
};
