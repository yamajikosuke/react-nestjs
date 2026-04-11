import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useStore, useTextStore, useCheckBoxStore } from "../store/useStore";

export const AsynchronousProcessing: React.FC = () => {
  const [message, setMessage] = React.useState<string[]>([]);

  const doAsync = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resultA = "Aの処理結果";
        resolve(resultA);
      }, 1000);
    });
  };

  const doAsyncB = (a: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resultB = a + "を受け取ってBの処理結果";
        resolve(resultB);
      }, 1000);
    });
  };

  const handleClick_01 = () => {
    doAsync()
      .then((a) => {
        console.log("A の結果:", a);
        return doAsyncB(a);
      })
      .then((b) => {
        console.log("B の結果:", b);
      })
      .catch((err) => {
        console.error("エラー:", err);
      });
  };

  const delay = (ms: number) => {
    return new Promise((resolve: (value: string) => void) => {
      //      setTimeout(resolve, ms);
      setTimeout(() => {
        resolve(`${ms} ミリ秒経過`);
      }, ms);
    });
  };

  const waitAndShowMessage = async () => {
    setMessage((prev) => [...prev, "処理を開始します　その１"]);
    await delay(3000).then((msg) => console.log(msg)); // 3秒間待つ
    setMessage((prev) => [...prev, "3秒経過しました。"]);
    setMessage((prev) => [...prev, "処理を開始します　その２"]);
    await delay(2000).then((msg) => console.log(msg)); // 2秒間待つ
    setMessage((prev) => [...prev, "2秒経過しました。"]);
  };

  const handleClick_02 = () => {
    waitAndShowMessage();
  };

  //初期表示でwaitAndShowMessageを実行する
  React.useEffect(() => {
    waitAndShowMessage();
  }, []);

  return (
    <section className="section">
      <h1 className="title">
        <FontAwesomeIcon icon={faListAlt} />
        AsynchronousProcessing
      </h1>
      <hr />
      <div>
        <button onClick={handleClick_01}>非同期処理を実行</button>
      </div>
      <div>
        <button onClick={handleClick_02}>同期処理を実行</button>
      </div>
      <p>
        {message.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </p>
    </section>
  );
};
