import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer, useContext, createContext } from "react";
//counterの初期値を0に設定
const initialState = 0;
//reducer関数を作成
//countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerFunc = (countState, action) => {
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
const Context = createContext({ count: 0 });
const ShowCount = () => {
    const context = useContext(Context);
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: "Show Count\uFF08ShowCount\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\uFF09" }), _jsx("div", { children: context.count })] }));
};
const Counter = () => {
    //作成したreducerFunc関数とcountStateをuseReducerに渡す
    //useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
    const [count, dispatch] = useReducer(reducerFunc, initialState);
    //カウント数とそれぞれのactionを実行する<Button/>を設置する
    return (_jsx(_Fragment, { children: _jsxs(Context.Provider, { value: { count: count }, children: [_jsxs("h2", { children: ["\u30AB\u30A6\u30F3\u30C8\uFF1A", count] }), _jsx(ShowCount, {}), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link", onClick: () => dispatch("increment"), children: "increment" }) }), _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", onClick: () => dispatch("decrement"), children: "decrement" }) }), _jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", onClick: () => dispatch("reset"), children: "reset" }) })] })] }) }));
};
export const Reducer = () => {
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useReducer\uFF08\u5358\u4E00State\uFF09" }), _jsx("div", { children: "\u53C2\u8003\uFF1Ahttps://qiita.com/seira/items/2fbad56e84bda885c84c" }), _jsx(Counter, {})] }) }));
};
