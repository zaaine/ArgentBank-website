import './profil.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoginFetch, saveUserProfile } from '../../utils/api.js';
import { setFirstName } from "../../redux/features/firstName.js";
import { setLastName } from "../../redux/features/lastName.js";
import { selectToken, selectFirstName, selectLastName } from '../../redux/selectors.js';
import ACCOUNTS_MOCKED from '../../__mocks__/accountsMock.js';
import Account from '../../components/Account/Account.js';

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
    if (token !== null) {
      const fetchUser = async () => {
        try {
          const user = await getLoginFetch(token);
          dispatch(setFirstName(user.firstName));
          dispatch(setLastName(user.lastName));
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUser();
    }
  }, [token, dispatch]);

  const handleEditSave = (e) => {
    e.preventDefault();
    if (!regex.test(newFirstName) || !regex.test(newLastName)) {
      setProfilEdit(true);
      setFormatErrorName('At least 2 alphabetic characters');
    } else {
      if (newFirstName !== firstName || newLastName !== lastName) {
        const fullName = { firstName: newFirstName, lastName: newLastName };
        saveUserProfile(token, fullName);
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
                    onChange={(e) => setNewFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    id="lastName"
                    placeholder={lastName}
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

      {ACCOUNTS_MOCKED.map((data) => (
        <Account
          key={data.id}
          title={data.title}
          money={data.money}
          balanceType={data.balanceType}
        />
      ))}
      <div className="buttonContainer"></div>
    </main>
  );
}

Profil.propTypes = {
  token: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  ProfilEdit: PropTypes.bool,
  newFirstName: PropTypes.string,
  newLastName: PropTypes.string,
  formatErrorName: PropTypes.string,
  dispatch: PropTypes.func,
  regex: PropTypes.object,
  handleEditSave: PropTypes.func,
  handleCancel: PropTypes.func,
};
