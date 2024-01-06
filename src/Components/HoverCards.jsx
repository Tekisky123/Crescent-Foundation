import React from "react";
import "../Assets/Styles/HoverCards.css";
import card1 from "../Assets/Images/card1.png";
import card2 from "../Assets/Images/card2.png";
import card3 from "../Assets/Images/card3.png";
import card4 from "../Assets/Images/card4.png";
import { useNavigate } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";

const HoverCards = () => {
  const navigate = useNavigate();

  

  return (
    <div className="cards-container">
      <div className="card">
        <img className="cards-image" src={card1} alt="" />
        <div className="cards-content">
          <h2>3000+</h2>
          <p>
            TCBC is a charity-based blood center that offers free blood units to
            the financially weaker section community & we have helped over 3000+
            poorly resourced patients from civil hospitals and private hospitals
            in Nanded district around in Maharashtra{" "}
          </p>
        </div>
        <div className="go-to" onClick={() => navigate("/blood-Center")}>
        The Crescent blood Centre 
        </div> 
        <span ><FaGreaterThan className="arrow" onClick={() => navigate("/blood-Center")} /></span>
      </div>

      <div className="card">
        <img className="cards-image" src={card2} alt="" />
        <div className="cards-content">
          <h2>500+</h2>
          <p>
            livelihood and transformation till now 500+ permanent youth got
            placed with a white-collar job and some are pursuing higher degrees
          </p>
        </div>
        <div className="go-to" onClick={() => navigate("/Tcf-vocational-training-institute")}>
        Tcf vocational training  institute 
        </div>
        <span><FaGreaterThan className="arrow" onClick={() => navigate("/Tcf-vocational-training-institute")}  /></span>
      </div>

      <div className="card">
        <img className="cards-image" src={card3} alt="" />
        <div className="cards-content">
          <h2>1150+</h2>
          <p>
            95% of children in our school belong to families which have no
            connection with education. They are the daily wage workers,
            cleaners, sweepers, house workers, etc. CPS has special seats free of
            cost for those who don't have parents, separated or single mothers.
          </p>
        </div>
        <div className="go-to" onClick={() => navigate("/crescent-public-school")}>
        Crescent Public  School 
        </div>
        <span><FaGreaterThan className="arrow" onClick={() => navigate("/crescent-public-school")}  /></span>
      </div>

      <div className="card">
        <img className="cards-image" src={card4} alt="" />
        <div className="cards-content">
          <h2>350+</h2>
          <p>
            We provided part-time jobs to women who are responsible for their
            home cares. We worked with (NULM) in this scheme and trained more
            than 350+ women from a backward section as well as single mother
            orphanage women and girls.
          </p>
        </div>
        <div className="go-to" onClick={() => navigate("/crescent-clothing-center")}>
        The Crescent Clothings 
        </div>
        <span><FaGreaterThan className="arrow" onClick={() => navigate("/crescent-clothing-center")} /></span>
      </div>
    </div>
  );
};

export default HoverCards;
