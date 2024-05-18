import styles from "./footer.scss";
import PropTypes from "prop-types";

export default function Footer({ text }) {
	console.log("Rendering Footer component");
	return (
		<footer className={styles.footer}>
			<p className={styles.footerText}>{text}</p>
		</footer>
	);
}
Footer.prototype = {
	text: PropTypes.string,
};
