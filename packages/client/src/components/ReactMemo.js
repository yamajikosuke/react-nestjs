import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
// 親コンポーネント
export const ReactMemo = () => {
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
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useMemo" }), _jsx("div", { children: "https://qiita.com/seira/items/9e38204758030cd5442a" }), _jsx(Count, { text: "A Button", countState: countStateA }), _jsx(Count, { text: "B Button", countState: countStateB }), _jsx("button", { onClick: incrementACounter, children: "A \u30DC\u30BF\u30F3" }), _jsx("button", { onClick: incrementBCounter, children: "B \u30DC\u30BF\u30F3" })] }) }));
};
// Countコンポーネント（子）
const Count = React.memo((props) => {
    console.log("count child component", props.text);
    return (_jsxs("p", { children: [props.text, ":", props.countState] }));
});
