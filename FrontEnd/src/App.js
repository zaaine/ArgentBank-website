import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Error from "./pages/Error/Error.jsx";
import Profil from "./pages/Profil/Profil.jsx";
import Logout from "./pages/Logout/Logout.jsx";
import './styles/normalize.scss';
import './styles/global.scss';

export default function App() {
  return (
    <>
      <Header /> 
      <Routes> 
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/profil" element={<Profil />} /> 
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer text="Copyright 2020 Argent Bank" /> 
    </>
  );
}
