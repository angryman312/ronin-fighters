import React from "react";

// import style
import "../assets/css/staking.scss";

// import assets
import stakeLogoImg from "../assets/images/staking_logo.png";
import stakingCardImg from "../assets/images/stacking_card.png";
import stakeBtnImg from "../assets/images/stake_btn.png";
import unstakeBtnImg from "../assets/images/unstake_btn.png";

const Staking = () => {
  const items = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];

  return (
    <div className="staking-section">
      <div className="container staking-wrapper">
        <div className="staking-logo">
          <img src={stakeLogoImg} alt="stake-logo" className="logo-img" />
        </div>
        <div className="staking-list">
          {items.map((value, key) => {
            return (
              <div className="staking-item" key={key}>
                <div className="staking-card">
                  <img alt="card" src={stakingCardImg} className="card-img" />
                </div>
                <div className="staking-btn-group">
                  <button
                    type="button"
                    className="staking-btn"
                    onClick={() => alert("Coming soon!")}
                  >
                    <img
                      alt="stake-btn"
                      src={stakeBtnImg}
                      className="stake-btn-img"
                    />
                  </button>
                  <button
                    type="button"
                    className="staking-btn"
                    onClick={() => alert("Coming soon!")}
                  >
                    <img
                      alt="stake-btn"
                      src={unstakeBtnImg}
                      className="stake-btn-img"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Staking;
