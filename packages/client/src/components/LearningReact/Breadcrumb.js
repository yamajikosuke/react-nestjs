import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { ColorContext } from "./colorContext";
export const Breadcrumb = () => {
    const { formProps } = useContext(ColorContext);
    const location = useLocation();
    const pathname = location.pathname.split("/");
    const search = location.search;
    console.log(formProps);
    const createBreadcrumb = () => {
        const breadCrumb = [];
        const regExpTest = (pattern, name) => {
            return new RegExp(pattern).test(name);
        };
        if (pathname[1] === "colorApp") {
            breadCrumb.push({ label: "一覧", url: "/builder" });
        }
        if (regExpTest("\\d+", pathname[2]) && !pathname[3]) {
            breadCrumb.push({ label: formProps?.name });
        }
        else if (regExpTest("edit", pathname[2]) &&
            regExpTest("\\d+", pathname[3])) {
            breadCrumb.push({
                label: formProps?.name,
                url: `/builder/${formProps?.id}`,
            });
            if (!search) {
                breadCrumb.push({
                    label: "編集",
                });
            }
            else if (search === "edit" || search === "preview") {
                breadCrumb.push({
                    label: search.indexOf("edit") === 1 ? "編集" : "プレビュー",
                });
            }
            else {
                breadCrumb.push({
                    label: "編集",
                });
            }
        }
        return breadCrumb;
    };
    console.log(createBreadcrumb());
    // http://xxxxx/builder/
    // http://xxxxx/builder/1
    // http://xxxxx/builder/edit/1
    // http://xxxxx/builder/edit/1?edit
    // http://xxxxx/builder/edit/1?preview
    return (_jsx("nav", { className: "breadcrumb has-succeeds-separator", "aria-label": "breadcrumbs", children: _jsx("ul", { children: createBreadcrumb().map((item, idx) => {
                return (_jsx("li", { className: !!item.url ? "" : "is-active", children: _jsx(Link, { to: item.url, children: item.label }) }, idx));
            }) }) }));
};
