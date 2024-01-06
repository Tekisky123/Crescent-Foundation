import React, { useEffect, useRef, useState } from "react";
import "../Assets/Styles/BloodCentre.css";
import slider1 from "../Assets/Images/slider1.png";
import slider2 from "../Assets/Images/slider2.png";
import blood1 from "../Assets/Images/blood1.jpg"
import blood2 from "../Assets/Images/blood2.jpeg"
import blood3 from "../Assets/Images/blood3.jpeg"
import blood4 from "../Assets/Images/blood4.jpeg"
import blood5 from "../Assets/Images/blood5.jpg"
import blood6 from "../Assets/Images/blood6.jpg"
import blood7 from "../Assets/Images/blood7.jpg"
import blood8 from "../Assets/Images/blood8.jpg"
import blood9 from "../Assets/Images/blood9.jpg"
import blood10 from "../Assets/Images/blood10.jpg"
import HoverCards from "../Components/HoverCards";
import ThreeCards from "../Common/ThreeCards";

const BloodCenter = () => {
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
      <div className="poster"></div>
      <div className="first-content">
        <h2>The Crescent blood Centre </h2>
        <p>
          The Crescent Blood Centre was laid in 2020 under the banner of THE
          CRESCENT FOUNDATION at the time of the pandemic waves. Where the
          people were facing a shortage of blood for the needy and thalassemia
          patient apart from this TCBC have the mission and vision to provide
          safe and secure blood to the underprivileged and financially weaker
          section patient of the communities
        </p>
        <p>
          TCBC operate on no replacement donor policy and free a safer, more
          plentiful supply believes that if a patient needs a life-saving
          transfusion, the blood required should be available, especially for
          financially underprivileged patient
        </p>
      </div>
      <div className="second-content">
        <h2>Our work in The Crescent Blood Centre</h2>
        <p>
          The Crescent Blood Centre is a centre for the poor and weaker section
          societies. The Crescent Blood Center is a charity-based blood center
          that offers free blood units to the financially weaker section
          community. Every day in the world’s poor and backward community people
          die because of a shortage of blood. To reduce India's inequities in
          blood safety and sufficiency. Since 2020, we have helped over 5000+
          poorly resourced patients from civil hospitals and private hospitals
          in Nanded district around in Maharashtra better serve their lives
        </p>
      </div>
      <div className="third-container">
        <div className="slider">
          <div id="slider1">
            <div ref={(el2) => (slidesRef1.current[0] = el2)} className="slides">
              <img src={slider1} className="images" width="100%" alt="" />
            </div>

            <div ref={(el2) => (slidesRef1.current[1] = el2)} className="slides">
              <img src={blood1} className="images" width="100%" alt="" />
            </div>

            <div ref={(el2) => (slidesRef1.current[2] = el2)} className="slides">
              <img src={blood2} className="images" width="100%" alt="" />
            </div>
            <div ref={(el2) => (slidesRef1.current[3] = el2)} className="slides">
              <img src={blood3} className="images" width="100%" alt="" />
            </div>
            <div ref={(el2) => (slidesRef1.current[4] = el2)} className="slides">
              <img src={blood4} className="images" width="100%" alt="" />
            </div>
            <div ref={(el2) => (slidesRef1.current[5] = el2)} className="slides">
              <img src={blood5} className="images" width="100%" alt="" />
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
             
            </div>
          </div>
        </div>
        <div className="description">
          <h2>Free blood bags to underprivileged section patient</h2>
          <p>
            The Crescent Blood Centre is always looking forward to decreasing
            the death ratio in India due to the shortage of blood units. No one
            should lose their life due to a shortage of blood. THE CRESCENT
            BLOOD CENTRE is one of the single blood bank communities in the
            whole of Marathwada which is situated in the old city of Nanded
          </p>
        </div>
      </div>
      <div className="poster2"></div>
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
              <img src={slider2} className="images" width="100%" alt="" />
            </div>

            <div ref={(el) => (slidesRef2.current[1] = el)} className="slides">
              <img src={blood6} className="images" width="100%" alt="" />
            </div>

            <div ref={(el) => (slidesRef2.current[2] = el)} className="slides">
              <img src={blood7} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef2.current[3] = el)} className="slides">
              <img src={blood8} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef2.current[4] = el)} className="slides">
              <img src={blood9} className="images" width="100%" alt="" />
            </div>
            <div ref={(el) => (slidesRef2.current[5] = el)} className="slides">
              <img src={blood10} className="images" width="100%" alt="" />
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
      <ThreeCards/>
    </>
  );
};

export default BloodCenter;
