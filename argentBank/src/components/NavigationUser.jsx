import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";
import { IoPowerSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { BsFillSafe2Fill } from "react-icons/bs";

const NavigationUser = () => {
  return (
    <nav className="main-nav">
      <BsFillSafe2Fill />
      <Logo />
      <NavLink
        to="/Sign_In"
        className={(nav) => (nav.isActive ? "main-nav-item" : "main-nav-item")}
      >
        <i className="fa fa-user-circle">
          <FaUserCircle />
        </i>
        Sign In
      </NavLink>
      <FaCircleUser />
      <MdOutlineSettings />
      <IoPowerSharp />
    </nav>
  );
};

export default NavigationUser;
