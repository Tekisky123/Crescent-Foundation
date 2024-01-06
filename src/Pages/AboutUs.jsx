import React, { useEffect, useRef, useState } from "react";
import "../Assets/Styles/AboutUs.css";
import about1 from "../Assets/Images/about1.png"
import about3 from "../Assets/Images/about3.png"
import aboutslider1 from "../Assets/Images/aboutslider1.JPG"
import aboutslider2 from "../Assets/Images/aboutslider2.JPG"
import aboutslider3 from "../Assets/Images/aboutslider3.JPG"
import aboutslider4 from "../Assets/Images/aboutslider4.JPG"
import aboutslider5 from "../Assets/Images/aboutslider5.JPG"
import aboutslider6 from "../Assets/Images/aboutslider6.jpg"
import aboutslider7 from "../Assets/Images/aboutslider7.jpg"
import aboutslider8 from "../Assets/Images/aboutslider8.jpg"
import aboutslider9 from "../Assets/Images/aboutslider9.JPG"
import aboutslider10 from "../Assets/Images/aboutslider10.jpg"

const AboutUs = () => {
  const [index, setIndex] = useState(0);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);

  const changeSlide = () => {
    for (let i = 0; i < slidesRef.current.length; i++) {
      const currentSlide = slidesRef.current[i];
      const currentDot = dotsRef.current[i];
  
      if (currentSlide && currentDot) {
        currentSlide.style.display = "none";
        currentDot.classList.remove("active");
      }
    }
  
    const nextIndex = (index + 1) % slidesRef.current.length;
  
    const activeSlide = slidesRef.current[nextIndex];
    const activeDot = dotsRef.current[nextIndex];
  
    if (activeSlide && activeDot) {
      activeSlide.style.display = "block";
      activeDot.classList.add("active");
    }
  
    setIndex(nextIndex);
  };
  
  useEffect(() => {
    const interval = setTimeout(changeSlide, 2000);
  
    return () => clearTimeout(interval);
  }, [index]);
  return (
    <>
      <div className="first-about-container">
        <h2>Chief Functionary Message</h2>
        <p>“One who is not grateful to mankind is not grateful to Almighty”</p>
      </div>
      <div className="second-about-container">
        <img src={about1} alt="" />
        <div className="second-about-description">
          <h2>Mohammed Siddique</h2>
          <p>
            The Crescent foundation is initiated in 2008 by the Mohammed
            Siddique founded single handed with the mission to work for the
            betterment and upliftment of underprivileged societies in the
            education and health and skill development sector. He always says
            that doing little things with great love’ instead of ‘doing great
            things alone he born on 13th June 1977 in Nanded city in slum area
            call Nai Abadi. At his schooling, his financial condition was below
            the basic needs. Anyhow he completed intermediate, after school
            education, he enrolled for graduation in B.Sc. from SRTMUN
            University. Parallel he began his social aims in 1998, with a
            part-time job to survive and started living for other. after many
            hurdles and difficulties in the first year of Bachelor degree, where
            he establishes an NGO known as "NANDED DISTRICT ROLLER SKATING
            ASSOCIATION", for the Development of Nanded city Sports activities
            and had taken the responsibility as Chief Functionary (Founder
            Secretary). In this time, he organized more than 20 tournament &
            sports camps in these activities above 5000 Children have taken
            benefit and upgrade their sports skills. He was also a joint
            secretary of baitul-ul-uloom education society apart from this he
            was also a secretary of Muslim medical help centre, Muslim. Every
            human being has right to education, good health, good life style
            with equal opportunity in 2008 “THE CRESCENT FOUNDATION” was
            established by Mohammed Siddique with the mission to work for the
            betterment and upliftment for underprivileged societies in education
            and health and skill development sector. The organisation focus is
            to build and transformation life of the underprivileged, backward
            and weaker section community. To give them standard life style which
            make them to live a quality life style in the societies. Apart from
            this THE CRESCENT FOUNDATION has special focused to bring awareness
            about education and health in underprivileged communities
          </p>
        </div>
      </div>
      <div className="third-about-poster-slider">
      <div id="about-slider">
      <div ref={(el) => slidesRef.current[0] = el} className="slides">
        <img src={aboutslider1} className='images' width="100%" alt=''/>
      </div>

      <div ref={(el) => slidesRef.current[1] = el} className="slides">
        <img src={aboutslider2} className='images' width="100%" alt=''/>
      </div>

      <div ref={(el) => slidesRef.current[2] = el} className="slides">
        <img src={aboutslider3} className='images' width="100%" alt=''/>
      </div>

      <div ref={(el) => slidesRef.current[3] = el} className="slides">
        <img src={aboutslider4} className='images' width="100%" alt=''/>
      </div>

      <div ref={(el) => slidesRef.current[4] = el} className="slides">
        <img src={aboutslider5} className='images' width="100%" alt=''/>
      </div>
      <div ref={(el) => slidesRef.current[4] = el} className="slides">
        <img src={aboutslider6} className='images' width="100%" alt=''/>
      </div>
      <div ref={(el) => slidesRef.current[4] = el} className="slides">
        <img src={aboutslider7} className='images' width="100%" alt=''/>
      </div>
      <div ref={(el) => slidesRef.current[4] = el} className="slides">
        <img src={aboutslider8} className='images' width="100%" alt=''/>
      </div>
      <div ref={(el) => slidesRef.current[4] = el} className="slides">
        <img src={aboutslider9} className='images' width="100%" alt=''/>
      </div>
      <div ref={(el) => slidesRef.current[4] = el} className="slides">
        <img src={aboutslider10} className='images' width="100%" alt=''/>
      </div>

      <div id="dot">
        <span ref={(el) => dotsRef.current[0] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[1] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[2] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[3] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[4] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[5] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[1] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[2] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[3] = el} className="dot"></span>
        <span ref={(el) => dotsRef.current[4] = el} className="dot"></span>
      </div>
    </div>
      </div>
      <div className="third-about-container">
        <div className="third-about-description">
          <h2>VOICE OF FOUNDER</h2>
          <p>
            The Crescent Foundation has established itself as an organization
            committed towards welfare and empowerment, Upliftment, and
            transformation the life of the marginalized and voiceless section of
            the society. The organization has worked with multiple stakeholders:
            governmental bodies, media, private sector National NGOs and
            organizations to create a platform and an understanding towards this
            margined and voiceless section of the society. Taking impetus from
            its previous work TCF this year articulated and highlighted issues
            of important of education for daily wages working family,
            marginalized and Below poverty line family and working children at
            the Marathwada level as well. We continuously trying and giving our
            best to decommercialization of education system through crescent
            public school at Nanded District. TCF was able to present its
            experience of working with local School and campuses how to bring
            the education awareness and the decommercialization process in
            school systems with sustainability of organization the presentation
            also included how its work on sensitization and working with local
            governments private organization and juvenile justice system led to
            greater impact. TCF also understands the Barrier in education for
            marginalized and weaker section of the society. To ensure
            opportunities of education, health, nutrition, play and survival it
            was thus necessary to work on the concept of decommercialization of
            education system in Marathwada. All these activities made it
            possible for with the help of TCF hardworking and dedicated team and
            some of corporate social responsibilities team
          </p>
        </div>
        <img src={about3} alt="" />
      </div>
    </>
  );
};

export default AboutUs;
