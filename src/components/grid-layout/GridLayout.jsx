import "./GridLayout.css";
import grid1 from "../../assets/grid1.webp";
import grid2 from "../../assets/grid2.webp";
import grid3 from "../../assets/grid3.webp";
import grid4 from "../../assets/grid4.webp";
import grid5 from "../../assets/grid5.webp";
const GridLayout = () => {
  return (
    <div className="grid__layout">
      <div className="first__layout">
        <div className="grid__container">
          <p>Google Pixel Watch</p>
          <h2>
            Help by Google.
            <br />
            Health by Fitbit.
          </h2>

          <button>Learn More</button>

          <img src={grid1} alt="p" />
        </div>

        <div className="grid__container">
          <p>Nest Wifi Pro with Wi-Fi 6E</p>
          <h2>
            The better way
            <br />
            to Wifi.
          </h2>

          <button>Learn More</button>

          <img src={grid2} alt="p" />
        </div>

        <div className="grid__container">
          <p>Nest Doorbell {"(wired)"}</p>
          <h2>
            Know more.
            <br />
            No charging.
          </h2>

          <button>Learn More</button>

          <img src={grid3} alt="p" />
        </div>
      </div>
      <div className="second__layout">
        <div className="grid__container grid4">
          <p>Pixel Pass</p>
          <h2>
            One price for
            <br />
            all things Pixel.
          </h2>

          <button>Learn More</button>

          <img src={grid4} alt="p" />
        </div>

        <div className="grid__container grid5">
          <p>Switch to Pixel</p>
          <h2>
            Here's what #TeamPixel has to
            <br />
            say about it.
          </h2>

          <button>Learn More</button>

          <img src={grid5} alt="p" />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
