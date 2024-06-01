import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import Navigation from "./components/Navigation";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* Route normal de l'application */}
        <Route path="/" exact element={<Home />} />
        <Route path="/" exact element={<Logo />} />
        <Route path="/Sign-in" exact element={<SignIn />} />
        <Route path="/Sign-up" exact element={<SignUp />} />
        <Route path="/User" exact element={<User />} />
        <Route path="/404" exact element={<ErrorPage />} />
        {/* Gestion des Routes non reconnus */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
