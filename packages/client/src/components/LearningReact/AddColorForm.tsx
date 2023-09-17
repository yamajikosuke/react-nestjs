import React, { useContext, useEffect, useRef } from "react";
import { useInput } from "./useInput";
import { useColors } from "./useColor";
import { ColorContext, ContextProps } from "./colorContext";

export const AddColorForm: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();
  const { setFormProps } = useContext<ContextProps>(ColorContext);

  useEffect(() => {
    inputEl.current?.focus();
    setFormProps({ id: 1, name: "sample form" });
  }, [setFormProps]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={(e): void => submit(e)}>
      <input
        {...titleProps}
        ref={inputEl}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};
