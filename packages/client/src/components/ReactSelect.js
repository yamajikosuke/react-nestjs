import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Select from "react-select";
export const ReactSelect = () => {
    // const [, setValue] = useState<OptionsType<OptionType>>();
    const items = [
        { value: 1, label: "taro" },
        { value: 2, label: "hanako" },
    ];
    const handleOnChange = () => {
        // console.log(data);
        // setValue(data);
    };
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React Select" }), _jsx("div", { className: "field", children: _jsx("div", { className: "control", children: _jsx(Select, { isMulti: true, options: items, onChange: handleOnChange }) }) })] }) }));
};
