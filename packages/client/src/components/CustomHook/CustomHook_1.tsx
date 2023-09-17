import React from "react";

import { CounterDisplay } from "./CounterDisplay";
import { ClickDisplay } from "./ClickDisplay";
import { useCounter } from "./useCounter";
import { useClick } from "./useClick";

export const CustomHook1: React.FC = () => {
  const { count, decrement, increment } = useCounter();
  const { isClicked, click } = useClick();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Custom Hook</h1>
        <div className="field">
          <label className="label">Click</label>
          <div className="control">
            <ClickDisplay click={click} isClicked={isClicked} />
          </div>
        </div>
        <hr />
        <div className="field">
          <div>https://qiita.com/FumioNonaka/items/62285e474608388cbbe3</div>
          <label className="label">Counter</label>
          <div className="control">
            <CounterDisplay
              count={count}
              decrement={decrement}
              increment={increment}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
