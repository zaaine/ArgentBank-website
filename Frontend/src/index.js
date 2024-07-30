import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { Login } from "./components/login/login";
import { UserProfile } from "./components/userProfile/UserProfile";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  PrivateRoute,
  Redirect,
} from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <PrivateRoute
          path="/user"
          component={UserProfile}
          isAuthenticated={isAuthenticated}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
