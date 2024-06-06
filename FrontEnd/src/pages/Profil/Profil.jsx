import './profil.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoginFetch, saveUserProfile } from '../../utils/api/user.js';
import { setUserName, setLastName , setFirstName} from '../../redux/reducers.js';
import { selectToken, selectUserName, selectFirstName, selectLastName } from '../../redux/selectors.js';
import Account from '../../components/Account/Account.js';
import accountsMocks from '../../mocks/accountsMocks.js';

export function Profil() {
  const token = useSelector(selectToken);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const userName = useSelector(selectUserName);
  const [profilEdit, setProfilEdit] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [formatErrorName, setFormatErrorName] = useState('');
  const dispatch = useDispatch();
  const regex = /^[A-zÀ-ú-']{2,}$/;

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const user = await getLoginFetch(token);
          dispatch(setUserName(user.userName));
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
    if (!regex.test(newUsername)) {
      setFormatErrorName('At least 2 alphabetic characters');
    } else {
      const updatedProfile = {
        userName: newUsername || userName
      };
      try {
        await saveUserProfile(token, updatedProfile);
        dispatch(setUserName(updatedProfile.userName));
        setProfilEdit(false);
        setFormatErrorName('');
      } catch (error) {
        console.error(error);
      }
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
				<label>First Name:</label>
               <input type="text" value={firstName} disabled/>
               
               <label>Last Name:</label>
               <input type="text" value={lastName} disabled />
			   <label>New Username:</label>
				  <input
                    type="text"
                    id="userName"
                    placeholder={userName}
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
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
          transactions={account.transactions}
        />
      ))}
    </main>
  );
}
