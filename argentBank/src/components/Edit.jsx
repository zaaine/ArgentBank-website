import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../app/services/useraction";
import { setNewUsername } from "../app/slices/authSlice";

export default function Edit({ onCancel }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [newUserName, setUsername] = useState(user.userName);
  const [firstname, setFirstname] = useState(user.firstName);
  const [lastname, setLastname] = useState(user.lastName);
  const [isActive, setIsActive] = useState(false);

  const handleCancel = () => {
    event.preventDefault();
    onCancel();
  };

  const handleSave = (event) => {
    event.preventDefault();
    const response = updateUsername(token, newUserName, dispatch);
    if (response) {
      dispatch(setNewUsername(newUserName));
      onCancel();
    }
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <form>
        <div className="edit-container">
          <div className="input-wrapper">
            <h1>Edit user info</h1>
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              id="username"
              value={newUserName}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="on"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First name:</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              disabled
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last name:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              disabled
            />
          </div>
          <button type="button" className="sign-in-button" onClick={handleSave}>
            Save
          </button>
          <button
            type="button"
            className="sign-in-button"
            onClick={() => {
              handleCancel();
              handleClick();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
