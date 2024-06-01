import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { logout } from "../app/slices/authSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const { token } = useSelector((state) => state.auth);

  const switchLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
    localStorage.removeItem("AuthToken", token);
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Logo />
      <div className="main-nav-items">
        {token ? (
          <div className="main-nav-logged">
            <div className="main-nav-logged-user">
              <i className="fa fa-user-circle">
                <FaUserCircle />
              </i>
              {user.userName}
            </div>
            <Link to="/" className="main-nav-item" onClick={switchLogout}>
              <i className="fa fa-sign-out">
                <FaArrowRightFromBracket />
              </i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link to="/Sign-in" className="main-nav-item">
            <i className="fa fa-user-circle">
              <FaUserCircle />
            </i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
