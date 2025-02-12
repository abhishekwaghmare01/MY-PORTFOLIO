import React from "react";
import "./MobileNav.css";
import { FiMenu } from "react-icons/fi";

const MobileNav = () => {
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile nav-header">
          <FiMenu size={30} />
          <span>My Portfolio App</span>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
