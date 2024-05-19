import React from "react";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Importation du gestionnaire de session
import SessionHandler from "./components/SessionHandler";
import { basename } from "./components/config";

function App() {
  return (
    <Router basename={basename}>
      <SessionHandler />
      <Routes>
        {/* Route normal de l'application */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Home" element={<Logo />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route
          path="/User"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route path="/Error404" element={<ErrorPage />} />
        {/* Gestion des Routes non reconnus */}
        <Route path="*" element={<Navigate to="/Error404" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
