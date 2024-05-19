import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.css";

// Redux
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

// Store
import { store } from "./app/store"; // store from "./app/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={App} />
    </Provider>
  </React.StrictMode>
);
