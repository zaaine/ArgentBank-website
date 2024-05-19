import { useEffect } from "react"; // Importation du hook useEffect de React
import PropTypes from "prop-types"; // Importation du module PropTypes pour la validation des types de props

// Composant qui met à jour le titre de la page en fonction de la propriété "title".
const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
