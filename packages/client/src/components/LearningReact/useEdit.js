import { useContext } from "react";
import { ColorContext } from "./colorContext";
export const useEdit = () => {
    const { colors, setColors, setOpenModal, isOpenModal, selectedId, setSelectedId, } = useContext(ColorContext);
    const editTitle = (id, title) => {
        const newColors = colors.map((color) => {
            return color.id === id ? { ...color, title } : color;
        });
        setColors(newColors);
    };
    const getItem = (id) => {
        return colors.filter((item) => item.id === id)[0];
    };
    return {
        editTitle,
        setOpenModal,
        isOpenModal,
        selectedId,
        setSelectedId,
        getItem,
    };
};
