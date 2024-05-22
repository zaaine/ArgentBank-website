import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../app/services/useraction";
import PageTitle from "../components/PageTitle";

// import PageTitle from "../components/layout/PageTitle"; // Importation du composant PageTitle depuis le répertoire "../components/layout/PageTitle"
import { FaUserCircle } from "react-icons/fa";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [notification, setNotification] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fonction appelée lorsqu'un champ du formulaire est modifié
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Fonction appelée lorsqu'un formulaire est soumis
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Activer le loader

    if (formData.password !== formData.confirmPassword) {
      setNotification("The passwords do not match.");
      return;
    }

    try {
      // Appel de l'action signupUser pour l'inscription
      await dispatch(
        getUserInfo({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          userName: formData.userName,
        })
      ).unwrap();
      setNotification("Registration successful. Redirecting...");
      setTimeout(() => navigate("/Sign-in"), 3000);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      setNotification("Registration failed. Please try again.");
    } finally {
      setTimeout(() => setIsLoading(false), 3000);
    }
  };

  return (
    <>
      <PageTitle title="ArgentBank - SignUp Page" />
      <main className="main bg-dark">
        <section className="sign-up-content">
          <i className="fa fa-user-circle sign-in-icon">
            <FaUserCircle />
          </i>
          <h1>Sign Up</h1>
          <div className="notification-container">
            {notification && (
              <div className="notification">
                {notification}
                {isLoading && <div className="spinner"></div>}
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                onChange={handleChange}
                aria-required="true"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Mail</label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                aria-required="true"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                onChange={handleChange}
                aria-required="true"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                onChange={handleChange}
                aria-required="true"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                aria-required="true"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                onChange={handleChange}
                aria-required="true"
                required
              />
            </div>
            <button type="submit" className="sign-up-button">
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default SignUp;
