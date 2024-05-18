import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./header.scss";
import logo from "../../assets/argentBankLogo.png";
import { selectFirstName, selectToken } from "../../redux/selectors";
import { getFirstName } from "../../redux/features/firstName.js";
import { getToken } from "../../redux/features/token.js";
import { getLoginFetch } from "../../utils/api.js";

export default function Header() {
	console.log("Rendering Header component");
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
		<nav className={styles.mainNav}>
			<Link to="/">
				<img className={styles.mainNavLogoImage} src={logo} alt="Argent Bank Logo" />
				<h1 className={styles.srOnly}>Argent Bank</h1>
			</Link>
			<div>
				{token === null && (
					<Link to="/login" className={styles.mainNavItem}>
						<i className="fa fa-user-circle"></i>
						<span className={styles.signIn}>Sign In</span>
					</Link>
				)}
				{token !== null && (
					<>
						<Link to="/profil" className={styles.mainNavItem}>
							<i className="fa fa-user-circle"></i>
							<span className={styles.user}> {firstName}</span>
						</Link>
						<Link to="/logout" className={styles.mainNavItem}>
							<i className="fa fa-sign-out"></i>
							Sign Out
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}
