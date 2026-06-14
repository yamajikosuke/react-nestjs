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

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">UseQuery</h1>
        <ul>
          <li>
            <a
              href="https://qiita.com/A-Yuki28/items/1224e19c86bbcd4d4890"
              target="_blank"
              rel="noreferrer"
            >
              TanstackQueryに入門してみる
            </a>
          </li>
          <li>
            <a
              href="https://react-query.tanstack.com/overview"
              target="_blank"
              rel="noreferrer"
            >
              TanstackQuery公式ドキュメント
            </a>
          </li>
          <li>
            <a
              href="https://react-query.tanstack.com/devtools"
              target="_blank"
              rel="noreferrer"
            >
              ReactQueryDevtools
            </a>
          </li>
          <li>
            <a
              href="https://zenn.dev/rasshii/books/learning-react-2026/viewer/20-tanstack-query"
              target="_blank"
              rel="noreferrer"
            >
              データフェッチング（TanStack Query）
            </a>
          </li>
          <li>
            <a
              href="https://zenn.dev/taisei_13046/books/133e9995b6aadf/viewer/c22ed5"
              target="_blank"
              rel="noreferrer"
            >
              useQueryの基本（データ取得）
            </a>
          </li>
        </ul>
        <hr />
        <QueryClientProvider client={queryClient}>
          <Posts setPostId={setPostId} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </div>
    </section>
  );
};
