import './profil.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoginFetch, saveUserProfile } from '../../utils/api.js';
import { setFirstName } from "../../redux/features/firstName.js";
import { setLastName } from "../../redux/features/lastName.js";
import { selectToken, selectFirstName, selectLastName } from '../../redux/selectors.js';
import Account from '../../components/Account/Account.js';

export function Profil() {
  const token = useSelector(selectToken);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const [profilEdit, setProfilEdit] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [formatErrorName, setFormatErrorName] = useState('');
  const [accounts, setAccounts] = useState(mockedTransactions); // Initialiser avec des données mockées
  const dispatch = useDispatch();
  const regex = /^[A-zÀ-ú-']{2,}$/;

  useEffect(() => {
    let isMounted = true;
    if (token !== null) {
      const fetchUser = async () => {
        try {
          const user = await getLoginFetch(token);
          if (isMounted) {
            dispatch(setFirstName(user.firstName));
            dispatch(setLastName(user.lastName));
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchUser();

      const fetchAccountsData = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/v1/user/profile/{accountId}/transactions', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch accounts data');
          }
          const data = await response.json();
          if (isMounted) {
            setAccounts(data.body.transactions); // Mettre à jour l'état local avec les données récupérées
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchAccountsData();
    }
    return () => { isMounted = false; };
  }, [token, dispatch]);

  const handleEditSave = async (e) => {
    e.preventDefault();
    if (!regex.test(newFirstName) || !regex.test(newLastName)) {
      setProfilEdit(true);
      setFormatErrorName('At least 2 alphabetic characters');
    } else {
      if (newFirstName !== firstName || newLastName !== lastName) {
        const fullName = { firstName: newFirstName, lastName: newLastName };
        try {
          await saveUserProfile(token, fullName);
          dispatch(setFirstName(newFirstName));
          dispatch(setLastName(newLastName));
        } catch (error) {
          console.error(error);
        }
      }
      setFormatErrorName('');
      setProfilEdit(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormatErrorName('');
    setProfilEdit(false);
  };

  if (token === null) return <Navigate to="/login" />;

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
                  <button className="editButton" onClick={handleEditSave}>
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
          key={account.transactionId} // Utilisez un identifiant unique pour chaque transaction
          title={account.description} // Adaptez selon les propriétés de l'API
          money={`$${account.amount}`}
          balanceType={account.category} // Adaptez selon les propriétés de l'API
        />
      ))}
    </main>
  );
}

Profil.propTypes = {
  token: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
