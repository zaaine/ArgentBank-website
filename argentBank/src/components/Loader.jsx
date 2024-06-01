import { useState, useEffect } from "react"; // Importation des hooks useState et useEffect de React
import PropTypes from "prop-types"; // Importation du module PropTypes pour la validation des types de props

// Le composant Loader accepte deux propriétés optionnelles : timeout et loadingText.
const Loader = ({ timeout, loadingText }) => {
  // Utilisation de l'état local pour gérer la visibilité et l'opacité du composant de chargement.
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  // Utilisation de useEffect pour gérer le comportement du composant.
  useEffect(() => {
    // Définition d'une minuterie pour réduire progressivement l'opacité du composant.
    const fadeOutTimer = setTimeout(() => setOpacity(0), timeout - 500);

    // Définition d'une minuterie pour cacher le composant une fois le temps imparti écoulé.
    const hideTimer = setTimeout(() => setVisible(false), timeout);

    // Utilisation de la fonction de retour pour nettoyer les minuteries lorsque le composant est démonté.
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [timeout]);

  // Si visible est false, le composant ne sera pas rendu (null).
  if (!visible) {
    return null;
  }

  // Rendu du composant de chargement avec l'animation et le texte de chargement.
  return (
    <div className="loader-container" style={{ opacity }}>
      <div className="loader"></div>
      <span className="loader-text">{loadingText}</span>
    </div>
  );
};

// Définition des types des propriétés du composant à des fins de validation.
Loader.propTypes = {
  timeout: PropTypes.number, // Le temps avant que le chargement ne disparaisse.
  loadingText: PropTypes.string, // Le texte affiché pendant le chargement.
};

// Définition des valeurs par défaut pour les propriétés si elles ne sont pas fournies.
Loader.defaultProps = {
  timeout: 5000, // Temps par défaut avant que le chargement ne disparaisse (5 secondes).
  loadingText: "Loading...", // Texte de chargement par défaut.
};

export default Loader;