import React, { useRef } from "react";
import "./Slider.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import watch from "../../assets/watch.webp";
import pro from "../../assets/pro.webp";
import pixel from "../../assets/pixel.webp";
import airpod from "../../assets/airpod.png";

const Slider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft += 500;
    } else {
      current.scrollLeft -= 500;
    }
  };
  return (
    <div className="app__slider">
      <h1>Popular on the Google Store.</h1>
      <div className="app__slider-grid" ref={scrollRef}>
        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={watch} alt="product" />
            <button>New</button>
          </div>

          <div className="card__content">
            <h3>Google Pixel Watch</h3>
            <p>From $349.99</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={pro} alt="product" />
            <button>New</button>
          </div>

          <div className="card__content">
            <h3>Pixel 7 Pro</h3>
            <p>From $899</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={pixel} alt="product" />
            <button>New</button>
          </div>

          <div className="card__content">
            <h3>Pixel 7</h3>
            <p>From $599</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={airpod} alt="product" />
          </div>

          <div className="card__content">
            <h3>Pixel Buds Pro</h3>
            <p>From $199.99</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={watch} alt="product" />
            <button>New</button>
          </div>

          <div className="card__content">
            <h3>Nest Doorbells</h3>
            <p>From $179.99</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={watch} alt="product" />
            <button>New</button>
          </div>

          <div className="card__content">
            <h3>Nest Wifi Pro</h3>
            <p>From $199.99</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={watch} alt="product" />
          </div>

          <div className="card__content">
            <h3>Chromecast with Google TV</h3>
            <p>From $29.99</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={watch} alt="product" />
          </div>

          <div className="card__content">
            <h3>Nest Cam (battery)</h3>
            <p>From $179.99</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>

        <div className="app__slider-card">
          <div className="card__img__container">
            <img src={watch} alt="product" />
          </div>

          <div className="card__content">
            <h3>Pixel Pass</h3>
            <p>From $37/month*</p>
            <a href="#">Buy {">"}</a>
          </div>
        </div>
      </div>

      <div className="arrow__buttons">
        <div
          className="round__btn 
        first__btn"
          onClick={() => scroll("right")}
        >
          <BsArrowLeftShort />
        </div>

        <div className="round__btn second__btn" onClick={() => scroll("left")}>
          <BsArrowRightShort />
        </div>
      </div>
    </div>
  );
};

export default Slider;
