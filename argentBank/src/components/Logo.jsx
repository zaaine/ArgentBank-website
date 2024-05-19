import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="main-nav-logo">
      <h1 className="sr-only">Argent Bank</h1>
      <Link to="/Home">
        <img
          className="main-nav-logo-image"
          src="../designs/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
