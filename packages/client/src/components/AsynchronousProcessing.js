import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export const AsynchronousProcessing = () => {
    const [message, setMessage] = React.useState([]);
    const [items, setItems] = React.useState([]);
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
    const doAsyncB = (a) => {
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
    const delay = (ms) => {
        return new Promise((resolve) => {
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
        }
        catch (error) {
            console.log("データを取得中にエラーが発生しました:", error);
            // Axiosのエラーか確認
            if (axios.isAxiosError(error)) {
                console.error("エラーメッセージ:", error.message);
                // レスポンスがある場合（4xx, 5xxなど）
                if (error.response) {
                    console.error("ステータスコード:", error.response.status);
                    console.error("データ:", error.response.data);
                }
                else {
                    // リクエストは送信されたがレスポンスが届かない場合
                    console.error("レスポンスなし:", error.request);
                }
            }
            else {
                // Axios以外のエラー
                console.error("予期せぬエラー:", error);
            }
        }
    };
    const doProcess_01 = () => {
        return new Promise((resolve, reject) => {
            fetchData()
                .then((res) => {
                resolve(res);
            })
                .catch((err) => {
                console.error("エラー:", err);
                reject(err);
            });
        });
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
    return (_jsxs("section", { className: "section", children: [_jsxs("h1", { className: "title", children: [_jsx(FontAwesomeIcon, { icon: faListAlt }), "AsynchronousProcessing"] }), _jsx("hr", {}), _jsx("div", { children: _jsx("button", { onClick: handleClick_01, children: "\u975E\u540C\u671F\u51E6\u7406\u3092\u5B9F\u884C" }) }), _jsx("div", { children: _jsx("button", { onClick: handleClick_02, children: "\u540C\u671F\u51E6\u7406\u3092\u5B9F\u884C" }) }), _jsx("p", { children: message.map((msg, index) => (_jsx("div", { children: msg }, index))) }), _jsx("table", { className: "table is-fullwidth", children: _jsx("tbody", { children: items.map((item, idx) => {
                        return (_jsxs("tr", { children: [_jsx("td", {}), _jsxs("td", { children: [_jsx("div", { children: item.screenName }), _jsx("div", { style: { fontSize: "0.7rem" }, children: item.password })] })] }, idx));
                    }) }) })] }));
};
