//import React, { useState } from "react";
//import axios from "axios";
import "./Contact.css";
//import { toast } from "react-toastify";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wany3st", "template_08vo47k", form.current, {
        publicKey: "o6OPZ5z6fCf0ey9AL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div
        className="container contact"
        id="contact"
        data-aos="zoom-in-left"
        data-aos-duration="1500"
      >
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line bgg">
                  <img
                    src="https://user-images.githubusercontent.com/5800726/72228874-7b84ec80-35d0-11ea-82bf-186f352962f0.jpg"
                    alt="contact"
                    className="image" style={{height:"25rem", width:"30rem", marginLeft:"44px", marginBottom:"10px"}}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 bgg xxx">
              <div className="card2 d-flex card border-0 px-4 py-3 toppp">
                <div className="row">
                  <h4>
                    Contact with
                    <FaLinkedin color="#2e619b" size={30} className="ms-2" />
                    <FaGithubSquare size={30} className="ms-2" />
                    <FaWhatsappSquare
                      color="#15e16a"
                      size={30}
                      className="ms-2"
                    />
                  </h4>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-3">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Enter your Good Name"
                      className="mb-3"
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      name="from_name"
                      placeholder="Enter your E-mail Address"
                      className="mb-3"
                    />
                  </div>

                  <div className="row px-3">
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>

                  <div className="row px-3">
                    <button  className="button sizeee" type="submit" value="Send">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
