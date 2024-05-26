import "./feature.scss";
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";
import React from 'react';
import PropTypes from "prop-types";

export const Feature = ({ title, icon, image, description }) => {
    return (
        <div className="featureItem">
            <h3 className="featureItemTitle">{title}</h3>
            <img src={image} alt={`${icon} icon`} className="featureIcon" />
            <p>
                {description}
            </p>
        </div>
    );
};

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

// Utilisation des images importées directement
export const featuresMock = [
    {
        title: 'You are our #1 priority',
        icon: 'chat',
        description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
        image: iconChat
    },
    {
        title: 'More savings means higher rates',
        icon: 'money',
        description: 'The more you save with us, the higher your interest rate will be!',
        image: iconMoney
    },
    {
        title: 'Security you can trust',
        icon: 'security',
        description: 'We use top of the line encryption to make sure your data and money is always safe.',
        image: iconSecurity
    }
];

export default Feature;
