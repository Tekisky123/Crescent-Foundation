import React, { useEffect, useRef, useState } from "react";
import "../Assets/Styles/BloodCentre.css";
import tvc3 from "../Assets/Images/tvc3.png";
import ThreeCards from "../Common/ThreeCards";
const ClothingCenter = () => {
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
      <div className="center-poster"></div>
      <div className="first-content">
        <h2>The Crescent Clothing Center</h2>
        <p>
          THE CRESCENT FOUNDTAION will utilize the Clothing manufacture unit for
          the employment. Whatever stitching embroidery certified beneficiaries
          passed out from TCF skill development centre that will be placed in
          THE CRESCENT CLOTHING with good package and flexibility of work time.
          This will help us to target the more and more beneficiaries for to
          bring a transformation and sustainability in underprivileged community
          women to upgrade their skill for smooth survival with respectful work.
        </p>
        <p>
          350+ women and girls underprivileged community from Nanded District,
          state Maharashtra are benefiting from this project
        </p>
      </div>
      <div className="second-content">
        <h2>Our work in The Crescent Clothing Center</h2>
        <p>
          Targeted numbers of lives touched through intervention. The Crescent
          Foundation work for the betterment and upliftment for underprivileged
          community. As the crescent are in to the education, Health, and skill
          development sector we target different types of beneficiaries in
          different project sector. The crescent skill development sector has
          successfully completed various batches since 2018 every year we
          conduct traditional stitching and embroidery course for
          underprivileged community women to bring an impactful transformation
          and financial sustainability to survive better and standard lifestyle.
          We the crescent foundation target 60 underprivileged community women
          every year through the national urban livelihood mission direct to the
          beneficiaries. Maharashtra government initiative collaboration project
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
              <img src={tvc3} className="images" width="100%" alt="" />
            </div>

            <div
              ref={(el2) => (slidesRef1.current[2] = el2)}
              className="slides"
            >
              <img src={tvc3} className="images" width="100%" alt="" />
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
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            With this project we can impact 350+ beneficiaries live for
            permanent earning. This will give the good revenue to the
            beneficiaries. The Crescent Skill and Clothing centre is the venture
            of TCF to bring out the impactful innovation and sustainability in
            project we have designed the strategy, implementation, and outcomes
            to target
          </p>
        </div>
      </div>
      <div className="center-poster2"></div>

      <ThreeCards />
    </>
  );
};

export default ClothingCenter;
