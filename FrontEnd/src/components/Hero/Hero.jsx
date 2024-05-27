import "./hero.scss";
import React from 'react';
import PropTypes from "prop-types";

const Hero = ({ title, subtitle1, subtitle2, subtitle3, text }) => {
	return (
		<section className="heroContent">
			<h2 className="srOnly">{title}</h2>
			<p className="subtitle">{subtitle1}</p>
			<p className="subtitle">{subtitle2}</p>
			<p className="subtitle">{subtitle3}</p>
			<p className="text">{text}</p>
		</section>
	);
};

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle1: PropTypes.string.isRequired,
	subtitle2: PropTypes.string.isRequired,
	subtitle3: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Hero;
