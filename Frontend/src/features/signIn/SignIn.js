import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import "../../css/main.css";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(login({ email, password }));
        console.log(result); // Vérifie le résultat de l'action
        if (login.fulfilled.match(result)) {
            console.log("Login successful, navigating to /userProfile");
            navigate("/userProfile");
        } else {
            alert(error);
        }
    };

    return (
        <div>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </div>
    );
}
