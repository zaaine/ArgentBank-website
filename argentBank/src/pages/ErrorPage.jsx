import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Importation du composant Link de React Router pour créer un lien de navigation

const ErrorPage = () => {
  return (
    <>
      <section className="main bg-dark">
        <div className="MissingPage">
          <div className="error">
            <h1>404</h1>
          </div>
          <p>{"Oups! La page que vous demandez n'existe pas."}</p>{" "}
          {/* Message d'erreur affiché */}
          <Link to="/" className="link">
            <FaHome />
            Retourner sur la page d’accueil{" "}
            {/* Lien pour retourner à la page d'accueil */}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
