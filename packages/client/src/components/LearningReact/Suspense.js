import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Suspense = () => {
    return (_jsx("div", {}));
};
const SiteLayout = ({ menu, children }) => {
    return (_jsxs("div", { className: "site-container", children: [_jsx("div", { children: menu }), _jsx("div", { children: children })] }));
};
