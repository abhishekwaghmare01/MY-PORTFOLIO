import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="container education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Eduction Details  
        </h2>
        <hr />
      <VerticalTimeline >
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#f7e6e6", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          date="2021 - 2025"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
          <h6 className="vertical-timeline-element-subtitle">Priyadarshini college of Engineering, Nagpur</h6>
          <p>
          Specialization : Electronics & Communication Engg.
          </p>
          <p>CGPA : 7.5</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#f7e6e6", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid  black" }}
          date="2019 - 2021"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Higher Secondary Certificate</h3>
          <h6 className="vertical-timeline-element-subtitle">Maharashtra Vidyalaya khaperkheda, Nagpur</h6>
          <p>
          Science Specialization :  PCMB 
          </p>
          <p>Percentage : 74.67%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>

    </>
  );
};

export default Education;
