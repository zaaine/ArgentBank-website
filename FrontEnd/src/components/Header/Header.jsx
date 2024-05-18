import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import logo from "../../assets/argentBankLogo.png";
import { selectFirstName, selectToken } from "../../redux/selectors";
import { getFirstName } from "../../redux/features/firstName.js";
import { getToken } from "../../redux/features/token.js";
import { getLoginFetch } from "../../utils/api.js";

export default function Header() {
	const firstName = useSelector(selectFirstName);
	const token = useSelector(selectToken);
	const dispatch = useDispatch();
	useEffect(() => {
		if (token !== null) {
			console.log("Token changed:", token);
			getLoginFetch(token)
				.then((obj) => {
					console.log("User data:", obj);
					dispatch(getFirstName(obj.firstName));
					console.log("User id is null, logging out...");
					if (obj.id === null) {
						dispatch(getToken(null));
						localStorage.removeItem("token");
					}
				})
				.catch((error) => {
					console.error("Error fetching user:", error);
				});
		}
	}, [token, dispatch]);
	return (
		<nav className="mainNav">
			<Link to="/">
				<img className="mainNavLogoImage" src={logo} alt="Argent Bank Logo" />
				<h1 className="srOnly">Argent Bank</h1>
			</Link>

			{token === null && (
				<Link to="/login" className="mainNavItem">
					<i className="fa fa-user-circle"></i>
					<span className="signIn">Sign In</span>
				</Link>
			)}
			{token !== null && (
				<>
					<Link to="/profil" className="mainNavItem">
						<i className="fa fa-user-circle"></i>
						<span className="user"> {firstName}</span>
					</Link>
					<Link to="/logout" className="mainNavItem">
						<i className="fa fa-sign-out"></i>
						Sign Out
					</Link>
				</>
			)}
		</nav>
	);
}
