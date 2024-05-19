import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/index.css";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./app/reducers/root.reducer";

// Store
import process from "process";

const store = configureStore({
  reducer: rootreducer,
  devTools: process.env.NODE_ENV !== "production",
}); // Importer from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
