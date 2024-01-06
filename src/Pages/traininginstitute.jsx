import React, { useEffect, useRef, useState } from "react";
import "../Assets/Styles/BloodCentre.css";
import tvc3 from "../Assets/Images/tvc3.png";
import ThreeCards from "../Common/ThreeCards";
import skill1 from "../Assets/Images/skill1.jpeg"
import skill2 from "../Assets/Images/skill2.jpeg"
import skill3 from "../Assets/Images/skill3.jpeg"
import skill4 from "../Assets/Images/skill4.JPG"
import skill5 from "../Assets/Images/skill5.JPG"
import skill6 from "../Assets/Images/skill6.jpg"
const Traininginstitute = () => {
  const [index1, setIndex1] = useState(0);
  const slidesRef1 = useRef([]);
  const dotsRef1 = useRef([]);
  const [index2, setIndex2] = useState(0);
  const slidesRef2 = useRef([]);
  const dotsRef2 = useRef([]);

  const changeSlide1 = () => {
    for (let i = 0; i < slidesRef1.current.length; i++) {
      const currentSlide = slidesRef1.current[i];
      const currentDot = dotsRef1.current[i];

      if (currentSlide && currentDot) {
        currentSlide.style.display = "none";
        currentDot.classList.remove("active");
      }
    }

    const nextIndex = (index1 + 1) % slidesRef1.current.length;

    const activeSlide = slidesRef1.current[nextIndex];
    const activeDot = dotsRef1.current[nextIndex];

    if (activeSlide && activeDot) {
      activeSlide.style.display = "block";
      activeDot.classList.add("active");
    }

    setIndex1(nextIndex);
  };

  useEffect(() => {
    const interval1 = setTimeout(changeSlide1, 2000);
    return () => clearTimeout(interval1);
  }, [index1]);

  const changeSlide2 = () => {
    for (let i = 0; i < slidesRef2.current.length; i++) {
      const currentSlide = slidesRef2.current[i];
      const currentDot = dotsRef2.current[i];

      if (currentSlide && currentDot) {
        currentSlide.style.display = "none";
        currentDot.classList.remove("active");
      }
    }

    const nextIndex = (index2 + 1) % slidesRef2.current.length;

    const activeSlide = slidesRef2.current[nextIndex];
    const activeDot = dotsRef2.current[nextIndex];

    if (activeSlide && activeDot) {
      activeSlide.style.display = "block";
      activeDot.classList.add("active");
    }

    setIndex2(nextIndex);
  };

  useEffect(() => {
    const interval2 = setTimeout(changeSlide2, 2000);
    return () => clearTimeout(interval2);
  }, [index2]);

  return (
    <>
      <div className="tvc-poster"></div>
      <div className="first-content">
        <h2>Tcf vocational training institute</h2>
        <p>
          Skill is one of the most important sides of every human being. Each
          transformation makes some changes in human life. We The Crescent
          foundation has curiosity to make impactful transformation and
          sustainability in the underprivileged & weaker section communities.
          This can make them to live a quality life.
        </p>
        <p>
          Apart from enhancing skill in people our focus is to place them or
          guide them for their own business start-up. After successfully
          completion of the course the crescent had the target to make them
          stand for their jobs and small work from home business for women
        </p>
      </div>
      <div className="second-content">
        <h2>Our work in Tcf vocational training institute</h2>
        <p>
          The crescent foundation has completed successfully 500+ people
          transformation from unskilled to skilled in various sectors like
          traditional embroidery, hospitality, and technical courses through the
          collaboration with government skill development department. Like
          National urban livelihood mission, Pramod Mahajan skill development
          scheme. Chief Minister Skill development scheme
        </p>
      </div>
      <div className="third-container">
        <div className="slider">
          <div id="slider1">
            <div
              ref={(el2) => (slidesRef1.current[0] = el2)}
              className="slides"
            >
              <img src={tvc3} className="images" width="100%" alt="" />
            </div>

            <div
              ref={(el2) => (slidesRef1.current[1] = el2)}
              className="slides"
            >
              <img src={skill1} className="images" width="100%" alt="" />
            </div>

            <div
              ref={(el2) => (slidesRef1.current[2] = el2)}
              className="slides"
            >
              <img src={skill2} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[3] = el2)}
              className="slides"
            >
              <img src={skill3} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[4] = el2)}
              className="slides"
            >
              <img src={skill4} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[5] = el2)}
              className="slides"
            >
              <img src={skill5} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[6] = el2)}
              className="slides"
            >
              <img src={skill6} className="images" width="100%" alt="" />
            </div>

            <div id="dot">
              <span
                ref={(el2) => (dotsRef1.current[0] = el2)}
                className="dot"
              ></span>
              <span
                ref={(el2) => (dotsRef1.current[1] = el2)}
                className="dot"
              ></span>
              <span
                ref={(el2) => (dotsRef1.current[2] = el2)}
                className="dot"
              ></span>
              <span
                ref={(el2) => (dotsRef1.current[3] = el2)}
                className="dot"
              ></span>
              <span
                ref={(el2) => (dotsRef1.current[4] = el2)}
                className="dot"
              ></span>
              <span
                ref={(el2) => (dotsRef1.current[5] = el2)}
                className="dot"
              ></span>
              <span
                ref={(el2) => (dotsRef1.current[6] = el2)}
                className="dot"
              ></span>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            We the crescent foundation trying to bridge the gap underprivileged
            to privilege of the youth by providing them skill training like
            stitching, nursing courses, computer technical courses through our
            organization. Till date we have trained 500+ youth with the job
            placement with various skill enhancement
          </p>
        </div>
      </div>
      <div className="tvc-poster2"></div>

      <ThreeCards />
    </>
  );
};

export default Traininginstitute;
