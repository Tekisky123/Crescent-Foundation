import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles/Header.css";
import logo from "../Assets/Images/Crescent-removebg-preview 1.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
       <Link to="/"><div className="logo">
          <img src={logo} alt="" />
          <h4 className="logo-title">The Crescent Foundation</h4>
        </div>
        </Link> 
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li className="dropdown">
            <Link>Our Work</Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/blood-Center">The Crescent blood Centre</Link>
              </li>
              <li>
                <Link to="/Tcf-vocational-training-institute">
                  Tcf vocational training institute
                </Link>
              </li>
              <li>
                <Link to="/crescent-public-school">Crescent Public School</Link>
              </li>
              <li>
                <Link to="/crescent-clothing-center">
                  The Crescent Clothings
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Gallery</Link>
          </li>
          <li>
            <p className="donate">
              <Link>Donate</Link>
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
