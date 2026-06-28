import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./components/Redux/store/store";
import { App } from "./App";
import "./tailwind.css";
import "./api/axios";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

console.log("import.meta.env.DEV:", import.meta.env.DEV);

const bootstrap = async () => {
  // 開発環境だけ MSW を起動
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
    // ★ SW が完全に ready になるまで待つ
    await navigator.serviceWorker.ready;
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
};

void bootstrap();
