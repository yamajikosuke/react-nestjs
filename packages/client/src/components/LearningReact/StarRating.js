import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Star } from "./Star";
import { useColors } from "./useColor";
export const StarRating = ({ id, selectedStars }) => {
    const { rateColor } = useColors();
    const createArray = (length) => {
        return [...Array(length)];
    };
    return (_jsx(_Fragment, { children: createArray(5).map((_, i) => {
            return (_jsx(Star, { selected: selectedStars > i, onSelect: () => rateColor(id, i + 1) }, i));
        }) }));
};
