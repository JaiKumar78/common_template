import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NewSlider from "./NewSlider";

const About = () => {
  const youtubeChannelURL = "https://www.youtube.com/@st.josephsgroupofinstituti7921/videos";

  return (
    <div className="about-section-container" style={{ marginTop: '8vh' }}>
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://www.youtube.com/embed/x88M3LOKA6g?si=uGY7-CVQjWGDX1I6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
      <NewSlider />
      <div className="right-dept">
      <div className="about-section-text-container" style={{ lineHeight: '1.5' }}>
        {/* <p className="primary-subheading">About</p> */}
        
        <p className="primary-text">- The department of Artificial Intelligence and Data Science (ADS) was established in the academic year 2022 with an intake of 60. </p>
        <p className="primary-text">- With increasing demand for the course, the intake increased to 180 in 2023</p>
        <p className="primary-text">- This is a 4-year degree course approved by AICTE, New Delhi affiliated to Anna University, Chennai.</p>
        <p className="primary-text">- The Department has experienced faculty members state-of-the-art infrastructure and equipment's/software’s with latest configurations.</p>
        <p className="primary-text">- The curriculum includes core subjects and elective subjects based on recent trends in Artificial Intelligence and Data Science.</p>
        {/* <p className="primary-text">- Several value-added courses are conducted beyond curriculum</p>
        <p className="primary-text">- Facilitating Industrial Visits and NGOs for the comprehensive development of the students </p> */}
        <div className="about-buttons-container">
          <a href="https://stjosephstechnology.ac.in/web/ads/"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            rel="noopener noreferrer" >
            <button className="secondary-button">Home</button>
          </a>
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;