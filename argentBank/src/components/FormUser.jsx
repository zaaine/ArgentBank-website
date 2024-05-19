import { useState } from "react";
import { authLogin, userProfile } from "../app/api";
import { useDispatch } from "react-redux";
import { setLogin, setToken, setUser } from "../app/actions/userAction";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem("rememberMe") === "true"
  );
  const [errorLoginMessage, setErrorLoginMessage] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await authLogin({
        email: email,
        password: password,
      });

      if (response.status === 200) {
        dispatch(setLogin(true));
        dispatch(setToken(response.body.token));
        const profile = await userProfile(response.body.token);
        const data = await profile.body;
        dispatch(setUser(data));
        navigate("/userLogin");
        console.log(data);
        console.log(response.body.token);

        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          localStorage.setItem("rememberMe", "false");
        }
      }

      if (response.status === 400) {
        setErrorLoginMessage(true);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  let errorMessage = null;
  if (errorLoginMessage) {
    errorMessage = (
      <p style={{ color: "red" }}>
        Error in Email or password! Please try again
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign in
      </button>
      {errorMessage}
    </form>
  );
}
