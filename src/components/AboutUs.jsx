import React from "react";

import Button from "./Button";

import AboutUsImg from "../img/AboutUs-img.jpg";
import AboutUsImg2 from "../img/AboutUs-img2.jpg";

import "../styles/AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs-text">
        <h3>About Us</h3>
        <h2>We make a modern and Stylish Website for Bussiness</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, atque.
          Minus accusantium doloremque quos sit accusamus repellat officiis in
          facere voluptatem molestiae! Quis est mollitia doloremque voluptatem
          facere, hic ab.
        </p>
        <Button text="Explore Us" />
      </div>
      <div className="aboutUs-img-container">
        <div>
          <img className="aboutUs-img" src={AboutUsImg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
