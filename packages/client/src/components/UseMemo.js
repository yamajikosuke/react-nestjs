import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
export const UseMemo = () => {
    const [data01, setData01] = useState(0);
    const [data02, setData02] = useState(0);
    const doSomething01 = () => {
        console.log("doSomething_01");
        setData01(data01 + 1);
    };
    const memoizedValue01 = useMemo(() => {
        let i = 0;
        console.log("memoizedValue01", data01);
        while (i < 2000000000)
            i++;
        return data01 + data01;
    }, [data01]);
    // const value01 = (): number => {
    //   let i = 0;
    //   while (i < 2000000000) i++;
    //   console.log("value01", data01);
    //   return data01 + data01;
    // };
    const doSomething02 = () => {
        console.log("doSomething_02");
        setData02(data02 + 1);
    };
    const memoizedValue02 = useMemo(() => {
        console.log("memoizedValue02", data02);
        return data02 + data02;
    }, [data02]);
    console.log("描画");
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useMemo" }), _jsx("div", { children: "https://qiita.com/seira/items/42576765aecc9fa6b2f8" }), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", onClick: () => doSomething01(), children: "Click01" }) }), _jsxs("div", { children: ["memoizedValue01:", memoizedValue01] }), _jsx("br", {})] }), _jsxs("div", { className: "field is-grouped", children: [_jsx("div", { className: "control", children: _jsx("button", { className: "button is-link is-light", onClick: () => doSomething02(), children: "Click02" }) }), _jsxs("div", { children: ["memoizedValue02:", memoizedValue02] })] })] }) }));
};
