import React from "react";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Home" exact element={<Logo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
