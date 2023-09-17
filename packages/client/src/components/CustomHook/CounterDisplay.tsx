import React from "react";
import { useClick } from "./useClick";
import { ClickDisplay } from "./ClickDisplay";

export const CounterDisplay: React.FC<{
  count: number;
  decrement: () => void;
  increment: () => void;
}> = ({ count, decrement, increment }) => {
  const { isClicked, click } = useClick();

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <label className="label">Click</label>
        <div className="control">
          <ClickDisplay click={click} isClicked={isClicked} />
        </div>
      </div>
    </>
  );
};
