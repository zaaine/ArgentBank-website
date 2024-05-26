import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { loginUser } from "../app/services/authaction";
import { useNavigate, Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

import { FaUserCircle } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    /* Récupérer les données du "RemeberMe" depuis le LocalStorage */
    const storedEmail = localStorage.getItem("email");
    const storedRemeberMe = localStorage.getItem("rememberMe") === "true";
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(storedRemeberMe);
    }
  }, []);

  const handleLoginEvent = (event) => {
    event.preventDefault();
    let userCredentials = { email, password };
    dispatch(loginUser(userCredentials));
    // setIsLoading(true); Activer le Loader

    /* Enregistrer les donénes du "Remember Me dans le localStorage */
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("rememberMe", rememberMe.toString());
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("rememberMe");
    }
  };

  // Fonction pour gérer le changement de la case à cocher
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    if (token) {
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/User"), 2000);
      localStorage.setItem(
        "AuthToken",
        token
      ); /* Stockage du token dans le LocalStorage */
      setNotification(
        "Connexion résussie. Redirection..."
      ); /* Affichage d'une Notification de réussite */
    } else {
      if (token && handleLoginEvent) {
        setNotification("La Connexion a échoué. Veuillez réessayer.");
        setTimeout(() => setNotification(""), 2000);
      } else {
        setTimeout(() => setIsLoading(false), 2000);
      }
    }
  }, [token, navigate]);

  return (
    <>
      <PageTitle title="ArgentBank - SignIn Page" />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle">
            <FaUserCircle />
          </i>
          <h1>Sign In</h1>
          <form onSubmit={handleLoginEvent}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-required="true"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Mot de Passe"
                aria-required="true"
                required
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign in
            </button>{" "}
            {/* Bouton de Connexion */}
            <p>
              {" "}
              new customer ? <Link to="/Sign-up">Sign Up</Link>{" "}
              {/* Lien vers la page d'inscription */}
            </p>
          </form>
        </section>
        <div className="notification-container">
          {notification && (
            <div className="notification">
              {notification}
              {isLoading && <div className="spinner"></div>}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default SignIn;
