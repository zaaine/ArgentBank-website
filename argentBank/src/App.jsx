import React from "react";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Home" exact element={<Logo />} />
        <Route path="/SignIn" exact element={<SignIn />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
