import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../app/actions/authActions";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Navigation from "../components/Navigation";

const SignUp = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate("/User");
    if (userInfo) navigate("/User");
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    if (data.password !== data.confirmpassword) {
      alert("Password mismatch");
      return;
    }
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <>
      <Navigation />
      <main className="main bg-dark">
        <section className="sign-up-content">
          <i className="sign-up-icon">
            <FaUserCircle />
          </i>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit(submitForm)}>
            {error && <Error>{error}</Error>}
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                {...register("username")}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="mail">Mail</label>
              <input type="text" id="mail" {...register("email")} required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                {...register("firstname")}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                {...register("lastname")}
                required
              />
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
            <div className="input-wrapper">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                id="confirmpassword"
                {...register("confirmpassword")}
                required
              />
            </div>
            {/* PLACEHOLDER DUE TO STATIC SITE */}

            {/* SHOULD BE THE BUTTON BELOW */}
            <Link to="/User">
              <button
                type="submit"
                className="sign-up-button"
                disabled={loading}
              >
                {/* {loading ? <Spinner /> : "Sign Up"} */}
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
