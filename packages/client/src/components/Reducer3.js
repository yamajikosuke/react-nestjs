import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from "react";
export const Reducer3 = () => {
    // const [checked, setChecked] = useState<boolean>(false);
    const [checked, toggle] = useReducer((checked) => !checked, false);
    // const toggle = () => {
    //   setChecked((checked) => !checked);
    // };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useReducer\uFF08Learning React: Improving Code with useReducer\uFF09" }), _jsx("div", { children: _jsx("input", { type: "checkbox", checked: checked, onChange: toggle }) }), _jsx("div", { children: checked ? "checked" : "not checked" })] }) }));
};
