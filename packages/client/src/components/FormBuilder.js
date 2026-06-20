import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export const FormBuilder = () => {
    const [data, setData] = useState([""]);
    const [, setEditedId] = useState();
    const [, setDeleteId] = useState();
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
    const deleteData = (id) => {
        console.log("delete");
        setDeleteId(id);
        console.log(id);
    };
    const up = (id) => {
        console.log("up");
        // setData(arrayMove(data, id, id - 1));
    };
    const down = (id) => {
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
    const handlChange = (e) => {
        console.log("handlChange");
        const taregetId = Number(e.currentTarget.id);
        setEditedId(taregetId);
        const array = data.slice();
        array[taregetId] = e.target.value;
        console.log(array);
        setData(array);
    };
    // test
    return (_jsxs("section", { className: "section", children: [_jsx("div", { className: "container", children: _jsx("h1", { className: "title", children: "FormBuilder" }) }), _jsx("button", { onClick: () => {
                    addData();
                }, children: "Add" }), _jsx("hr", {}), data.map((value, index) => {
                return (_jsxs("div", { children: [_jsx("input", { id: String(index), className: "input", type: "text", value: value, onChange: (e) => {
                                handlChange(e);
                            } }), _jsx("button", { id: String(index), onClick: (e) => deleteData(e.currentTarget.id), children: "del" }), _jsx("button", { id: String(index), onClick: (e) => up(e.currentTarget.id), children: "up" }), _jsx("button", { id: String(index), onClick: (e) => down(e.currentTarget.id), children: "down" }), " "] }));
            }), _jsx("hr", {})] }));
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
