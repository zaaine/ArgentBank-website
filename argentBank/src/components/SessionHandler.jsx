import { useEffect } from "react"; // Importation du hook useEffect de React
import { useDispatch } from "react-redux"; // Importation du hook useDispatch de React Redux
import { useNavigate } from "react-router-dom"; // Importation du hook useNavigate de React Router
import { restoreSession, fetchUserProfileAsync } from "../app/slice/authSlice"; // Importation des actions depuis le slice "authSlice" pour la gestion de la session utilisateur

/**
 * Composant SessionHandler
 * Ce composant gère la restauration de la session utilisateur.
 * Il vérifie si un token est stocké dans localStorage et, le cas échéant,
 * il dispatche des actions pour restaurer la session et récupérer le profil utilisateur,
 * puis redirige vers la page de profil utilisateur.
 */
function SessionHandler() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérification de la présence d'un token dans localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Restauration de la session et récupération du profil utilisateur
      dispatch(restoreSession(token));
      dispatch(fetchUserProfileAsync());

      // Redirection vers la page utilisateur
      navigate("/user");
    }
  }, [dispatch, navigate]); // Dépendances de l'effet

  return null; // Ce composant ne rend rien
}

export default SessionHandler;
