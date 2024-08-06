import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import UserAuthButtton from "../userAuthButton/UserAuthButton";
import "../../css/main.css";

export default function Header() {
    return (
        <div className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    src={argentBankLogo}
                    alt="Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <UserAuthButtton />
        </div>
    );
}
