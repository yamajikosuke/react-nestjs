import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ColorProvider } from "./ColorProvider";
import { AddColorForm } from "./AddColorForm";
import { ColorList } from "./ColorList";
// import { Breadcrumb } from "./Breadcrumb";
export const ColorApp = () => {
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "Learning React" }), _jsxs(ColorProvider, { children: [_jsx(AddColorForm, {}), _jsx(ColorList, {})] })] }) }));
};
