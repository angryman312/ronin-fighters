import React from "react";

// import style
import "../assets/css/hallchampions.scss";

// import assets
import Hall1Img from "../assets/images/hall1.png";
import Hall2Img from "../assets/images/hall2.png";

const HallChampions = () => {
  return (
    <div className="hall-section">
      <div className="container hall-wrapper">
        <div className="hall-img-section">
          <img src={Hall1Img} className="hall-img" alt="hall" />
        </div>
        <div className="hall-text">I've worked with:</div>
        <div className="hall-content">
          Frontera, Gucci, Versace, innocent smoothies, Presson, Kris.T,
          Fashiona, Grotesk, StyleX, Rubik, Spectral, Juno.
        </div>
        <div className="hall-img-bottom-section">
          <img src={Hall2Img} className="hall-img" alt="hall" />
        </div>
      </div>
    </div>
  );
};

export default HallChampions;
