import React, { useEffect } from "react";
import "../Assets/Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faYoutube,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QR from "../Assets/Images/QR.png";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top whenever the component mounts
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const images = [
    require("../Assets/Images/1st.png"),
    require("../Assets/Images/2nd.png"),
    require("../Assets/Images/3rd.png"),
    require("../Assets/Images/4th.png"),
    require("../Assets/Images/5th.png"),
    require("../Assets/Images/6th.png"),
    require("../Assets/Images/7th.png"),
    require("../Assets/Images/8th.png"),
    require("../Assets/Images/10th.png"),
    require("../Assets/Images/11th.png"),
  ];
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="marquee-container">
              <div className="marquee-content">
                {images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link>The Crescent Foundation</Link>
                </div>
                <div className="footer-text">
                  <h3>Contact Us</h3>
                  <p>
                    1-4-48, Maulana Azad Nagar behind Janta Market,
                    Nanded-431602 (INDIA) Phone: +91 9011304885 Email:
                    nnd.tcf@gmail.com
                  </p>
                </div>
                <div className="footer-social-icon">
                  <Link className="facebook-bg">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="social-icons facebook-bg"
                    />
                  </Link>
                  <Link className="twitter-bg">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="social-icons twitter-bg"
                    />
                  </Link>
                  <Link className="google-bg">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="social-icons google-bg"
                    />
                  </Link>
                  <Link className="youtube-bg">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="social-icons youtube-bg"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">about</Link>
                  </li>
                  <li>
                    <Link>Our Work</Link>
                  </li>
                  <li>
                    <Link>gallery </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Join our email list</h3>
                  <img src={QR} alt="" className="qr-code" />
                  <p className="qr-code">Donate Through UPI</p>
                </div>
                <div className="footer-text mb-25"></div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <FontAwesomeIcon
                        icon={faTelegramPlane}
                        className="send"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Created By{" "}
                  <Link to={"https://tekisky.com/"}>Tekisky Pvt Ltd</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
