import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../app/services/authaction";
import { useNavigate, Link } from "react-router-dom";

// import PageTitle from "./PageTitle";
import { FaUserCircle } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const [rememberMe, SetRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const handleLoginEvent = (event) => {
    event.preventDefault();
    let userCredentials = { email, password };
    dispatch(loginUser(userCredentials));
    // setIsLoading(true); Activer le Loader
  };

  // Fonction pour gérer le changement de la case à cocher
  const handleRememberMeChange = (e) => {
    SetRememberMe(e.target.checked);
  }

  useEffect(() => {
    if (token) {
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/User"), 3000);
      // localStorage.setItem("AuthToken", token); Stockage du token dans le LocalStorage
      // setNotification("successfull login. Redirecting..."); Affichage d'une Notification de réussite
    } else {
      setNotification("Login failed; Please try again.");
      setTimeout(() => setNotification(""), 3000)
    }
    setTimeout(() => setIsLoading(false), 3000);
  }, [token, navigate]);

  return (
    <>
    {/* <Pagetitle title="ArgentBank - SignIn Page"/> titre de la Page */}
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
                // checked={rememberMe}
                // onChange={handleRememberMeChange}
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
          {/* {notification && ( */}
          {/* <div className="notification"> */}
          {/* {notification} */}
          {/* {isLoading && <div className="spinner"></div>} */}
          {/* Affichage du spinner de chargement en cas de chargement */}
        </div>
      </main>
    </>
  );
};

export default SignIn;
