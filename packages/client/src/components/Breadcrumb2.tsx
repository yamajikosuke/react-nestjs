import React from "react";
import { useLocation, Link } from "react-router-dom";

export const Breadcrumb2: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const search = location.search;

  type BreadCrumbType = { label: string; url?: string };

  const createBreadcrumb = (): BreadCrumbType[] => {
    const breadCrumb: BreadCrumbType[] = [];
    const regExpTest = (exp: string, name: string): boolean => {
      return new RegExp(exp).test(name);
    };

    if (pathname[1] === "fa") {
      breadCrumb.push({ label: "一覧", url: "/builder" });
    }
    if (regExpTest("\\d+", pathname[2]) && !pathname[3]) {
      breadCrumb.push({ label: "フォーム名" });
    } else if (
      regExpTest("edit", pathname[2]) &&
      regExpTest("\\d+", pathname[3])
    ) {
      breadCrumb.push({ label: "フォーム名", url: "/builder/1" });
      if (!search) {
        breadCrumb.push({
          label: "編集",
        });
      } else if (search === "edit" || search === "preview") {
        breadCrumb.push({
          label: search.indexOf("edit") === 1 ? "編集" : "プレビュー",
        });
      } else {
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

  return (
    <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        {createBreadcrumb().map((item, idx) => {
          return (
            <li className={!!item.url ? "" : "is-active"} key={idx}>
              <Link to={item.url}>{item.label}</Link>
            </li>
          );
        })}
        {/* <li>
          <a href="#test">Bulma</a>
        </li>
        <li>
          <a href="#test">Documentation</a>
        </li>
        <li>
          <a href="#test">Components</a>
        </li>
        <li className="is-active">
          <a href="#test" aria-current="page">
            Breadcrumb
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
