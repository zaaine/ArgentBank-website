import './profil.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoginFetch, saveUserProfile } from '../../utils/api.js';
import { setFirstName } from "../../redux/features/firstName.js";
import { setLastName } from "../../redux/features/lastName.js";
import { selectToken, selectFirstName, selectLastName } from '../../redux/selectors.js';
import Account from '../../components/Account/Account.js';
import accountsMocks from '../../mocks/accountsMocks.js';

export function Profil() {
  const token = useSelector(selectToken);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const [profilEdit, setProfilEdit] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [formatErrorName, setFormatErrorName] = useState('');
  const dispatch = useDispatch();
  const regex = /^[A-zÀ-ú-']{2,}$/;

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const user = await getLoginFetch(token);
          dispatch(setFirstName(user.firstName));
          dispatch(setLastName(user.lastName));
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [token, dispatch]);

  const handleEditSave = async (e) => {
    e.preventDefault();
    if (!regex.test(newFirstName) || !regex.test(newLastName)) {
      setFormatErrorName('At least 2 alphabetic characters');
    } else {
      if (newFirstName !== firstName || newLastName !== lastName) {
        const fullName = { firstName: newFirstName, lastName: newLastName };
        try {
          await saveUserProfile(token, fullName);
          dispatch(setFirstName(newFirstName));
          dispatch(setLastName(newLastName));
          setProfilEdit(false);
        } catch (error) {
          console.error(error);
        }
      }
      setFormatErrorName('');
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormatErrorName('');
    setProfilEdit(false);
  };

  if (!token) return <Navigate to="/login" />;

  return (
    <main className="main bgDark">
      <div className="header">
        {profilEdit ? (
          <>
            <h1 className="title">Welcome back</h1>
            <div className="editContainer">
              <form id="edit" onSubmit={handleEditSave}>
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
                  <button type="submit" className="editButton">
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

      {accountsMocks.map((account) => (
        <Account
          key={account.accountId}
          title={account.title}
          money={account.money}
          balanceType={account.balanceType}
        />
      ))}
    </main>
  );
}
