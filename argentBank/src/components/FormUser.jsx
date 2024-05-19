// import PageTitle from "./PageTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, fetchUserProfileAsync } from "../app/slice/authSlice";
import { FaUserCircle } from "react-icons/fa";

const FormUser = () => {
  const dispatch = useDispatch(); // Obtention de la fonction dispatch depuis Redux
  const navigate = useNavigate(); // Obtention de la fonction navigate depuis React Router
  const [notification, setNotification] = useState(""); // État pour gérer les notifications
  const [email, setEmail] = useState(""); // État pour le nom d'utilisateur
  const [password, setPassword] = useState(""); // État pour le mot de passe
  const [rememberMe, setRememberMe] = useState(false); // État pour gérer la case à cocher "Se souvenir de moi"
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargementconst { register, handleSubmit } = useForm();

  // Fonction pour gérer le changement de la case à cocher "Se souvenir de moi"
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    setIsLoading(true); // Active le loader

    try {
      const token = await dispatch(
        loginUser({ email: email, password })
      ).unwrap(); // Appel de l'action loginUser avec les informations d'identification
      if (rememberMe) {
        localStorage.setItem("token", token); // Stockage du token dans le localStorage si "Se souvenir de moi" est activé
      }
      await dispatch(fetchUserProfileAsync()).unwrap(); // Appel de l'action fetchUserProfileAsync pour récupérer le profil utilisateur
      setNotification("Successful login. Redirecting..."); // Affichage d'une notification de réussite
      setTimeout(() => navigate("/user"), 3000); // Redirection vers la page utilisateur après 3 secondes
    } catch (error) {
      console.error(
        "Erreur lors de la connexion ou de la récupération du profil :",
        error
      );
      setNotification("Login failed. Please try again."); // Affichage d'une notification d'échec
      setTimeout(() => setNotification(""), 3000); // Suppression de la notification après 3 secondes
    } finally {
      setTimeout(() => setIsLoading(false), 3000); // Désactivation du loader après 3 secondes
    }
  };

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle">
            <FaUserCircle />
          </i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Formulaire de Conenxion */}
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
              new customer ? <Link to="/sign-up">Sign Up</Link>{" "}
              {/* Lien vers la page d'inscription */}
            </p>
          </form>
        </section>
        <div className="notifiaction-container">
          {notification}
          {isLoading && <div className="spinner"></div>}{" "}
          {/* Affichage du spinner de chargement en cas de chargement */}
        </div>
      </main>
    </>
  );
};

export default FormUser;
