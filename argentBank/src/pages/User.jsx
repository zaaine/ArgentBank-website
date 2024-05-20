// import PageTitle from "../components/layout/PageTitle"; // Importer le composant PageTitle depuis le chemin spécifié

import { useDispatch, useSelector } from "react-redux"; // Importer les fonctions useDispatch et useSelector depuis react-redux
import { useEffect, useState } from "react"; // Importer les fonctions useEffect et useState depuis React

// Définir le composant User
const User = () => {
  const dispatch = useDispatch(); // Initialiser la fonction dispatch pour envoyer des actions Redux
  const [notification, setNotification] = useState(""); // Initialiser un état local pour la notification
  const user = useSelector((state) => state.auth.user); // Sélectionner les informations de l'utilisateur à partir du store Redux
  const [editMode, setEditMode] = useState(false); // Initialiser un état local pour le mode d'édition

  // Utiliser useEffect pour effectuer des actions lorsque l'utilisateur ou le mode d'édition change
  useEffect(() => {
    if (user && !editMode) {
      // Mettre à jour formData avec les données de l'utilisateur si l'utilisateur est chargé et que le mode d'édition n'est pas activé
      setFormData({
        userName: user.userName || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
      });
    }
  }, [user, editMode]);

  const [formData, setFormData] = useState({
    userName: user?.userName || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
  });

  if (!user && !editMode) {
    return <div>Loading user data...</div>; // Afficher un message de chargement si l'utilisateur n'est pas disponible et le mode d'édition n'est pas activé
  }

  const handleEdit = () => {
    setEditMode(true); // Activer le mode d'édition
  };

  const handleCancel = () => {
    setEditMode(false); // Annuler le mode d'édition
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Mettre à jour les données du formulaire lorsqu'un champ est modifié
  };

  const handleSave = async () => {
    try {
      // Envoyer une demande pour mettre à jour le profil de l'utilisateur avec les nouvelles informations
      await dispatch(
        updateUserProfileAsync({ userName: formData.userName })
      ).unwrap();
      setNotification("Changes saved successfully.");
      setTimeout(() => setNotification(""), 3000); // Masquer la notification après 3 secondes
      setEditMode(false); // Désactiver le mode d'édition après avoir enregistré les modifications
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
      setNotification("Failed to save changes.");
      setTimeout(() => setNotification(""), 3000);
    }
  };
  return (
    <>
      <PageTitle title="ArgentBank - HomePage" />
      <main className="main bg-dark">
        {notification && <div className="notification">{notification}</div>}
        {!editMode ? (
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName} !
            </h1>
            <button className="edit-button" onClick={handleEdit}>
              Edit Name
            </button>
          </div>
        ) : (
          <section className="edit-content">
            <h1>Edit User Info</h1>
            <div className="input-wrapper">
              <label htmlFor="username">User Name :</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">First Name :</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                disabled
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="username">Last name :</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                disabled
              />
            </div>

            <div className="edit-button-wrapper">
              <button className="save-edit-button" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-edit-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </section>
        )}
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default User;
