import React from "react";
import "./LastLayout.css";
import kids from "../../assets/kids.webp";
import dd from "../../assets/deut.svg";
const LastLayout = () => {
  return (
    <div className="app__lastlayout">
      <div className="first__lastlayout">
        <img src={kids} alt="kids_img" />
        <div className="lastlayout__content">
          <h1>Putting Sustainability to work.</h1>
          <p>
            We’re committed to using recycled or renewable material in all
            Pixel, Nest, and Fitbit products by 2025
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div className="second__lastlayout">
        <img src={dd} alt="p" />
        <h2>Never miss a beat.</h2>
        <p>
          Keep me updated devices, news, tips, and offers from Google Store.
        </p>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default LastLayout;
