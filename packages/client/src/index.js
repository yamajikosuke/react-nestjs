import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Redux/store/store";
import { App } from "./App";
const root = document.getElementById("root");
if (!root) {
    throw new Error("Root element not found");
}
ReactDOM.createRoot(root).render(_jsx(BrowserRouter, { children: _jsx(Provider, { store: store, children: _jsx(React.StrictMode, { children: _jsx(App, {}) }) }) }));
