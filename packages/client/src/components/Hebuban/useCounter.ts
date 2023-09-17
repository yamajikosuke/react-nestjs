import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const countUp = () => setCount(count + 1);
  return { count, countUp };
};
