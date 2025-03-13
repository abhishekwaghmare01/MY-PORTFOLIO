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
            dateText="06/2024 – 12/2024"
            style={{ color: "#e86971" }}
          >
            <div className="col">
              <h3 style={{ color: "yellow" }}>Full Stck JAVA Developer</h3>
              <h5 style={{ color: "Highlight" }}>
                Zidio Development PVT. LTD.
              </h5>
              <p>
                Developed a MERN-based Certificate Verification System with
                seamless front-end and back-end integration.
              </p>
              <p>
                Managed MongoDB databases for efficient storage and retrieval.
              </p>
              <p>Ensured data security and integrity in all projects.</p>
              <div className="home-buttons">
                <a
                  className="btn btn-cv "
                  href={abhiCV}
                  download="AbhishekCV.pdf"
                >
                  Certificate
                </a>
              </div>
            </div>
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="06/2024 – 12/2024"
            style={{ color: "#e86971" }}
          >
            <div className="col">
              <h3 style={{ color: "yellow" }}>Full Stck Web Developer</h3>
              <h5 style={{ color: "Highlight" }}>
                Zidio Development PVT. LTD.
              </h5>
              <p>
                Developed a MERN-based Certificate Verification System with
                seamless front-end and back-end integration.
              </p>
              <p>
                Managed MongoDB databases for efficient storage and retrieval.
              </p>
              <p>Ensured data security and integrity in all projects.</p>
              <div className="home-buttons">
                <a
                  className="btn btn-cv "
                  href={abhiCV}
                  download="AbhishekCV.pdf"
                >
                  Certificate
                </a>
              </div>
            </div>
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="01/2024 – 06/2024"
            style={{ color: "#e86971" }}
          >
            <div className="col">
              <h3 style={{ color: "yellow" }}>Web Developer</h3>
              <h5 style={{ color: "Highlight" }}>YHills Edutech Pvt. Ltd.</h5>
              <p>
                Developed and managed three full-stack projects using HTML, CSS,
                JavaScript, and SQL.
              </p>
              <p>
                Gained hands-on experience with Postman APIs and server
                deployment.
              </p>
              <p>
                Worked as a Web Developer at YHills EduTech Pvt. Ltd., handling
                both frontend and backend development.
              </p>
              <div className="home-buttons">
                <a
                  className="btn btn-cv "
                  href={abhiCV}
                  download="AbhishekCV.pdf"
                >
                  Certificate
                </a>
              </div>
            </div>
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="06/2023 – 11/2023"
            style={{ color: "#e86971" }}
          >
            <div className="col">
              <h3 style={{ color: "yellow" }}>Web Developer</h3>
              <h5 style={{ color: "Highlight" }}>Cloud Cluster Pvt. Ltd.</h5>
              <p>
                Developed and maintained three web projects using HTML, CSS, and
                JavaScript.
              </p>
              <p>
                Gained hands-on experience in deploying projects on servers for
                live production.
              </p>
              <p>
                Worked as a Web Developer at Cloud Cluster Company, ensuring
                efficient and scalable web solutions.
              </p>
              <div className="home-buttons">
                <a
                  className="btn btn-cv "
                  href={abhiCV}
                  download="AbhishekCV.pdf"
                >
                  Certificate
                </a>
              </div>
            </div>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default Internship;
