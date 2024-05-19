import React from "react";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import HomeScreen from "./pages/Home";
import LoginScreen from "./pages/SignIn";
import RegisterScreen from "./pages/SignUp";
import ProfileScreen from "./pages/UserEdit";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" exact element={<HomeScreen />} />
        <Route path="/home" exact element={<Logo />} />
        <Route path="/login" exact element={<LoginScreen />} />
        <Route path="/register" exact element={<RegisterScreen />} />
        <Route path="/user-profile" exact element={<ProfileScreen />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
