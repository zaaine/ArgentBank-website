import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";
import { logout } from "../app/slices/authSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const { token } = useSelector((state) => state.auth);

  const switchLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate("/Home");
  };

  return (
    <nav className="main-nav">
      <Logo />
      <NavLink
        to="/Sign-in"
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
