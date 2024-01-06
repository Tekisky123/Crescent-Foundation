import React, { useEffect, useState, useRef } from 'react';
import "../Assets/Styles/MainSlider.css"
import main1 from "../Assets/Images/main1.jpeg"
import main2 from "../Assets/Images/main2.jpeg"
import main3 from "../Assets/Images/main3.jpeg"
import main4 from "../Assets/Images/main4.jpeg"
import main5 from "../Assets/Images/main5.jpg"
import main6 from "../Assets/Images/main6.jpg"
import main7 from "../Assets/Images/main7.jpeg"

const MainSlider = () => {
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
    <div id="slider1">
            <div
              ref={(el2) => (slidesRef1.current[0] = el2)}
              className="slides"
            >
              <img src={main1} className="images" width="100%" alt="" />
            </div>

            <div
              ref={(el2) => (slidesRef1.current[1] = el2)}
              className="slides"
            >
              <img src={main2} className="images" width="100%" alt="" />
            </div>

            <div
              ref={(el2) => (slidesRef1.current[2] = el2)}
              className="slides"
            >
              <img src={main3} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[3] = el2)}
              className="slides"
            >
              <img src={main4} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[4] = el2)}
              className="slides"
            >
              <img src={main5} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[5] = el2)}
              className="slides"
            >
              <img src={main6} className="images" width="100%" alt="" />
            </div>
            <div
              ref={(el2) => (slidesRef1.current[6] = el2)}
              className="slides"
            >
              <img src={main7} className="images" width="100%" alt="" />
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
        
  );
};

export default MainSlider;
