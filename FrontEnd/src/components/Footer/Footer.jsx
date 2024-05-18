import "./footer.scss";
import PropTypes from "prop-types";

export default function Footer({ text }) {
	return (
		<footer className="footer">
			<p className="footerText">{text}</p>
		</footer>
	);
}
Footer.prototype = {
	text: PropTypes.string,
};
