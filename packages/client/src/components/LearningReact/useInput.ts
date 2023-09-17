import React, { useState } from "react";

// type Props = {
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };
// type Props2 = () => void;
// type Props3 = [Props, Props2];

type Prop = [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  () => void
];

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
    },
    () => setValue(initialValue),
  ] as Prop;
};
