import React, { useEffect, useRef, useState } from "react";
import "../Assets/Styles/BloodCentre.css";
import tvc3 from "../Assets/Images/tvc3.png";
import school3 from "../Assets/Images/school3.png"
import scl1 from "../Assets/Images/scl1.jpg"
import scl2 from "../Assets/Images/scl2.JPG"
import scl3 from "../Assets/Images/scl3.JPG"
import scl4 from "../Assets/Images/scl4.jpg"
import scl5 from "../Assets/Images/scl5.JPG"
import scl6 from "../Assets/Images/scl6.JPG"
import scl7 from "../Assets/Images/scl7.JPG"
import scl8 from "../Assets/Images/scl8.JPG"
import scl9 from "../Assets/Images/scl9.JPG"
import scl10 from "../Assets/Images/scl10.JPG"

import ThreeCards from "../Common/ThreeCards";
const CrescentSchool = () => {
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
      <div className="school-poster"></div>
      <div className="first-content">
        <h2>Crescent Public School</h2>
        <p>
          To decrease the dropout ratio of students from school and to bring
          education awareness in slum areas. Kudwai Nagar, chaupala is one of
          the most crowded and slum areas in the Nanded district, in this area
          the ratio of illiteracy is very high, and 98% of families fight hard
          to manage their daily needs to survive
        </p>
        <p>
          Our mission is to uncover, recover and discover the unique gifts and
          talents that each child brings to school every day, from every area of
          the Nanded district belongs to the weaker Section and backwards-class
          people
        </p>
      </div>
      <div className="second-content">
        <h2>Our work in Crescent Public School</h2>
        <p>
          In this era quality education increased the financial burden on
          parents if we look at the underprivileged & weaker sections, they
          can’t afford the high campus for their children. So, to bridge this
          gap, the Crescent Public School promotes the decommercialization of
          the education system In Nanded district
        </p>
      </div>
      <div className="third-container">
        <div className="slider">
          <div id="slider">
            <div ref={(el) => (slidesRef1.current[0] = el)} className="slides">
              <img src={tvc3} className="images" width="100%" alt="" />
            </div>

            <div ref={(el) => (slidesRef1.current[1] = el)} className="slides">
              <img src={scl1} className="images" width="100%" alt="" />
            </div>

            <div ref={(el) => (slidesRef1.current[2] = el)} className="slides">
              <img src={scl2} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef1.current[3] = el)} className="slides">
              <img src={scl3} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef1.current[4] = el)} className="slides">
              <img src={scl4} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef1.current[5] = el)} className="slides">
              <img src={scl5} className="images" width="100%" alt="" />
            </div>

            <div id="dot">
              <span
                ref={(el) => (dotsRef1.current[0] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef1.current[1] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef1.current[2] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef1.current[3] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef1.current[4] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef1.current[5] = el)}
                className="dot"
              ></span>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            Our aim is to give quality education at free-minimal fees which are
            easily affordable for the parents without distracting the financial
            chart, to save the transportation charges and extra activities
            Charges, the Crescent Public School is operating the school in their
            locality to make their children for a continuation of education
            without dropping out from school. The Crescent public school is
            situated in one of the most backward & weaker section areas where
            the literacy rate is on a very critical scale
          </p>
        </div>
      </div>
      <div className="school-poster2"></div>
      <div className="third-container">
        <div className="description">
          <p>
            This area is one of the most populated in Nanded district and has
            more than 20+ multispecialty hospitals, 2+ Municipal corporation
            hospitals and 70+ normal & general practitioners. Blood transfusion
            safety remains an important public health concern in India. The
            Crescent Blood Centre has divided the blood units into various
            sectors; our motto is to provide hurdle-free blood to the
            underprivileged and weaker sections of society.
          </p>
        </div>
        <div className="slider">
      
          <div id="slider2">
            <div ref={(el) => (slidesRef2.current[0] = el)} className="slides">
              <img src={school3} className="images" width="100%" alt="" />
            </div>

            <div ref={(el) => (slidesRef2.current[1] = el)} className="slides">
              <img src={scl6} className="images" width="100%" alt="" />
            </div>

            <div ref={(el) => (slidesRef2.current[2] = el)} className="slides">
              <img src={scl7} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef2.current[3] = el)} className="slides">
              <img src={scl8} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef2.current[4] = el)} className="slides">
              <img src={scl9} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef2.current[5] = el)} className="slides">
              <img src={scl10} className="images" width="100%" alt="" />
            </div>

            <div id="dot">
              <span
                ref={(el) => (dotsRef2.current[0] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef2.current[1] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef2.current[2] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef2.current[3] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef2.current[4] = el)}
                className="dot"
              ></span>
              <span
                ref={(el) => (dotsRef2.current[5] = el)}
                className="dot"
              ></span>
             
            </div>
          </div>
        </div>
      </div>

      <ThreeCards />
    </>
  );
};

export default CrescentSchool;
