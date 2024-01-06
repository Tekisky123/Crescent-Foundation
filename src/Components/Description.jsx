import React from "react";
import organizationData from "../Common/Data.json";
import "../Assets/Styles/Description.css";
import HoverCards from "./HoverCards";
import msiddi from "../Assets/Images/msiddi.png";
import { Link } from "react-router-dom";

const Description = () => {
  
  return (
    <>
      <div className="main-container">
        <h2 className="main-title">{organizationData.organization.title}</h2>
        <p className="main-desc">{organizationData.organization.description}</p>

        <h2 className="main-title">
          {organizationData.organization.vision.title}
        </h2>
        <p className="main-desc">
          {organizationData.organization.vision.description}
        </p>

        <h2 className="main-title">
          {organizationData.organization.mission.title}
        </h2>
        <p className="main-desc">
          {organizationData.organization.mission.description}
        </p>
      </div>
      <h2 className="main-title">OUR PROGRAMS</h2>
      <HoverCards />
      <h2 className="main-title">OUR BOARD</h2>
      <div className="single-card">
        <img className="card-image" src={msiddi} alt="" />
        <div className="card-content">
          <h2>Director Message </h2>
          <p>
            “One who is not grateful to mankind is not grateful
            to Almighty” The Crescent foundation is initiated in 2008 by the
            Mohammed Siddique founded single handed with the mission to work for
            the betterment and upliftment of underprivileged societies in the
            education and health and skill development sector.
          </p>
          <h3>Mohammed Siddique <span>Chief Functionary </span></h3>
          <Link to="/About">
          <button>More Info</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Description;
