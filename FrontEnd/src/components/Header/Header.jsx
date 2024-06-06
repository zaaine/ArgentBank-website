import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import logo from "../../assets/argentBankLogo.png";
import { selectUserName, selectToken, selectLoading, selectError } from "../../redux/selectors";
import { clearToken, setError } from "../../redux/reducers.js";
import { setUserName, clearUserName } from "../../redux/reducers.js";
import { getLoginFetch } from "../../utils/api/user.js";

export default function Header() {
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      getLoginFetch(token)
        .then((obj) => {
          dispatch(setUserName(obj.userName));
          if (obj.id === null) {
            dispatch(clearToken());
            localStorage.removeItem("token");
          }
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          dispatch(setError(error.message));
        });
    }
  }, [token, dispatch]);

  const handleLogout = () => {
    dispatch(clearToken());
    dispatch(clearUserName());
    localStorage.removeItem("token");
  };

  return (
    <nav className="mainNav">
      <Link to="/">
        <img className="mainNavLogoImage" src={logo} alt="Argent Bank Logo" />
        <h1 className="srOnly">Argent Bank</h1>
      </Link>
      {!token ? (
        <Link to="/login" className="mainNavItem">
          <i className="fa fa-user-circle"></i>
          <span className="signIn">Sign In</span>
        </Link>
      ) : (
        <>
          <Link to="/profil" className="mainNavItem">
            <i className="fa fa-user-circle"></i>
            <span className="user">{userName}</span>
          </Link>
          <Link to="/" className="mainNavItem" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </>
      )}
      {loading && <span className="loading">Loading...</span>}
      {error && <span className="error">{error}</span>}
    </nav>
  );
}
