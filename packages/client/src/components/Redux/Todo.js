import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./TodoSlice";
// import { store } from "./store/store";
export const ReduxTodo = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state.todos);
    useEffect(() => {
        console.log("Todo-useEffect");
        dispatch(getTodos());
    }, [dispatch]);
    const handleOnchange = (e) => {
        // dispatch(input(e.currentTarget.value));
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Todo" }), todos &&
                    todos.map((todo, index) => (_jsxs("div", { children: [todo.id, todo.data] }, index))), _jsx("hr", {}), _jsx("div", { className: "controll", children: _jsx("input", { name: "todo", type: "input", className: "input", onChange: handleOnchange }) })] }) }));
};
