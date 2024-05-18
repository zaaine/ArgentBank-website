import styles from "./hero.scss";
import PropTypes from "prop-types";

export default function Hero({ title, subtitle1, subtitle2, subtitle3, text }) {
	console.log(`Rendering Hero component with title: ${title}`);

	return (
		<section className={`${styles.hero}${styles.heroContent}`}>
			<h2 className={styles.srOnly}>{title}</h2>
			<p className={styles.subtitle}>{subtitle1}</p>
			<p className={styles.subtitle}>{subtitle2}</p>
			<p className={styles.subtitle}>{subtitle3}</p>
			<p className={styles.text}>{text}</p>
		</section>
	);
}
Hero.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle1: PropTypes.string.isRequired,
	subtitle2: PropTypes.string.isRequired,
	subtitle3: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
