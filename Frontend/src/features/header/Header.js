import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";

import "../../css/main.css";

export default function Header() {
  return (
    <div>
      <Link className="main-nav" to="/">
        <img src={Logo} alt="Logo" className="main-nav-logo" />
      </Link>

      <Link className="main-nav-item" to="/Login">
        {" "}
        Sign In{" "}
      </Link>
    </div>
  );
}
