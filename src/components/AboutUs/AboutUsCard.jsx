import React from "react";
import PropTypes from "prop-types";

import "./AboutUsCard.scss";

const AboutUsCard = ({ number, title, text, tech }) => {
  return (
    <div className="aboutUs-card">
      <div className="aboutUs-card-container">
        <h4>{number}</h4>
        <h2>{title}</h2>
        <p>{text}</p>

        <ul>
          {tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

AboutUsCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired
};

export default AboutUsCard;
