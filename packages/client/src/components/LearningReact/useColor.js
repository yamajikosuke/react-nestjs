import { useContext } from "react";
import { v4 } from "uuid";
import { ColorContext } from "./colorContext";
export const useColors = () => {
    const { colors, setColors } = useContext(ColorContext);
    const addColor = (title, color) => {
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
    const removeColor = (id) => {
        setColors(colors.filter((color) => color.id !== id));
    };
    const rateColor = (id, rating) => {
        const newColors = colors.map((color) => {
            return color.id === id ? { ...color, rating } : color;
        });
        setColors(newColors);
    };
    const doBookmark = (id, isBookmark) => {
        const newColors = colors.map((color) => {
            return color.id === id ? { ...color, isBookmark } : color;
        });
        setColors(newColors);
    };
    return { colors, addColor, removeColor, rateColor, doBookmark };
};
