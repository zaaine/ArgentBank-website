import "./login.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "../../utils/actions";
import { Navigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const { loading, error, data } = useSelector((state) => state.login);

    const handleLogin = (event) => {
        event.preventDefault();
        const { email, password } = credentials;

        if (!email || !password) {
            alert("Email and password are required.");
            return;
        }

        dispatch(getLogin(credentials));
    };

    if (data?.token) {
        return <Navigate to="/profil" />;
    }

    return (
        <main className="container">
            <div className="main bgDark">
                <section className="signInContent">
                    <i className="fa fa-user-circle"></i>
                    <h1 className="title">Sign In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="inputWrapper">
                            <label className="bold" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                            />
                        </div>
                        <div className="inputWrapper">
                            <label className="bold" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>
                        <div className="inputRemember">
                            <input
                                type="checkbox"
                                id="remember-me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label className="labelRemember" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                        {error && <div className="error">{error}</div>}
                        <button type="submit" className="signInButton" disabled={loading}>
                            {loading ? "Loading..." : "Sign In"}
                        </button>
                        {loading && <p>Loading...</p>}
                    </form>
                </section>
            </div>
        </main>
    );
};

export default Login;
console.log(`
		- First Name: Tony
		- Last Name: Stark
		- Email: tony@stark.com
		- Password: password123
		
		- First Name: Steve
		- Last Name: Rogers
		- Email: steve@rogers.com
		- Password: password456
	`);
