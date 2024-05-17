import React from "react";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Home" exact element={<Logo />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
