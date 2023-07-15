import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import profile from "../../assets/profile.jpg";
import { AiOutlineSearch, AiFillQuestionCircle } from "react-icons/ai";
import Watch from "../../assets/watch.png";
import smartHome from "../../assets/smart-home.png";
import Laptop from "../../assets/laptop.png";
import Acess from "../../assets/acess.png";
import Subscription from "../../assets/subscription.png";
import Offers from "../../assets/offers.png";
import bag from "../../assets/bag.svg";
import phones from "../../assets/phones.png";
import airpod from "../../assets/airpod.png";
import { RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["navbar"];

  if (scrolled) {
    navbarClasses.push("nav");
  }
  return (
    <div>
      <nav
        className={navbarClasses.join(" ")}
        style={toggleMenu ? { boxShadow: "none" } : { boxShadow: "" }}
      >
        <div className="app__navbar-links">
          {toggleMenu ? (
            <RiCloseLine
              className="close__icon"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <GiHamburgerMenu
              title="Navigation Menu"
              className="toggle__icon"
              onClick={() => setToggleMenu(true)}
            />
          )}
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <a href="#">Phone</a>
          <a href="#">Earbuds</a>
          <a href="#">Watches</a>
          <a href="#">Smart Home</a>
          <a href="#">Laptops</a>
          <a href="#">Accessories</a>
          <a href="#">Subscription</a>
          <a href="#">Offers</a>
        </div>

        <div className="app__navbar-icons">
          <AiOutlineSearch className="search__icon" />
          <AiFillQuestionCircle
            title="Get Help"
            className="questionmark__icon"
          />
          <FaShoppingCart className="cart__icon" />
          <img src={profile} className="profile" alt="profile__photo" />
        </div>
      </nav>
      {toggleMenu && (
        <div className="mobile__overlay">
          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={phones} alt="phone" />
            <p>Phones</p>
          </div>
          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={airpod} alt="earbuds" />
            <p>Earbuds</p>
          </div>
          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={Watch} alt="watch" />
            <p>Watches</p>
          </div>

          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={smartHome} alt="smart-home" />
            <p>Smart Home</p>
          </div>

          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={Laptop} alt="laptop" />
            <p>Laptops</p>
          </div>

          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={Acess} alt="accesseries" />
            <p>Accessories</p>
          </div>

          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={Subscription} alt="subscription" />
            <p>Subscriptions</p>
          </div>

          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={Offers} alt="offers" />
            <p>offers</p>
          </div>
          <div className="line"></div>

          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <img src={bag} className="bag--icon" alt="bag" />
            <p>Orders</p>
          </div>

          <div
            className="mobile__container"
            onClick={() => setToggleMenu(false)}
          >
            <AiFillQuestionCircle
              title="Get Help"
              className="mobile__questionmark"
            />
            <p>Help</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
