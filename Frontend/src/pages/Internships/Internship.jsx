import React from "react";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "./Internship.css";
import abhiCV from "../../assets/docs/abhiCV.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Internship = () => {
  return (
    <>
      <div className="container intern" id="internships">
        <div className="intern-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Inetrnships
          </h2>
          <hr />
        </div>
        <Timeline>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: "#e86971" }}
          >
            <div className="col" style={{color:"white"}}>

            <h3 >Full Stck Web Developer</h3>
            <h5 style={{}}>Zidio Development PVT. LTD.</h5>
            <p>
            Developed a MERN-based Certificate Verification System with seamless front-end and back-end integration.

            </p>
            <p>
            Managed MongoDB databases for efficient storage and retrieval.
            </p>
            <p>
            Ensured data security and integrity in all projects.
            </p>
            <a className="btn btn-cv " href={abhiCV} download="AbhishekCV.pdf">
              Certificate
            </a>
            
            </div>
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: "#e86971" }}
          >
            <div className="col" style={{color:"white"}}>
            <h3>Web Developer</h3>
            <h4>YHills Edutech Pvt. Ltd.</h4>
            <p>
            Created a responsive portfolio using HTML, CSS, and JavaScript for cross-device functionality.

            </p>
            <p>
            Optimized performance for fast loading and better user experience.
            </p>
            <p>
            Deployed the portfolio online to showcase skills and projects.
            </p>
            <a className="btn btn-cv " href={abhiCV} download="AbhishekCV.pdf">
              Certificate
            </a>
            </div>
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: "#e86971" }}
          >
            <div className="col" style={{color:"white"}}>
            <h3>Web Developer</h3>
            <h4>Cloud Cluster Pvt. Ltd.</h4>
            <p>
            Built a responsive Amazon clone using HTML, CSS, and JavaScript with cross-device functionality.
            </p>
            <p>
            Enhanced performance for fast loading and better user experience.
            </p>
            <p>
            Deployed the project online to showcase skills.
            </p>
            <a className="btn btn-cv " href={abhiCV} download="AbhishekCV.pdf">
              Certificate
            </a>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default Internship;
