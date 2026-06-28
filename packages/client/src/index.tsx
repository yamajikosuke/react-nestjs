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
  const isHttps = window.location.protocol === "https:";
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  if (isHttps || isLocalhost) {
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
