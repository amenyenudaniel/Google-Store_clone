import React from "react";
import "./SimpleLayout.css";
import airpod from "../../assets/airpod.webp";
import nba from "../../assets/nba.svg";
const SimpleLayout = () => {
  return (
    <div className="app__simplelayout">
      <div className="simplelayout__grid">
        <div className="simplelayout__container layout1">
          <p>Watches</p>
          <h2>
            Keep moving.
            <br />
            Keep improving.
          </h2>
          <button>Explore watches</button>
          <img src={airpod} alt="airpod" />
        </div>

        <div className="simplelayout__container layout2">
          <p>Earbuds</p>
          <h2>
            Great sound.
            <br />
            All around.
          </h2>
          <button>Explore earbuds</button>
          <img src={airpod} alt="airpod" />
        </div>
      </div>

      <div className="NBA">
        <img src={nba} alt="nba" />
        <div className="NBA__content">
          <h3>Pixel is the official fan phone of the NBA.</h3>
          <p>
            Discover all the ways fans everywhere show their love of the game
            with Pixel phones.<span>Watch now</span>.
          </p>
        </div>

        <button>Shop phones</button>
      </div>
    </div>
  );
};

export default SimpleLayout;
