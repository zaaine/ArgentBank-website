import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLoginFetch } from "../../utils/api";
import { selectFirstName, selectToken, selectLoading, selectError, clearToken, clearFirstName, clearLastName, setError, setFirstName } from "../../redux/reducers";
import logo from "../../assets/argentBankLogo.png";
import "./header.scss";

export default function Header() {
  const firstName = useSelector(selectFirstName);
  const token = useSelector(selectToken);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const userData = await getLoginFetch(token);
          dispatch(setFirstName(userData.firstName));
          if (!userData.id) {
            dispatch(clearToken());
            localStorage.removeItem("token");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          dispatch(setError(error.message));
        }
      }
    };

    fetchUserData();
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
