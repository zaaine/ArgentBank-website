import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Navigation from "../components/Navigation";

const SignUp = () => {
  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <section className="sign-up-content">
          <i className="sign-up-icon">
            <FaUserCircle />
          </i>
          <h1>Sign Up</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="mail">Mail</label>
              <input type="text" id="mail" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input type="password" id="confirmpassword" />
            </div>
            {/* PLACEHOLDER DUE TO STATIC SITE */}

            {/* SHOULD BE THE BUTTON BELOW */}
            <Link to="/User">
              <button type="button" className="sign-up-button">
                Sign Up
              </button>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
