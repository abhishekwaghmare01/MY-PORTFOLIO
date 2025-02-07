import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-distributed">
        <div className="footer-left">
          <h3>
            Abhishek <span>Developer</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>
          </p>

          <p className="footer-copy">
            Copyright © 2025 <span> Abhishek Waghmare  </span>
             All rights reserved
          </p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Nagpur</span>Maharashtra, India
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+91 965741****</p>
          </div>
          <i className="fa fa-envelope"></i>
          <p><a href="#">abhiwaghmare3210@gmail.com</a></p>
        </div>
        <div className="footer-right">
            <p className="footer-aboutme">
                <span>About me</span>
                <span>Abhishek Waghmare</span> i am a full stack web developer
            </p>
        </div>
        <div className="footer-icon">
            <a href="#"><i class="fa fa-linkedin"></i></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
