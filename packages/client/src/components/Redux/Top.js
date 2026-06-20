import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./CounterSlice";
import { input, validate, clear } from "./FormSlice";
import { getUsers } from "./UsersSlice";
import { getHero, get3Heros } from "./gachaSlice";
import { Count } from "./Count";
import { Link } from "react-router-dom";
// import { store } from "./store/store";
export const ReduxTop = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    const text = useSelector((state) => state.form.text);
    const { users, loading, error } = useSelector((state) => state.users);
    const gacha = useSelector((state) => state.gacha);
    const isValid = useSelector((state) => state.form.isValid);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    const handleOnchange = (e) => {
        dispatch(input(e.currentTarget.value));
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Redux" }), _jsxs("div", { children: [_jsx("a", { href: "https://reffect.co.jp/react/react-redux-for-beginner", target: "_blank", rel: "noreferrer", children: "https://reffect.co.jp/react/react-redux-for-beginner" }), _jsx("br", {}), _jsx("a", { href: "https://qiita.com/japanesebonobo/items/843753903fdfa173f516", target: "_blank", rel: "noreferrer", children: "https://qiita.com/japanesebonobo/items/843753903fdfa173f516" })] }), _jsx("hr", {}), _jsx("h2", { className: "subtitle", children: "Todo" }), _jsx(Link, { to: "/Redux/todo", children: "Todo" }), _jsx("hr", {}), _jsx("h2", { className: "subtitle", children: "\u30AC\u30C1\u30E3" }), _jsxs("div", { className: "control", children: [_jsx("button", { className: "button is-link", onClick: () => {
                                dispatch(getHero());
                            }, children: "1\u56DE\u53EC\u559A" }), _jsx("button", { className: "button is-link", onClick: () => {
                                dispatch(get3Heros());
                            }, children: "3\u56DE\u53EC\u559A" })] }), gacha.map((hero, index) => {
                    return _jsx("div", { children: hero.name }, index);
                }), _jsx("hr", {}), _jsx("a", { href: "https://reffect.co.jp/react/redux-toolkit", target: "_blank", rel: "noreferrer", children: "https://reffect.co.jp/react/redux-toolkit" }), _jsx("br", {}), _jsx(_Fragment, { children: count }), _jsxs("div", { children: [_jsx("button", { onClick: () => dispatch(increase()), children: "Up" }), _jsx("button", { onClick: () => dispatch(decrease()), children: "down" })] }), _jsx("hr", {}), _jsx("div", { children: "\u5225\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8" }), _jsx(Count, {}), _jsx("hr", {}), _jsx(_Fragment, { children: text }), _jsx("div", { children: _jsx("input", { name: "text", type: "input", className: "input", onChange: handleOnchange, value: text }) }), _jsx("button", { onClick: () => dispatch(validate(text)), children: "validate" }), !isValid && "数字ではありません。", _jsx("div", { children: _jsx("button", { onClick: () => dispatch(clear()), children: "\u30AF\u30EA\u30A2" }) }), _jsx("hr", {}), _jsx("h2", { children: "User" }), loading && _jsx("p", { children: "Loading" }), error && _jsx("p", { children: "\u30C7\u30FC\u30BF\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002" }), users &&
                    users.map((user, index) => _jsx("div", { children: user.name }, index))] }) }));
};
