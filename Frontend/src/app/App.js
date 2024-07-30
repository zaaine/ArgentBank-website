import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "../components/home/Home";
import Login from "../components/login/Login";
import PrivateRoute from "../components/login/PrivateRoute";
import { UserProfile } from "../components/userProfile/UserProfile";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/userProfile"
            element={<PrivateRoute component={UserProfile} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
