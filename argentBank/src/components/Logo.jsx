import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src="./src/assets/img/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
    </Link>
  );
};

export default Logo;
