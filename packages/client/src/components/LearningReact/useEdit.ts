import { useContext } from "react";
import { ColorContext, ContextProps } from "./colorContext";

export const useEdit = () => {
  const {
    colors,
    setColors,
    setOpenModal,
    isOpenModal,
    selectedId,
    setSelectedId,
  } = useContext<ContextProps>(ColorContext);

  const editTitle = (id: string, title: string) => {
    const newColors = colors.map((color) => {
      return color.id === id ? { ...color, title } : color;
    });
    setColors(newColors);
  };

  const getItem = (id: string) => {
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
