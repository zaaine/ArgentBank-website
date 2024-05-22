import "./profil.scss";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProfile, saveUserProfile } from "../../utils/actions";
import Account from "../../components/Account/Account";
import accountsMocks from "../../mocks/accountsMocks";

const Profil = () => {
    const dispatch = useDispatch();
    const profileState = useSelector((state) => state.profile);
    const token = useSelector((state) => state.login.data?.token);
    const [accounts] = useState(accountsMocks); // Initialiser avec des données mockées
    const [profilEdit, setProfilEdit] = useState(false);
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [formatErrorName, setFormatErrorName] = useState("");

    const firstName = profileState.data?.firstName || "";
    const lastName = profileState.data?.lastName || "";

    useEffect(() => {
        if (token) {
            dispatch(getProfile(token));
        }
    }, [token, dispatch]);

    const handleSaveProfile = (e) => {
        e.preventDefault();
        if (!newFirstName.match(/^[A-zÀ-ú-']{2,}$/) || !newLastName.match(/^[A-zÀ-ú-']{2,}$/)) {
            setFormatErrorName("Names must be at least 2 characters and contain only letters.");
            return;
        }

        const updatedProfile = {
            firstName: newFirstName,
            lastName: newLastName,
        };

        dispatch(saveUserProfile(token, updatedProfile));
        setProfilEdit(false);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setFormatErrorName("");
        setProfilEdit(false);
    };

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <main className="main bgDark">
            <div className="header">
                {profilEdit ? (
                    <>
                        <h1 className="title">Welcome back</h1>
                        <div className="editContainer">
                            <form id="edit">
                                <div className="inputContainer">
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder={firstName}
                                        value={newFirstName}
                                        onChange={(e) => setNewFirstName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder={lastName}
                                        value={newLastName}
                                        onChange={(e) => setNewLastName(e.target.value)}
                                    />
                                </div>
                                <p className="error">{formatErrorName}</p>
                                <div className="buttonContainer">
                                    <button className="editButton" onClick={handleSaveProfile}>
                                        Save
                                    </button>
                                    <button className="editButton" onClick={handleCancel}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="title">
                            Welcome back <br />
                            {firstName} {lastName}!
                        </h1>
                        <button className="editButton" onClick={() => setProfilEdit(true)}>
                            Edit Name
                        </button>
                    </>
                )}
            </div>

            <h2 className="srOnly">Accounts</h2>

            {accounts.map((account) => (
                <Account
                    key={account.transactionId}
                    title={account.title}
                    money={account.money}
                    balanceType={account.balanceType}
                />
            ))}
        </main>
    );
};

Profil.propTypes = {
    token: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};

export default Profil;
