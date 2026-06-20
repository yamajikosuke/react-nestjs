import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Filter = () => {
    const items = [
        { name: "label_1", isDelete: false },
        { name: "label_2", isDelete: false },
        { name: "label_3", isDelete: true },
        { name: "label_4", isDelete: true },
        { name: "label_5", isDelete: false },
    ];
    const filterWrap = (items) => {
        return items
            .map((item, index) => {
            return {
                id: index,
                item: item,
            };
        })
            .filter((data) => {
            return !data.item.isDelete;
        });
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Filter" }), _jsx("div", { className: "field", children: filterWrap(items).map((_item, i) => {
                        return (_jsxs("div", { children: [_item.id, ":", _item.item.name] }, i));
                    }) })] }) }));
};
