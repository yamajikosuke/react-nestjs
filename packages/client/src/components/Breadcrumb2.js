import { jsx as _jsx } from "react/jsx-runtime";
import { useLocation, Link } from "react-router-dom";
export const Breadcrumb2 = () => {
    const location = useLocation();
    const pathname = location.pathname.split("/");
    const search = location.search;
    const createBreadcrumb = () => {
        const breadCrumb = [];
        const regExpTest = (exp, name) => {
            return new RegExp(exp).test(name);
        };
        if (pathname[1] === "fa") {
            breadCrumb.push({ label: "一覧", url: "/builder" });
        }
        if (regExpTest("\\d+", pathname[2]) && !pathname[3]) {
            breadCrumb.push({ label: "フォーム名" });
        }
        else if (regExpTest("edit", pathname[2]) &&
            regExpTest("\\d+", pathname[3])) {
            breadCrumb.push({ label: "フォーム名", url: "/builder/1" });
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
