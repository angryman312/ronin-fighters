import React from "react";

// import style
import "../assets/css/nfts.scss";

// import assets
import ComunNFTImg from "../assets/images/comun.gif";
import LataNFTImg from "../assets/images/lata.jpg";
import GymNFTImg from "../assets/images/gym.jpg";

const NFTs = () => {
  return (
    <div className="nfts-section" id="nfts">
      <div className="nfts-back-overlay"></div>
      <div className="nfts-overlay"></div>
      <div className="container nfts-wrapper">
        <div className="nfts-title">NFTS</div>
        <div className="nfts-content">
          <div className="nfts-item">
            <div className="nfts-img">
              <img src={ComunNFTImg} className="nft-img-logo" alt="nft" />
            </div>
            <div className="nfts-text-sec">
              <div className="nfts-text">
                Our fighters will be the main assets within Ronin Fighters.
              </div>
              <div className="nfts-text">
                There will only be 3,333 Ronin Fighters, from which you can
                obtain one of the only{" "}
                <span className="nfts-text-span">33 legendary</span> fighters.
              </div>
            </div>
          </div>
          <div className="nfts-item">
            <div className="nfts-img">
              <img
                src={LataNFTImg}
                className="nft-img-logo lata-img-logo"
                alt="nft"
              />
            </div>
            <div className="nfts-text-sec">
              <div className="nfts-text">Energy Drink</div>
              <div className="nfts-text">
                Energy Drinks help in the production of{" "}
                <span className="nfts-text-span">$FIGHT</span>, increasing
                production by 10%; that is, 1.1x.
              </div>
            </div>
          </div>
          <div className="nfts-item">
            <div className="nfts-img">
              <img
                src={GymNFTImg}
                className="nft-img-logo gym-img-logo"
                alt="nft"
              />
            </div>
            <div className="nfts-text-sec">
              <div className="nfts-text">GYM</div>
              <div className="nfts-text">
                In the GYM, the highest rarity fighters (rare, epic, or
                legendary) can be staked and boost their $FIGHT generation.
              </div>
              <div className="nfts-text">
                A portion will be allocated to the GYM owner.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTs;
