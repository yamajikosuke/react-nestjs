import React from "react";

interface Props {
  txt: string;
  handleClick: () => void;
}

export type ButtonProps = Props;

export const MyButton: React.FC<Props> = ({ txt, handleClick }) => (
  <>
    <button onClick={handleClick}>{txt}</button>
  </>
);

export const JestIndex: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Jest</h1>
        <div className="content">
          <a
            href="https://dev.classmethod.jp/articles/lets-start-unit-test-with-react-and-jest/"
            target="_blank"
            rel="noreferrer"
          >
            https://dev.classmethod.jp/articles/lets-start-unit-test-with-react-and-jest/
          </a>
          <hr />
          <MyButton
            txt="ボタン"
            handleClick={() => {
              window.alert("click");
            }}
          />
        </div>
      </div>
    </section>
  );
};
