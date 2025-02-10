import React from "react";
import "./Menus.css";

import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcConferenceCall,
  FcContacts,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

import { Link } from "react-scroll";

//{toggle} => destructure kiya haiii to access the toggle properties
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="nav-profile-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvQMZxJH8AaKnsT3QDEwrVJZwpTq8myTfLA&s"
              alt="Profile Pic"
            />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}>
                <FcAbout />
                About
                </Link>
                
              </div>
              <div className="nav-link">
                <Link to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}>
                <FcPortraitMode />
                Internships
                </Link>
               
              </div>
              <div className="nav-link">
                <Link to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}>
                <FcVideoProjector />
                Projects
                </Link>
               
              </div>
              <div className="nav-link">
                <Link  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}>
                <FcBiotech />
                Tech Stack
                </Link>
                
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Internships" />
              </div>
              <div className="nav-link">
                <FcVideoProjector title="Projects" />
              </div>
              <div className="nav-link">
                <FcBiotech title="Tech Stack " />
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Education" />
              </div>

              <div className="nav-link">
                <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
