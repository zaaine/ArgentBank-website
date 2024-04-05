import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserName } from "../actions/authActions";

const EditForm = () => {
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
    </div>
  );
};

export default EditForm;
