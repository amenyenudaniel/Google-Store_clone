import React from "react";
import "./LandingPage.css";
import logo from "../../assets/logo.png";
import region from "../../assets/region.jpg";
import brazil from "../../assets/brazil.png";
import canada from "../../assets/canada.png";
import mexico from "../../assets/mexico.png";
import usa from "../../assets/us.png";
import rico from "../../assets/rico.png";
import austalia from "../../assets/australia.png";
import berlin from "../../assets/berlin.png";
import denmark from "../../assets/denmark.png";
import deut from "../../assets/deut.png";
import france from "../../assets/france.png";
import india from "../../assets/india.png";
import ireland from "../../assets/ireland.png";
import italy from "../../assets/italy.png";
import japan from "../../assets/japan.png";
import korea from "../../assets/korea.png";
import netherland from "../../assets/netherland.png";
import newzeland from "../../assets/newzeland.png";
import no from "../../assets/no.png";
import oster from "../../assets/oster.png";
import portugal from "../../assets/portugal.png";
import singapore from "../../assets/singapore.png";
import spain from "../../assets/spain.png";
import suomi from "../../assets/suomi.png";
import sverige from "../../assets/sverige.png";
import swiz from "../../assets/swiz.png";
import tw from "../../assets/tw.png";
import uk from "../../assets/uk.png";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing__page">
      <div className="landing-image">
        <div className="landing__content">
          <img src={region} alt="" />
          <div className="landing__content-overlay">
            <h1>
              Change your region and <br />
              language
            </h1>

            <p>
              Be sure to pick the location that matches your shipping address
            </p>
          </div>
        </div>
      </div>

      {/* Regions */}
      <div className="landing__grid">
        {/* Americas */}
        <div className="americas__container">
          <h1>Americas</h1>
          <div className="americas">
            <div className="mobile--grid">
              <a href="#store">
                <Link to="/store">
                  <div className="region__card">
                    <div className="region__img">
                      <img src={usa} alt="region" />
                    </div>
                    <div className="region__content">
                      <p>United State</p>
                      <p>English</p>
                    </div>
                  </div>
                </Link>
              </a>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={canada} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Canada</p>
                    <p>English</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={mexico} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>México</p>
                    <p>español</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mobile--grid">
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={brazil} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Brazil</p>
                    <p>portuguê</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={canada} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Canada</p>
                    <p>français</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={rico} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Puerto Rico</p>
                    <p>español</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Asia */}
        <div className="asia__container">
          <h1>Asia Pacific</h1>
          <div className="asia__pacific">
            <div className="mobile--grid">
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={austalia} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Australia</p>
                    <p>English</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={india} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>India</p>
                    <p>English</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={japan} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>日本</p>
                    <p>日本語</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={korea} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>대한민국</p>
                    <p>한국어</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mobile--grid">
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={newzeland} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>New Zealand</p>
                    <p>English</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={singapore} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Singapore</p>
                    <p>English</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={tw} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>台灣</p>
                    <p>中文</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Europe 1*/}
        <div className="europe__container">
          <h1>Europe</h1>
          <div className="europe">
            <div className="mobile--grid">
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={oster} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Österreich</p>
                    <p>Deutsch</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={berlin} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>België</p>
                    <p>Nederlands</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={berlin} alt="region" />
                  </div>

                  <div className="region__content">
                    <p>Belgique</p>
                    <p>français</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={denmark} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Danmark</p>
                    <p>dansk</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={suomi} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Suomi</p>
                    <p>suomi</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mobile--grid">
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={france} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>France</p>
                    <p>français</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={deut} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Deutschland</p>
                    <p>Deutsch</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={ireland} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Ireland</p>
                    <p>English</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={italy} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Italia</p>
                    <p>italiano</p>
                  </div>
                </div>
              </Link>
              <Link to="/store">
                <div className="region__card">
                  <div className="region__img">
                    <img src={netherland} alt="region" />
                  </div>
                  <div className="region__content">
                    <p>Nederland</p>
                    <p>Nederlands</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* .Europe 2 */}
        <div className="europe2">
          <div className="mobile--grid">
            <Link to="/store">
              <div className="region__card">
                <div className="region__img">
                  <img src={no} alt="region" />
                </div>
                <div className="region__content">
                  <p>Norge</p>
                  <p>norst</p>
                </div>
              </div>
            </Link>
            <Link to="/store">
              <div className="region__card">
                <div className="region__img">
                  <img src={portugal} alt="region" />
                </div>
                <div className="region__content">
                  <p>Portugal</p>
                  <p>português</p>
                </div>
              </div>
            </Link>
            <Link to="/store">
              <div className="region__card">
                <div className="region__img">
                  <img src={spain} alt="region" />
                </div>
                <div className="region__content">
                  <p>España</p>
                  <p>español</p>
                </div>
              </div>
            </Link>
            <Link to="/store">
              <div className="region__card">
                <div className="region__img">
                  <img src={sverige} alt="region" />
                </div>
                <div className="region__content">
                  <p>Sverige</p>
                  <p>svenska</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mobile--grid">
            <Link to="/store">
              <div className="region__card">
                <div className="region__img">
                  <img src={swiz} alt="region" />
                </div>
                <div className="region__content">
                  <p>Schweiz</p>
                  <p>Deutsch</p>
                </div>
              </div>
            </Link>
            <Link to="/store">
              <div className="region__card">
                <div className="region__img">
                  <img src={swiz} alt="region" />
                </div>
                <div className="region__content">
                  <p>Suisse</p>
                  <p>español</p>
                </div>
              </div>
            </Link>
            <Link to="/store">
              <div className="region__card">
                <div className="region__img">
                  <img src={uk} alt="region" />
                </div>
                <div className="region__content">
                  <p>United Kingdom</p>
                  <p>English</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="landingPage__footer">
        <img src={logo} alt="" />
        <h3>Google Store</h3>
      </div>
    </div>
  );
};

export default LandingPage;
