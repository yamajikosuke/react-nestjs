import { createContext } from "react";

export type CounterProps = {
  count: number[];
  setCount: React.Dispatch<React.SetStateAction<number[]>>;
};

export const CounterContext = createContext<CounterProps>({} as CounterProps);
