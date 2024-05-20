// import PageTitle from "./PageTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

const FormUser = ()  => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  };

  const handleform = async (e) => {
    e.preventDefault();

    console / log('User data form', email, password)
    
    // ** Permet de garantir que les adresses email saisies sont valides et conformes au format standard **
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a_zA-Z0-9.-]+\.[a-ZA-Z]{2,}$/;

    // ** Validation chanmsp vide
    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    // ** Validation email invalide
    if (password.length < 6 || !emailRegex.test(email)) {
      setErrorMessage("le mo de passe doit contenir au moins 6 caractères");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    try {
      // ** appel de la fonction de connexion en passant l'email et le password **
      const response = await login(email, password);

      // ** Extraction du Token de la reponse **
      const token = response.data.token;

      console.log('login response', response)
      console.log('login token', token)

      if (response.status === 200) {
        // ** Stockage du token dans le localStorage **
        localStorage.setItem("authToken", token);

        // ** Redirection vers la page d'accueil **
        dispatch(
          loginSuccess({
            token,
          })
        );
        navigate("/User");
      }
    } catch (error) {
      //** dispatch l'action"LOGIN_FAIL" avec le message d'erreur */
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.message,
      });
      console.log("login error", error);

      if (error.response && error.response.status === 400) {
        setErrorMessage("Echec de l'authentification. Veuillez vérifier vis identifiants.")
        setTimeout(() => setErrorMessage(""), 5000);
      }
    }
}
 

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
              new customer ? <Link to="/Sign-up">Sign Up</Link>{" "}
              {/* Lien vers la page d'inscription */}
            </p>
          </form>
        </section>
        <div className="notification-container">
          {notification}
          {isLoading && <div className="spinner"></div>}{" "}
          {/* Affichage du spinner de chargement en cas de chargement */}
        </div>
      </main>
    </>
  );
};

export default FormUser;
