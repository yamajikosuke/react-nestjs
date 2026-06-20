import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Posts from "./components/Post";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, //デフォルトでコンポーネントにフォーカスが当たるとフェッチするのを無効化
        },
    },
});
export const App = () => {
    const [postId, setPostId] = useState(-1);
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "UseQuery" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "https://qiita.com/A-Yuki28/items/1224e19c86bbcd4d4890", target: "_blank", rel: "noreferrer", children: "TanstackQuery\u306B\u5165\u9580\u3057\u3066\u307F\u308B" }) }), _jsx("li", { children: _jsx("a", { href: "https://react-query.tanstack.com/overview", target: "_blank", rel: "noreferrer", children: "TanstackQuery\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8" }) }), _jsx("li", { children: _jsx("a", { href: "https://react-query.tanstack.com/devtools", target: "_blank", rel: "noreferrer", children: "ReactQueryDevtools" }) }), _jsx("li", { children: _jsx("a", { href: "https://zenn.dev/rasshii/books/learning-react-2026/viewer/20-tanstack-query", target: "_blank", rel: "noreferrer", children: "\u30C7\u30FC\u30BF\u30D5\u30A7\u30C3\u30C1\u30F3\u30B0\uFF08TanStack Query\uFF09" }) }), _jsx("li", { children: _jsx("a", { href: "https://zenn.dev/taisei_13046/books/133e9995b6aadf/viewer/c22ed5", target: "_blank", rel: "noreferrer", children: "useQuery\u306E\u57FA\u672C\uFF08\u30C7\u30FC\u30BF\u53D6\u5F97\uFF09" }) })] }), _jsx("hr", {}), _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(Posts, { setPostId: setPostId }), _jsx(ReactQueryDevtools, {})] })] }) }));
};
