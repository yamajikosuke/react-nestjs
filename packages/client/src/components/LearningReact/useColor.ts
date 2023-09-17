import { useContext } from "react";
import { v4 } from "uuid";

import { ColorContext, ContextProps } from "./colorContext";

export const useColors = () => {
  const { colors, setColors } = useContext<ContextProps>(ColorContext);

  const addColor = (title: string, color: string) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
        isBookmark: false,
      },
    ]);
  };

  const removeColor = (id: string) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  const rateColor = (id: string, rating: number) => {
    const newColors = colors.map((color) => {
      return color.id === id ? { ...color, rating } : color;
    });
    setColors(newColors);
  };

  const doBookmark = (id: string, isBookmark: boolean) => {
    const newColors = colors.map((color) => {
      return color.id === id ? { ...color, isBookmark } : color;
    });
    setColors(newColors);
  };

  return { colors, addColor, removeColor, rateColor, doBookmark };
};
