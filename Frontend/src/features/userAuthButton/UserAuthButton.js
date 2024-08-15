import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { clearUserProfile } from "../../redux/slices/userProfileSlice";

export default function UserAuthButtton() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = () => {
        dispatch(logout());
        dispatch(clearUserProfile());
        navigate("/");
    };

    const userProfile = useSelector((state) => state.userProfile);

    return token ? (
        <div className="main-nav-item">
            <div className="user-profile">
                <i className="fa fa-user-circle"></i>
                {userProfile.userName}{" "}
            </div>

            <Link className="main-nav-item" onClick={handleSignOut}>
                <span className="spacer"></span>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </Link>
        </div>
    ) : (
        <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i> Sign In{" "}
        </Link>
    );
}
