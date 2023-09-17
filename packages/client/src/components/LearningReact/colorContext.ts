import React, { createContext } from "react";

export type ColorProps = {
  id: string;
  rating: number;
  title: string;
  color: string;
  isBookmark: boolean;
};

export type FormProps = {
  id: number;
  name: string;
};

export type ContextProps = {
  colors: ColorProps[];
  setColors: React.Dispatch<React.SetStateAction<ColorProps[]>>;
  isOpenModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedId: string;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
  formProps: FormProps | undefined;
  setFormProps: React.Dispatch<React.SetStateAction<FormProps | undefined>>;
};
export const ColorContext = createContext<ContextProps>({} as ContextProps);
