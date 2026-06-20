import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ColorContext } from "./colorContext";
export const ColorProvider = ({ children }) => {
    const [colors, setColors] = useState([]);
    const [isOpenModal, setOpenModal] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const [formProps, setFormProps] = useState();
    const context = {
        colors,
        setColors,
        isOpenModal,
        setOpenModal,
        selectedId,
        setSelectedId,
        formProps,
        setFormProps,
    };
    return (_jsx(ColorContext.Provider, { value: context, children: children }));
};
