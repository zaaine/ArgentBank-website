import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Login } from "../components/login/login";
import { PrivateRoute } from "../components/login/login";

import { UserProfile } from "../components/userProfile/UserProfile";

import "./App.css";
// import "../css/main.sass";
import Home from "../components/home/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={<PrivateRoute component={UserProfile} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
