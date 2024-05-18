import "./feature.scss";
import PropTypes from "prop-types";

export default function Feature({ imgSrc, imgAlt, title, description }) {
	console.log(`Rendering Feature component with title: ${title}`);

	return (
		<div className="featureItem">
			<img src={imgSrc} alt={imgAlt} className="featureIcon" />
			<h3 className="featureItemTitle">{title}</h3>
			<p>{description}</p>
		</div>
	);
}
Feature.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
