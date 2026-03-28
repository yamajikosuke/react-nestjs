import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useStore, useTextStore, useCheckBoxStore } from "../store/useStore";

const IncrementButton = () => {
  const increment = useStore((state) => state.increaseCount);
  return (
    <div>
      <button onClick={increment}>+1</button>
    </div>
  );
};

const InputText = () => {
  const text = useTextStore((state) => state.text);
  const setText = useTextStore((state) => state.setText);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>入力したテキスト: {text}</p>
    </div>
  );
};

const CheckBox = () => {
  const isChecked = useCheckBoxStore((state) => state.isChecked);
  const setChecked = useCheckBoxStore((state) => state.setChecked);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        チェックボックス
      </label>
    </div>
  );
};

export const Zustand: React.FC = () => {
  const { increaseCount, decreaseCount, resetCount } = useStore();
  const count = useStore((state) => state.count);

  return (
    <section className="section">
      <h1 className="title">
        <FontAwesomeIcon icon={faListAlt} />
        Zustand
      </h1>
      <p className="subtitle">
        Zustand is a simple and fast state management solution for React.
      </p>
      <hr />
      <div className="container">
        <h2 className="subtitle">Counter Example (with custom hook)</h2>
        <p>Count: {count}</p>
        <IncrementButton />
      </div>
      <hr />
      <div className="container">
        <h2 className="subtitle">Counter Example</h2>
        <p>Count: {count}</p>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
      <hr />
      <div className="container">
        <InputText />
      </div>
      <hr />
      <div className="container">
        <CheckBox />
      </div>
      <hr />
      <h2 className="subtitle">参考リンク</h2>
      <div className="container">
        <div>
          <a
            href="https://github.com/pmndrs/zustand"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Zustand（公式）
          </a>
        </div>
        <div>
          <a
            href="https://zustand.docs.pmnd.rs/learn/getting-started/introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tutorial（公式）
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://zenn.dev/b13o/articles/tutorial-zustand"
              target="_blank"
              rel="noopener noreferrer"
            >
              状態管理ライブラリ Zustand の紹介と導入【React】
            </a>
          </li>
          <li>
            <a
              href="https://qiita.com/3062_in_zamud/items/33baeb133461cfdde8be"
              target="_blank"
              rel="noopener noreferrer"
            >
              zustandを使ってみたい
            </a>
          </li>
          <li>
            <a
              href="https://zenn.dev/stmn_inc/articles/f1101cfa20dedc"
              target="_blank"
              rel="noopener noreferrer"
            >
              軽量なグローバル状態管理ライブラリ「zustand」
            </a>
          </li>{" "}
          <li>
            <a
              href="https://envader.plus/article/524"
              target="_blank"
              rel="noopener noreferrer"
            >
              【初心者向け】ZustandでReactの状態管理を簡単に！使い方を徹底解説！
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
