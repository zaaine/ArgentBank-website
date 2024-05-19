import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import logo from "../../assets/argentBankLogo.png";
import { selectFirstName, selectToken, selectLoading, selectError } from "../../redux/selectors";
import { clearToken, setError } from "../../redux/features/token";
import { setFirstName, clearFirstName } from "../../redux/features/firstName";
import { clearLastName } from "../../redux/features/lastName";
import { getLoginFetch } from "../../utils/api.js";

export default function Header() {
  const firstName = useSelector(selectFirstName);
  const token = useSelector(selectToken);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      getLoginFetch(token)
        .then((obj) => {
          dispatch(setFirstName(obj.firstName));
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
    dispatch(clearFirstName());
    dispatch(clearLastName());
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
            <span className="user">{firstName}</span>
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
