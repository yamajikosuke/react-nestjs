import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../store/useStore";

const IncrementButton = () => {
  const increment = useStore((state) => state.increaseCount);
  return (
    <div>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export const Zustand: React.FC = () => {
  const { count, increaseCount, decreaseCount, resetCount } = useStore();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          <FontAwesomeIcon icon={faListAlt} />
          Zustand
        </h1>
        <p className="subtitle">
          Zustand is a simple and fast state management solution for React.
        </p>
        <div>
          <a
            href="https://github.com/pmndrs/zustand"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Zustand（公式）
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
          </li>
        </ul>
      </div>
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
    </section>
  );
};
