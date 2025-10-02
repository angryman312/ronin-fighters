import React from "react";
import { useLocation } from "react-router-dom";
import ConnectRoninWalletButton from "./ConnectWallet";

// import assets
import NavLogoImg from "../assets/images/nav-logo.jpg";

// import style
import "../assets/css/nav.scss";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="nav-section">
      <div className="container nav-bar">
        <div className="nav-logo">
          <img src={NavLogoImg} alt="nav-logo" className="nav-logo-img" />
        </div>
        <div className="nav-items">
          <a href="/#aboutus" className="nav-item">
            About us
          </a>
          <a href="/#nfts" className="nav-item">
            NFTs
          </a>
          <a href="/#mechanics" className="nav-item">
            Mechanics
          </a>
          <a
            href="/hall-of-champions"
            className={`nav-item ${
              location.pathname === "/hall-of-champions" ? "active" : ""
            }`}
          >
            Hall of champions
          </a>
          <a
            href="/mini-bosses"
            className={`nav-item ${
              location.pathname === "/mini-bosses" ? "active" : ""
            }`}
          >
            Mini Bosses
          </a>
          <a
            href="/staking"
            className={`nav-item ${
              location.pathname === "/staking" ? "active" : ""
            }`}
          >
            Staking
          </a>
          <a
            href="https://ron-fighters.gitbook.io/ron-fighters-whitepaper"
            className="nav-item"
            target="_blank"
            rel="noreferrer"
          >
            Whitepaper
          </a>
        </div>
        <div className="nav-socials">
          <a
            href="https://x.com/RoninFighters"
            target="_blank"
            rel="noreferrer"
            className="social-item"
            title="Go to Twitter page"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            href="https://discord.gg/vtT2a5pk6w"
            target="_blank"
            rel="noreferrer"
            className="social-item"
            title="Go to Discord page"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.432 11.4C15.432 12.132 14.892 12.732 14.208 12.732C13.536 12.732 12.984 12.132 12.984 11.4C12.984 10.668 13.524 10.068 14.208 10.068C14.892 10.068 15.432 10.668 15.432 11.4ZM9.828 10.068C9.144 10.068 8.604 10.668 8.604 11.4C8.604 12.132 9.156 12.732 9.828 12.732C10.512 12.732 11.052 12.132 11.052 11.4C11.064 10.668 10.512 10.068 9.828 10.068ZM22.5 2.472V24C19.4768 21.3284 20.4437 22.2127 16.932 18.948L17.568 21.168H3.96C2.604 21.168 1.5 20.064 1.5 18.696V2.472C1.5 1.104 2.604 0 3.96 0H20.04C21.396 0 22.5 1.104 22.5 2.472ZM19.08 13.848C19.08 9.984 17.352 6.852 17.352 6.852C15.624 5.556 13.98 5.592 13.98 5.592L13.812 5.784C15.852 6.408 16.8 7.308 16.8 7.308C13.9495 5.7457 10.6011 5.74542 7.836 6.96C7.392 7.164 7.128 7.308 7.128 7.308C7.128 7.308 8.124 6.36 10.284 5.736L10.164 5.592C10.164 5.592 8.52 5.556 6.792 6.852C6.792 6.852 5.064 9.984 5.064 13.848C5.064 13.848 6.072 15.588 8.724 15.672C8.724 15.672 9.168 15.132 9.528 14.676C8.004 14.22 7.428 13.26 7.428 13.26C7.60453 13.3836 7.89563 13.5437 7.92 13.56C9.94547 14.6943 12.8226 15.0659 15.408 13.98C15.828 13.824 16.296 13.596 16.788 13.272C16.788 13.272 16.188 14.256 14.616 14.7C14.976 15.156 15.408 15.672 15.408 15.672C18.06 15.588 19.08 13.848 19.08 13.848Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div className="nav-connect-btn">
          <ConnectRoninWalletButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
