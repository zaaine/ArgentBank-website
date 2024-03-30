import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";

import Home from "./Pages/Home";

import Layout from "./Pages/Layout";
import Error from "./Pages/Error";
import Profile from "./Pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
