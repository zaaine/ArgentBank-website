import React, { useState } from "react";
import Account from "../components/Account";
import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../actions/authActions";
const Profile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);
  const [editing, setEditing] = useState(false);
  const [NewUserName, setNewUserName] = useState(userName);
  const handleEditClic = () => {
    setEditing(true);
  };
  const handleCancel = () => {
    setEditing(false);
    setNewUserName(userName);
  };
  const handleSave = (e) => {
    e.preventDefault();
    dispatch(editUserName(NewUserName));
    setEditing(false);
  };

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          {!editing && (
            <div>
              <h1>
                Welcome back
                <br />
                {NewUserName}!
              </h1>
              <button className="edit-button" onClick={handleEditClic}>
                Edit Name
              </button>
            </div>
          )}
          {editing && (
            <section className="edit-content">
              <h2>Edit user info</h2>
              <form onSubmit={handleSave}>
                <div className="input-wrapper">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    value={NewUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    autoFocus={true}
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="first-name">First name:</label>
                  <input type="text" id="first-name" value={""} disabled />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="last-name">Last name:</label>
                  <input type="text" id="last-name" value={""} disabled />
                </div>
                <div className="button-wrapper">
                  <button type="submit" className="sign-in-button">
                    Save
                  </button>
                  <button
                    type="button"
                    className="sign-in-button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </section>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
};

export default Profile;
