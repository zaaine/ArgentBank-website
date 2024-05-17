import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Navigation from "../components/Navigation";

const SignIn = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="sign-in-icon">
            <FaUserCircle />
          </i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* PLACEHOLDER DUE TO STATIC SITE */}

            {/* SHOULD BE THE BUTTON BELOW */}
            <Link to="/User">
              <button type="button" className="sign-in-button">
                Sign In
              </button>
            </Link>
            <div className="customer">
              new customer ?{" "}
              <Link to="/SignUp">
                <p className="link">Sign Up</p>
              </Link>{" "}
              {/* Lien vers la page d'inscription */}
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignIn;
