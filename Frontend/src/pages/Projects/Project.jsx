import React from "react";
import "./Project.css";
import img from "/src/Images/meeteasy.png";
import img1 from "/src/Images/prot.png";

const Project = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top recent projects with live links and source code
        </p>
        {/* card Design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack Project</span>
                <img src={img} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NodeJS</span>
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">Socket.io</span>
                <span className="card-detail-badge">ExpressJS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase ">MeetEasy App</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack Project</span>
                <img src={img} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NodeJS</span>
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">Socket.io</span>
                <span className="card-detail-badge">ExpressJS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase ">MeetEasy App</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack Project</span>
                <img src={img1} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NodeJS</span>
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">ExpressJS</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase ">My Prosonal Portfolio</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ paddingTop: "28px" }}>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack Project</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SuuNrgIeWk_TlxfGyGG85zFTMes2cKxHsg&s"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">JAVA</span>
                <span className="card-detail-badge">JDBC</span>
                <span className="card-detail-badge">MySQL</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase ">
                    Inventary Management system
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ paddingTop: "28px" }}>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Full Stack JAVA Project
                </span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SuuNrgIeWk_TlxfGyGG85zFTMes2cKxHsg&s"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">JAVA</span>
                <span className="card-detail-badge">Hibernate</span>
                <span className="card-detail-badge">MySQL</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase ">
                    Smart City Management System
                  </h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ paddingTop: "28px" }}>
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">
                  Full Stack JAVA Project
                </span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SuuNrgIeWk_TlxfGyGG85zFTMes2cKxHsg&s"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">JAVA</span>
                <span className="card-detail-badge">SpringBoot</span>
                <span className="card-detail-badge">MySQL</span>
                <span className="card-detail-badge">Postman Api</span>
              </div>
              <div className="card-body text-center ">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase ">Inventory</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
