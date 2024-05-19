import PropTypes from "prop-types"; // Importation du module PropTypes pour la validation des types de props
import { Navigate } from "react-router-dom"; // Importation du composant Navigate de React Router pour la navigation
import { useSelector } from "react-redux"; // Importation du hook useSelector de Redux pour accéder à l'état global de l'application

const PrivateRoute = ({ children }) => {
  // Récupérer le token d'authentification depuis l'état Redux
  const token = useSelector((state) => state.auth.token);

  // Vérifier si un token est présent
  if (token) {
    // Si oui, afficher le contenu des enfants (composants protégés)
    return children;
  } else {
    // Si non, rediriger vers la page de connexion
    return <Navigate to="/sign-in" />;
  }
};

// Valider les props avec PropTypes
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
