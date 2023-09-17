import { useContext, useCallback } from "react";
import {
  FormContext,
  FormContextProps,
  FormTypeProps,
} from "../../context/sampleContext";

export const useForm = () => {
  const { type, setType } = useContext<FormContextProps>(FormContext);
  // const setFormType = useCallback(
  //   (type: FormTypeProps) => {
  //     console.log("setFormType");
  //     setType(type);
  //   },
  //   [setType]
  // );

  const setFormType = (type: FormTypeProps) => {
    console.log("setFormType");
    setType(type);
  };

  return { type, setFormType };
};
