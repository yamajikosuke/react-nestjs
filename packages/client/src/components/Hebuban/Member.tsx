import React, { useContext } from "react";
import { useCounter } from "./useCounter";
import { CounterProps, CounterContext } from "./context";

type Props = {
  idx: number;
  name: string;
  profession: string;
};

export const Member: React.FC<Props> = React.memo((member) => {
  const { count, countUp } = useCounter();
  const context = useContext<CounterProps>(CounterContext);
  const { idx, name, profession } = member;
  const handleClick = () => {
    const countArray = context.count.concat();
    countArray[idx] = context.count[idx] + 1;
    context.setCount(countArray);
  };
  console.log("render Member");
  return (
    <>
      <div>
        {name}: {profession}
      </div>
      {/* <div>
        <button className="button" onClick={countUp}>
          button
        </button>
      </div>
      <div>{count}</div>*/}
      <div>
        <button className="button" onClick={handleClick}>
          button(context)
        </button>
      </div>
      <div>{context.count[idx]}</div>
    </>
  );
});
