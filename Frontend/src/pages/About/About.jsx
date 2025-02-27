import React from "react";
import "./About.css";

import Img from "/src/Images/Profile_photo.jpg";

const About = () => {
  return (
    <>
    
      <div
        className="about"
        id="about"
        data-aos="flip-left"
        data-aos-anchor-placement="top-center"
        data-aos-duration="2000"
      >
        <div className="row">
          <div
            className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img"
            data-aos="zoom-in"
          >
            <img src={Img} alt="Profile" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am Abhishek Waghmare, a results-driven software developer with
              hands-on experience in full-stack web development and the MERN
              stack. Skilled in designing scalable applications, implementing
              secure APIs, and optimizing performance, I have a strong
              foundation in Java, JavaScript, React.js, Node.js, SQL, NoSQL,
              Hibernate and Spring Boot. I have completed multiple projects,
              including a real-time video conferencing platform, a job portal,
              and a certificate verification system. With internship experience
              at Zidio Development, YHills Edutech and Cloud Cluster, I am
              passionate about solving complex problems, collaborating with
              teams, and continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
