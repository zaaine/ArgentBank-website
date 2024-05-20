import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import Navigation from "./components/Navigation";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        {/* Route normal de l'application */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Home" element={<Logo />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/User" element={<User />} />
        <Route path="/404" element={<ErrorPage />} />
        {/* Gestion des Routes non reconnus */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
