import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, memo } from "react";
import { Child1 } from "./re-rendering-components/Child1";
import { Child4 } from "./re-rendering-components/Child4";
export const UseCallback = () => {
    const App = memo(() => {
        console.log("App レンダリング");
        const [num, setNum] = useState(0);
        const onClickButton = () => {
            setNum(num + 1);
        };
        const onClickReset = useCallback(() => {
            console.log("onClickRest");
            setNum(0);
        }, []);
        // const onClickReset = () => {
        //   console.log("onClickRest");
        //   setNum(0);
        // };
        return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: onClickButton, children: "\u30DC\u30BF\u30F3" }), _jsx("p", { children: num }), _jsx(Child1, { onClickReset: onClickReset }), _jsx(Child4, {})] }));
    });
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useCallback" }), _jsx("div", { children: "https://github.com/reachscript-jak/book-react-code/tree/main/6/re-rendering/src" }), _jsx("div", { children: "\u95A2\u9023\u8A18\u4E8B\uFF1Ahttps://qiita.com/seira/items/8a170cc950241a8fdb23" }), _jsx("div", { children: "https://qiita.com/seira/items/9e38204758030cd5442a" }), _jsx(App, {})] }) }));
};
