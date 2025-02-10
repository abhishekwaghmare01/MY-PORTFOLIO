import React from "react";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      <div className="hole" >
        <div className="container footer-distributed">
          <div className="footer-left">
            <h3>
              Abhishek <span>Developer</span>
            </h3>

            <p className="footer-links">
              <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>
            </p>

            <p className="footer-copy">
              Copyright © 2025 Abhishek Waghmare All rights reserved
            </p>
          </div>
          <div className="footer-center">
            <div className="see">
              <FaLocationDot className="icon" />
              <p>
                <span>Nagpur, </span>Maharashtra, India
              </p>
            </div>
            <div className="see">
              <MdWifiCalling3 className="icon" /> <p>+91 965741****</p>
            </div>
            <div className="see">
              <MdMarkEmailRead className="icon" />
              <p>
                <a href="#">abhiwaghmare3210@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-aboutme">
              <span>
                About me <FcAbout />
              </span>
              <span>Abhishek Waghmare</span> i am a full stack web developer
            </p>
            <div className="footer-icon">
              <a href="#">
                <FaLinkedin color="#2e619b" size={30} className="ms-2" />
              </a>
              <a href="#">
                <FaGithubSquare size={30} className="ms-2" />
              </a>
              <a href="#">
                <FaWhatsappSquare color="#15e16a" size={30} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
