import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { ColorContext, ContextProps } from "./colorContext";

export const Breadcrumb: React.FC = () => {
  const { formProps } = useContext<ContextProps>(ColorContext);
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const search = location.search;
  console.log(formProps);

  type BreadCrumbType = { label: string | undefined; url?: string };

  const createBreadcrumb = (): BreadCrumbType[] => {
    const breadCrumb: BreadCrumbType[] = [];
    const regExpTest = (pattern: string, name: string): boolean => {
      return new RegExp(pattern).test(name);
    };

    if (pathname[1] === "colorApp") {
      breadCrumb.push({ label: "一覧", url: "/builder" });
    }
    if (regExpTest("\\d+", pathname[2]) && !pathname[3]) {
      breadCrumb.push({ label: formProps?.name });
    } else if (
      regExpTest("edit", pathname[2]) &&
      regExpTest("\\d+", pathname[3])
    ) {
      breadCrumb.push({
        label: formProps?.name,
        url: `/builder/${formProps?.id}`,
      });
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
