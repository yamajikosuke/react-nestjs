import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
export const MuiIndex = () => {
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "MUI" }), _jsxs("div", { className: "content", children: [_jsx("a", { href: "https://mui.com/getting-started/usage/", target: "_blank", rel: "noreferrer", children: "https://mui.com/getting-started/usage/" }), _jsx("hr", {}), _jsx(Button, { variant: "contained", onClick: () => {
                                alert("Hello world!");
                            }, children: "Hello World" }), _jsx("hr", {}), _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/mui/typography", children: "Typography" }) }), _jsx("li", { children: _jsx(Link, { to: "/mui/theming", children: "Theming" }) }), _jsx("li", { children: _jsx(Link, { to: "/mui/customize", children: "How to customize" }) })] })] })] }) }));
};
