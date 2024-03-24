import React from "react";
import logo from "../assets/argentBankLogo.webp";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/authActions";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {userName}
        </NavLink>
        <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </NavLink>
      </div>
    </nav>
  );
};

export default ProfileHeader;
