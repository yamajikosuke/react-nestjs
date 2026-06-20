import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable, } from "react-beautiful-dnd";
const Items = styled.ul `
  padding: 0.2rem;
  border: 1px solid #aaa;
`;
const Item = styled.li `
  display: flex;
  margin: 0.5rem;
  border: 1px solid #aaa;
  background: #fff;
  padding: 0.2rem;
  background-color: "white";
`;
const Handle = styled.div `
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 2px;
  margin-right: 8px;
`;
export const ReactBeautifulDnd = () => {
    const initialData = [
        {
            id: "gambaruzoi",
            name: "がんばるぞい",
        },
        {
            id: "gyp",
            name: "ぎょぱー！",
        },
        {
            id: "iine",
            name: "いいね！",
        },
        {
            id: "shincyoku_doudesuka",
            name: "進捗どうですか",
        },
        {
            id: "shobon",
            name: "ショボーン",
        },
    ];
    const [items, setItems] = useState(initialData);
    const handleOnDragEnd = (result) => {
        const res = Array.from(items);
        console.log(res === items);
        // console.log(res);
        const [reorderdItem] = res.splice(result.source.index, 1);
        console.log(reorderdItem);
        console.log(result.destination);
        if (result.destination === undefined)
            return;
        // res.splice(result.destination?.index, 0, reorderdItem);
        setItems(res);
    };
    return (_jsxs("section", { className: "section", children: [_jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "react-beautiful-dnd" }), _jsx("div", { children: "\u516C\u5F0F\u3000https://github.com/atlassian/react-beautiful-dnd" }), _jsx("div", { children: "\u53C2\u8003 https://dev.classmethod.jp/articles/react-beautiful-dnd-react-ts/ https://github.com/eggheadio-projects/Beautiful-and-Accessible-Drag-and-Drop-with-react-beautiful-dnd-notes" })] }), _jsx("hr", {}), _jsx("div", { className: "App", children: _jsx("header", { className: "App-header", children: _jsx(DragDropContext, { onDragEnd: handleOnDragEnd, children: _jsx(Droppable, { droppableId: "characters", children: (provided) => (_jsxs(Items, { className: "characters", ...provided.droppableProps, ref: provided.innerRef, children: [items.map(({ id, name }, index) => {
                                        return (_jsx(Draggable, { draggableId: id, index: index, children: (provided) => (_jsxs(Item, { ...provided.draggableProps, ref: provided.innerRef, children: [_jsx(Handle, { ...provided.dragHandleProps }), _jsx("p", { children: name })] }, id)) }, id));
                                    }), provided.placeholder] })) }) }) }) })] }));
};
