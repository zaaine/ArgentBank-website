import React from "react";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import UserEdit from "./pages/UserEdit";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Home" exact element={<Logo />} />
        <Route path="/SignIn" exact element={<SignIn />} />
        <Route path="/User" exact element={<User />} />
        <Route path="/User_Edit" exact element={<UserEdit />} />
        <Route path="/SignUp" exact element={<SignUp />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
