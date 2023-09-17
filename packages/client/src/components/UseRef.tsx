import React, { useRef } from "react";

export const UseRef: React.FC = () => {
  const number = useRef(100);
  console.log(number.current); // 100
  const inputEl = useRef<HTMLInputElement>(null);

  const changeValue = () => {
    console.log(number.current);
    number.current = 200;
  };

  const handleClick = () => {
    inputEl.current?.focus();
    console.log(inputEl.current?.value);
    console.log(inputEl.current?.id);
  };
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React.useRef</h1>
        <div>
          <a
            href="https://qiita.com/seira/items/0e6a2d835f1afb50544d"
            target="_blank"
            rel="noreferrer"
          >
            参考サイト
          </a>
        </div>
        <div>{number.current}</div>
        <div className="field">
          <button
            className="button is-link is-light"
            onClick={(): void => changeValue()}
          >
            値を変更
          </button>
        </div>
        <div className="field">
          <input id="test" ref={inputEl} type="text" />
          <button onClick={handleClick}>入力エリアをフォーカスする</button>
        </div>
      </div>
    </section>
  );
};
