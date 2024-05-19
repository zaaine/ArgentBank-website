import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";

const FormUser = () => {
  const { register, handleSubmit } = useForm();

  const submitForm = (data) => {
    console.log(data.email);
    console.log(data.password);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle">
          <FaUserCircle />
        </i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              {...register("remember-me")}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
};

export default FormUser;
