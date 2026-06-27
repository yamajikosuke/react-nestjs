import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./components/Redux/store/store";
import { App } from "./App";
import "./tailwind.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

console.log("import.meta.env.DEV:", import.meta.env.DEV);
// 開発環境だけ MSW を起動
if (import.meta.env.DEV) {
  (async () => {
    const { worker } = await import("./mocks/browser");
    await worker.start();
  })();
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
);
