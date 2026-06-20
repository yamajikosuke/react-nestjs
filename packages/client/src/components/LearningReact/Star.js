import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FaStar } from "react-icons/fa";
export const Star = ({ selected, onSelect }) => {
    return (_jsx(_Fragment, { children: _jsx(FaStar, { color: selected ? "red" : "grey", onClick: onSelect }) }));
};
