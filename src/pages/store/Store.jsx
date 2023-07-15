import React from "react";
import "./Store.css";
import header from "../../assets/header.webp";
import { BsPlayFill } from "react-icons/bs";
import Slider from "../../components/slider/Slider";
import GridLayout from "../../components/grid-layout/GridLayout";
import Category from "../../components/category/Category";
import SimpleLayout from "../../components/simpleLayout/SimpleLayout";
import LastLayout from "../../components/lastLayout/LastLayout";
import Footer from "../../components/footer/Footer";
const Store = () => {
  return (
    <div>
      <div className="app__store" id="store">
        <img src={header} alt="header" />
        <div className="store__content">
          <p className="p__text1">Pixel 7 and Pixel 7 Pro</p>
          <h1>
            Full speed ahead.
            <br />
            The Pixel 7 phones <br /> are here.
          </h1>
          <p className="p__text2">
            Pixel 7 Pro and Pixel 7 are powered by Google Tensor G2, making them
            even faster, more helpful, and extra secure.‡
          </p>

          <div className="buttons">
            <button>Learn more</button>
            <div className="button__content">
              <div className="round__button">
                <BsPlayFill className="play__button" />
              </div>
              <p className="p__text3">Watch the Pixel portfolio video</p>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <GridLayout />
      <Category />
      <SimpleLayout />
      <LastLayout />
      <Footer />
    </div>
  );
};

export default Store;
