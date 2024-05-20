// import PageTitle from "./PageTitle";
import { FaUserCircle } from "react-icons/fa";

const FormUser = () => {
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
