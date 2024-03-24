import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/authActions";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const redirectPath = await dispatch(login(email, password));
      navigate(redirectPath);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div>
      {error && <p style={{ color: "red" }}>Error during login</p>}
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
};

export default LoginForm;
