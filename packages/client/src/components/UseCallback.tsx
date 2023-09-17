import React, { useState, useCallback, memo } from "react";
import { Child1 } from "./re-rendering-components/Child1";
import { Child4 } from "./re-rendering-components/Child4";

export const UseCallback: React.FC = () => {
  const App = memo(() => {
    console.log("App レンダリング");

    const [num, setNum] = useState(0);

    const onClickButton = () => {
      setNum(num + 1);
    };

    const onClickReset = useCallback(() => {
      console.log("onClickRest");
      setNum(0);
    }, []);

    // const onClickReset = () => {
    //   console.log("onClickRest");
    //   setNum(0);
    // };

    return (
      <>
        <button onClick={onClickButton}>ボタン</button>
        <p>{num}</p>
        <Child1 onClickReset={onClickReset} />
        <Child4 />
      </>
    );
  });

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React.useCallback</h1>
        <div>
          https://github.com/reachscript-jak/book-react-code/tree/main/6/re-rendering/src
        </div>
        <div>関連記事：https://qiita.com/seira/items/8a170cc950241a8fdb23</div>
        <div>https://qiita.com/seira/items/9e38204758030cd5442a</div>
        <App />
      </div>
    </section>
  );
};
