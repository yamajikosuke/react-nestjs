import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CounterStoreProps } from "./store/store";
import { decrease, increase, reset } from "./CounterSlice";

export const Count: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector<CounterStoreProps>((state) => state.counter.count) as number;

  return (
    <>
      <div>Countコンポーネント:{count}</div>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          dispatch(decrease());
        }}
      >
        Down
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </>
  );
};
