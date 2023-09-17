import React, { useState } from "react";

// 親コンポーネント
export const ReactMemo: React.FC = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  //Aボタンのstateセット用関数
  const incrementACounter = () => setCountStateA(countStateA + 1);

  //Bボタンのstateセット用関数
  const incrementBCounter = () => setCountStateB(countStateB + 1);
  // const attrA = {
  //   text: "A ボタン",
  //   countState: { countStateA },
  // };
  // const attrB = {
  //   text: "B ボタン",
  //   countState: { countStateB },
  // };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React.useMemo</h1>
        <div>https://qiita.com/seira/items/9e38204758030cd5442a</div>
        <Count text="A Button" countState={countStateA} />
        <Count text="B Button" countState={countStateB} />
        <button onClick={incrementACounter}>A ボタン</button>
        <button onClick={incrementBCounter}>B ボタン</button>
      </div>
    </section>
  );
};

// Countコンポーネント（子）
const Count = React.memo((props: { text: string; countState: number }) => {
  console.log("count child component", props.text);
  return (
    <p>
      {props.text}:{props.countState}
    </p>
  );
});
