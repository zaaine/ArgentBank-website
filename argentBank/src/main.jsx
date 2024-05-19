import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.css";

// Redux
import { Provider } from "react-redux";

// Store
import { store } from "./app/store"; // store from "./app/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
