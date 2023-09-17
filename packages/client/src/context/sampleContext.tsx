import { createContext } from "react";

export type SampleProps2 = Record<string, Record<string, string>>;
export const SampleContext = createContext<SampleProps2>({
  title: { en: "", ja: "" },
});

export type FormTypeProps = { type: "viewOnly" | "normal" };
export type CenterType = "newCenter" | "existCenter" | undefined;
export type FormMode = "view" | "edit";
export type FormContextProps = {
  type: FormTypeProps;
  setType: React.Dispatch<React.SetStateAction<FormTypeProps>>;
  centerType: CenterType;
  setCenterType: React.Dispatch<React.SetStateAction<CenterType>>;
  formMode: FormMode;
  setFormMode: React.Dispatch<React.SetStateAction<FormMode>>;
};
export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps
);
