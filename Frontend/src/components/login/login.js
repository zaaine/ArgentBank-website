import React from "react";
import { Route, Navigate } from "react-router-dom";
import Header from "../../features/header/Header";
import Footer from "../footer/Footer";

export function Login() {
  return (
    <div>
      <Header />

      <p> Page Login </p>

      <Footer />
    </div>
  );
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    // Ajouter l'authentification et récupération du token ultérieur avex Axios
    return true; // ou false
  };

  return (
    <Route
      {...rest}
      element={isLogin() ? <Component /> : <Navigate to="/login" />}
    />
  );
};
