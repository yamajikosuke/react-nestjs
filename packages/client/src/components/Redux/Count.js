import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, reset } from "./CounterSlice";
export const Count = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: ["Count\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8:", count] }), _jsx("button", { onClick: () => {
                    dispatch(increase());
                }, children: "Up" }), _jsx("button", { onClick: () => {
                    dispatch(decrease());
                }, children: "Down" }), _jsx("button", { onClick: () => {
                    dispatch(reset());
                }, children: "Reset" })] }));
};
