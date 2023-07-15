import "./Footer.css";
import logo from "../../assets/logo.png";
import us from "../../assets/us.png";

import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <p className="first__footer">
          <span>‡</span> Compared to Pixel 6. Speed and helpfulness claims based
          on internal testing on pre-production devices.
        </p>
        <p className="second__footer">
          <span>*</span> Here’s what you will pay for Pixel Pass: You'll be
          required to finance your Pixel Pass purchase with 0% APR Google Store
          Financing.​​ The full cost of your Pixel and Preferred Care is spread
          out over 24 monthly payments. The Google services included in Pixel
          Pass will be charged to your Google Store Financing account each
          month. Your Pixel Pass subscription will appear as two separate
          transactions every month on your Google Store Financing account. From
          $45/month: $648.68 at 0% APR with 24 equal monthly payments =
          $27.03/month plus Pixel Pass services (Google One 200 GB) =
          $17.97/month for a Total monthly payment = $45/month. Adjust for taxes
          and shipping.
        </p>
      </div>

      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h3>Google Store</h3>
      </div>
      <footer>
        <div className="footer__links">
          <a href="#">Shipping options</a>
          <a href="#">Tracking a package</a>
          <a href="#">Country availability</a>
          <a href="#">Repairs</a>
          <a href="#">Installation</a>
          <a href="#">Ideas & Info</a>
        </div>

        <div className="footer__links">
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Financing</a>
          <a href="#">Device recyclings</a>
          <a href="#">Sustainability</a>
          <a href="#">Gift returns</a>
          <a href="#">Refurbished</a>
          <a href="#">Trade-in</a>
          <a href="#">Pixel for Business</a>
          <a href="#">Locations</a>
        </div>
      </footer>

      <div className="footer__last__container">
        <div className="line2"></div>
        <div className="footer__last__container1">
          <div className="social__icons">
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaFacebook />
            </i>
            <i>
              <FaYoutube />
            </i>
            <i>
              <FaTiktok />
            </i>
          </div>

          <div className="footer__last__content">
            <div className="footer__img">
              <img src={us} alt="usa" />
              <a href="#">United State</a>
            </div>
            <a href="#">Privacy</a>
            <a href="#">Google Nest Commitment to Privacy</a>
            <a href="#">Sales Term</a>
            <a href="#">Term of Service</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
