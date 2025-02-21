import React from "react";
import "./About.css";
//import Img from "./Images/Profile_photo.jpg";
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              dolores sint consequuntur, possimus velit neque aut, facere
              mollitia reprehenderit architecto error qui eaque illum. Eveniet
              labore voluptatem quia dolorum accusamus. Accusantium aliquam id,
              temporibus corporis blanditiis velit provident similique
              exercitationem itaque repudiandae facere impedit maiores animi
              suscipit sapiente praesentium nobis reiciendis aperiam amet.
              Velit, numquam eligendi earum deserunt illo esse.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
