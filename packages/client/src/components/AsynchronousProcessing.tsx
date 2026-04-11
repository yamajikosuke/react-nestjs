import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useStore, useTextStore, useCheckBoxStore } from "../store/useStore";
import axios from "axios";

type itemProps = {
  id: number;
  screenName: string;
  password: string;
};

export const AsynchronousProcessing: React.FC = () => {
  const [message, setMessage] = React.useState<string[]>([]);
  const [items, setItems] = React.useState<itemProps[]>([]);

  /*
   * 非同期処理の例
   * 参考サイト
   * https://qiita.com/yuki3942/items/85e672acdf76fc375e37
   */

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

  const fetchData = async () => {
    try {
      console.log("データを取得中...");
      const res = await axios.get("/users");
      return res;
    } catch (error) {
      console.log("データを取得中にエラーが発生しました:", error);
      // Axiosのエラーか確認
      if (axios.isAxiosError(error)) {
        console.error("エラーメッセージ:", error.message);
        // レスポンスがある場合（4xx, 5xxなど）
        if (error.response) {
          console.error("ステータスコード:", error.response.status);
          console.error("データ:", error.response.data);
        } else {
          // リクエストは送信されたがレスポンスが届かない場合
          console.error("レスポンスなし:", error.request);
        }
      } else {
        // Axios以外のエラー
        console.error("予期せぬエラー:", error);
      }
    }
  };

  const doProcess_01 = () => {
    return new Promise(
      (resolve: (value: any) => void, reject: (reason?: any) => void) => {
        fetchData()
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            console.error("エラー:", err);
            reject(err);
          });
      },
    );
  };

  const initialDisplayProcess = async () => {
    await doProcess_01()
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log("初期表示の処理中にエラーが発生しました:", err);
      });
    // ここでさらに別の非同期処理を行うことも可能
    // 例: 別のAPIからデータを取得するなど
  };

  //初期表示でwaitAndShowMessageを実行する
  React.useEffect(() => {
    //    waitAndShowMessage();
    initialDisplayProcess();
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
      <table className="table is-fullwidth">
        <tbody>
          {items.map((item, idx) => {
            return (
              <tr key={idx}>
                <td></td>
                <td>
                  <div>{item.screenName}</div>
                  <div style={{ fontSize: "0.7rem" }}>{item.password}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
