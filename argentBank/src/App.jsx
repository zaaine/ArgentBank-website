import React from "react";
import Home from "./pages/Home";
import { HashRouter, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/Home" exact element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
