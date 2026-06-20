import { useContext } from "react";
import { FormContext, } from "../../context/sampleContext";
export const useForm = () => {
    const { type, setType } = useContext(FormContext);
    // const setFormType = useCallback(
    //   (type: FormTypeProps) => {
    //     console.log("setFormType");
    //     setType(type);
    //   },
    //   [setType]
    // );
    const setFormType = (type) => {
        console.log("setFormType");
        setType(type);
    };
    return { type, setFormType };
};
