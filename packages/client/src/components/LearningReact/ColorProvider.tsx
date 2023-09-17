import React, { useState } from "react";
import { ColorContext, ColorProps, FormProps } from "./colorContext";

interface Props {
  children: React.ReactNode;
}

export const ColorProvider: React.FC<Props> = ({ children }) => {
  const [colors, setColors] = useState<ColorProps[]>([]);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [formProps, setFormProps] = useState<FormProps | undefined>();

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

  return (
    <ColorContext.Provider value={context}>{children}</ColorContext.Provider>
  );
};
