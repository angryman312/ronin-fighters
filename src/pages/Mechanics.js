import React from "react";

// import style
import "../assets/css/mechanics.scss";

// import assets
import MonedaImg from "../assets/images/moneda.png";

const Mechanics = () => {
  return (
    <div className="mechanics-section" id="mechanics">
      <div className="mechanics-overlay"></div>
      <div className="container mechanics-wrapper">
        <img src={MonedaImg} alt="moneda" className="moneda-img" />
        <div className="mechanics-title">MECHANICS</div>
        <div className="sub-content">
          Our fighters will be able to lift weights every 6 hours, with a high
          probability of success. We'll also be adding risky lifts that, if
          successful, will yield great rewards.
        </div>
        <div className="sub-text">
          If you own any of the other NFTs in the future, you can boost your
          $FIGHT generation.
        </div>
      </div>
    </div>
  );
};

export default Mechanics;
