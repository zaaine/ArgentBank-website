/**
 * Composant Footer
 * Ce composant affiche le pied de page de l'application.
 */

const Footer = () => {
  // Affichage l'année actuelle
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Copyright {currentYear} Argent Bank</p>
    </footer>
  );
};

export default Footer;
