import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useColors } from "./useColor";
import { useEdit } from "./useEdit";
import { StarRating } from "./StarRating";
import { EditModal } from "./EditModal";
export const ColorList = () => {
    const { colors, removeColor, doBookmark } = useColors();
    const { isOpenModal, setOpenModal, setSelectedId } = useEdit();
    return (_jsxs("section", { className: "section", children: [_jsx("div", { className: "container", children: _jsxs("div", { className: "field", children: [_jsx("label", { className: "label", children: "Color list" }), colors &&
                            colors.map((item, idx) => {
                                return (_jsxs("div", { children: [_jsx("div", { children: item.title }), _jsx("div", { children: _jsx("button", { onClick: () => {
                                                    setOpenModal(true);
                                                    setSelectedId(item.id);
                                                }, children: "edit" }) }), _jsx("div", { style: {
                                                height: "20px",
                                                width: "20px",
                                                backgroundColor: item.color,
                                            } }), _jsx("div", { children: _jsxs("label", { className: "checkbox", children: [_jsx("input", { type: "checkbox", checked: item.isBookmark || false, onChange: () => {
                                                            doBookmark(item.id, !item.isBookmark);
                                                        } }), "bookmark"] }) }), _jsx("div", { children: item.color }), _jsx(StarRating, { id: item.id, selectedStars: item.rating }), _jsx("div", { children: _jsx("button", { onClick: () => {
                                                    if (window.confirm("Are you sure you want to delete the item?")) {
                                                        removeColor(item.id);
                                                    }
                                                }, children: "remove" }) }), _jsx("hr", {})] }, idx));
                            })] }) }), isOpenModal && _jsx(EditModal, {})] }));
};
