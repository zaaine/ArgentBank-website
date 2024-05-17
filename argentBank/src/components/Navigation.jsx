import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <Logo />
      <NavLink
        to="/SignIn"
        className={(nav) => (nav.isActive ? "main-nav-item" : "main-nav-item")}
      >
        <i className="fa fa-user-circle">
          <FaUserCircle />
        </i>
        Sign In
      </NavLink>
    </nav>
  );
};

export default Navigation;
