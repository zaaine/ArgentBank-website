import './login.scss'
import React, { useState } from "react";
import { Navigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { getLogin } from '../../utils/api.js'
import { getToken } from '../../redux/features/token.js'
import { selectToken } from '../../redux/selectors.js'
 // Console log with the provided information
 console.log(`
 - First Name: Tony
 - Last Name: Stark
 - Email: tony@stark.com
 - Password: password123
 
 - First Name: Steve
 - Last Name: Rogers
 - Email: steve@rogers.com
 - Password: password456
 `)
 export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remember, setRemember] = useState(false);
	const [loginErreur, setLoginErreur] = useState("");
	const [loginStatus, setLoginStatus] = useState(0);
  
	const token = useSelector(selectToken);
	const dispatch = useDispatch();
  
	const handleRemember = (event) => {
	  setRemember(event.target.checked);
	};
  
	const handleSubmit = (event) => {
	  event.preventDefault();
	  const login = getLogin({ email, password });
	  login.then((obj) => {
		if (obj.status === 200) {
		  setLoginStatus(obj.status);
		  if (remember) {
			localStorage.setItem("token", obj.token);
		  }
		  dispatch(getToken(obj.token));
		} else {
		  setLoginErreur(obj.message);
		}
	  });
	};
  
	if (token !== null || loginStatus === 200) {
	  return <Navigate to="/profil" />;
	}
  
	return (
	  <div className="container">
		<main className="main bgDark">
		  <section className="signInContent">
			<i className="fa fa-user-circle"></i>
			<h1 className="title">Sign In</h1>
			<form onSubmit={handleSubmit}>
			  <div className="inputWrapper">
				<label className="bold" htmlFor="username">
				  Username
				</label>
				<input
				  type="text"
				  id="username"
				  onChange={(e) => setEmail(e.target.value)}
				/>
			  </div>
			  <div className="inputWrapper">
				<label className="bold" htmlFor="password">
				  Password
				</label>
				<input
				  type="password"
				  id="password"
				  onChange={(e) => setPassword(e.target.value)}
				/>
			  </div>
			  <div className="inputRemember">
				<input
				  type="checkbox"
				  id="remember-me"
				  onChange={handleRemember}
				/>
				<label className="labelRemember" htmlFor="remember-me">
				  Remember me
				</label>
			  </div>
			  <div className="error">{loginErreur}</div>
			  <button type="submit" className="signInButton">
				Sign In
			  </button>
			</form>
		  </section>
		</main>
	  </div>
	);
  }