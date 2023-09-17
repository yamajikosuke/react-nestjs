import React, { useState, useMemo } from "react";

export const UseMemo: React.FC = () => {
  const [data01, setData01] = useState<number>(0);
  const [data02, setData02] = useState<number>(0);

  const doSomething01 = () => {
    console.log("doSomething_01");
    setData01(data01 + 1);
  };

  const memoizedValue01 = useMemo((): number => {
    let i = 0;
    console.log("memoizedValue01", data01);
    while (i < 2000000000) i++;
    return data01 + data01;
  }, [data01]);

  // const value01 = (): number => {
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   console.log("value01", data01);
  //   return data01 + data01;
  // };

  const doSomething02 = () => {
    console.log("doSomething_02");
    setData02(data02 + 1);
  };

  const memoizedValue02 = useMemo((): number => {
    console.log("memoizedValue02", data02);
    return data02 + data02;
  }, [data02]);

  console.log("描画");
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React.useMemo</h1>
        <div>https://qiita.com/seira/items/42576765aecc9fa6b2f8</div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={(): void => doSomething01()}
            >
              Click01
            </button>
          </div>
          <div>memoizedValue01:{memoizedValue01}</div>
          <br />
          {/* <div> 　value01:{value01()}</div> */}
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={(): void => doSomething02()}
            >
              Click02
            </button>
          </div>
          <div>memoizedValue02:{memoizedValue02}</div>
        </div>
      </div>
    </section>
  );
};
