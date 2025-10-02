import React from "react";

// import style
import "../assets/css/minibosses.scss";

// import assets
import Mini1Img from "../assets/images/mini1.png";
import Mini2Img from "../assets/images/mini2.png";
import Mini3Img from "../assets/images/mini3.png";

const MiniBosses = () => {
  return (
    <div className="mini-section">
      <div className="container mini-wrapper">
        <div className="mini-img-section">
          <img src={Mini1Img} className="mini-img" alt="mini" />
          <img src={Mini2Img} className="mini-img" alt="mini" />
        </div>
        <div className="contact-info">
          <a href="tel:+3145683245" className="contact-item" target="_self">
            +3145683245
          </a>
          <a
            href="mailto:thoemke@linas.com"
            className="contact-item"
            target="_blank"
            rel="noreferrer"
          >
            thoemke@linas.com
          </a>
        </div>
        <div className="contact-section">
          <div className="contact-wrapper">
            <div className="input-field">
              <label for="Name" className="input-label">
                Name
              </label>
              <input
                id="Name"
                placeholder="Your name"
                type="text"
                className="input"
                tabindex="0"
              />
            </div>
            <div className="input-field">
              <label for="email" className="input-label">
                Your email*
              </label>
              <input
                id="email"
                placeholder="Your email address"
                type="text"
                className="input"
                tabindex="0"
              />
            </div>
            <div className="input-field">
              <label for="message" className="input-label">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                type="text"
                className="textarea"
                rows={4}
              />
            </div>
            <button type="button" className="submit-btn">
              Submit
            </button>
          </div>
          <div className="contact-img-logo">
            <img src={Mini3Img} alt="mini" className="contact-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniBosses;
