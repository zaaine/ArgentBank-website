import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function UserAuthButtton() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(logout()); //suppression du token
        navigate("/"); //redirection page home
    };

    return token ? (
        <Link className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
        </Link>
    ) : (
        <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In{" "}
        </Link>
    );
}
