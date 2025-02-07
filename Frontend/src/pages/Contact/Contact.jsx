import React from "react";
import './Contact.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";



const Contact = () => {
  return (
    <>
      <div className="container contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 con-lg-6 col-xl-6 col-sm-12 ">
              <div className="card1">
                <div className="row border-line bgg">
                  <img
                    src="https://st3.depositphotos.com/1385248/14794/i/450/depositphotos_147947683-stock-photo-hands-with-contact-us-words.jpg"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 bgg  ">
              <div className="card2 d-flex card border-0 px-4 py-3 toppp">
                <div className="row">
                  <div className="row">
                    <h4>Contact with
                    <FaLinkedin color="#2e619b" size={30} className="ms-2"/>
                    <FaGithubSquare  size={30} className="ms-2"/>
                    <FaWhatsappSquare color="#15e16a" size={30} className="ms-2"/>
                    </h4>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3 ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Good Name"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your E-mail Address"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>
                  <div className="row px-3 ">
                    <button className="button " type="submit">
                     <p className="sizeee">SEND MESSAGE</p> 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
