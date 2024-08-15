import React, { useState } from "react";
import "../../css/main.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../redux/slices/editProfilSlice";

export default function EditProfile({ closeForm }) {
    const dispatch = useDispatch();
    const { firstName, lastName, userName } = useSelector(
        (state) => state.userProfile
    );

    const { loading, error } = useSelector((state) => state.editProfile);

    const [newUserName, setNewUserName] = useState(userName);

    const handleSave = async () => {
        try {
            await dispatch(updateUserName(newUserName)).unwrap();
            closeForm();
        } catch (error) {
            console.error("update username failled", error);
        }
    };

    return (
        <div className="edit-container">
            <h2> Edit user info</h2>
            <form>
                <div className="input-wrapper">
                    <label className="firstName"> User Name : </label>
                    <input
                        type="text"
                        id="usertName"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <label className="firstName"> First Name : </label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        readOnly
                        className="read-only"
                    />
                </div>

                <div className="input-wrapper">
                    <label className="firstName"> Last Name : </label>
                    <input
                        type="text"
                        id="lasttName"
                        value={lastName}
                        readOnly
                        className="read-only"
                    />
                </div>

                {error && <p className="error-message"> {error}</p>}

                <div className="button-group">
                    <button
                        type="button"
                        onClick={handleSave}
                        className="edit-button_action"
                        disabled={loading}
                    >
                        {loading ? "saving..." : "Save"}
                    </button>
                    <button
                        type="button"
                        onClick={closeForm}
                        className="edit-button_action"
                    >
                        {"cancel"}
                    </button>
                </div>
            </form>
        </div>
    );
}
