import React from "react";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "./Internship.css";
import abhiCV from '../../assets/docs/abhiCV.pdf';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Internship = () => {
  return (
    <>
      <div className="container intern">
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
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
            <a className="btn btn-cv " href={abhiCV} download="AbhishekCV.pdf">Certificate</a>
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: "#e86971" }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
          </TimelineItem>
          <TimelineItem
            key="001"
            dateText="11/2010 – Present"
            style={{ color: "#e86971" }}
          >
            <h3>Title, Company</h3>
            <h4>Subtitle</h4>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
            <p>
              Est incididunt sint eu minim dolore mollit velit velit commodo ex
              nulla exercitation.
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default Internship;
