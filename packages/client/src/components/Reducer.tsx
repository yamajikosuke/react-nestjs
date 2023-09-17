import React, { useReducer, useContext, createContext } from "react";

//counterの初期値を0に設定
const initialState = 0;
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState: any, action: any) => {
  //reducer関数にincrement、increment、reset処理を書く
  //どの処理を渡すかはactionを渡すことによって判断する
  switch (action) {
    case "increment":
      return countState + 1;
    case "decrement":
      return countState - 1;
    case "reset":
      return initialState;
    default:
      return countState;
  }
};
const Context = createContext<Record<string, number>>({ count: 0 });

const ShowCount = () => {
  const context = useContext(Context);
  return (
    <>
      <div>Show Count（ShowCountコンポーネント）</div>
      <div>{context.count}</div>
    </>
  );
};

const Counter = () => {
  //作成したreducerFunc関数とcountStateをuseReducerに渡す
  //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
  const [count, dispatch] = useReducer(reducerFunc, initialState);
  //カウント数とそれぞれのactionを実行する<Button/>を設置する
  return (
    <>
      <Context.Provider value={{ count: count }}>
        <h2>カウント：{count}</h2>
        <ShowCount />
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              onClick={() => dispatch("increment")}
            >
              increment
            </button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={() => dispatch("decrement")}
            >
              decrement
            </button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={() => dispatch("reset")}
            >
              reset
            </button>
          </div>
        </div>
      </Context.Provider>
    </>
  );
};

export const Reducer: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React.useReducer（単一State）</h1>
        <div>参考：https://qiita.com/seira/items/2fbad56e84bda885c84c</div>
        <Counter />
      </div>
    </section>
  );
};
