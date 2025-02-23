import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import abhiCV from "../../assets/docs/abhiCV.pdf";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import Vid from "/src/Images/black.mp4";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
    <div className="all">
      <video src={Vid} style={{height:"45vh", position:""}}></video>
    </div>
    <div className="all">
      <video src={Vid} style={{height:"45vh", position:""}}></video>
    </div>
    <div className="all">
      <video src={Vid} style={{height:"45vh", position:""}}></video>
    </div>
      <div className="container-fluid home-container  " id="home">
      
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaSun /> : <BsMoonStarsFill />}
        </div>
        <div
          className="container home-content"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2>𝐇𝐢 👋 𝐈'𝐦 𝐚</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer !",
                  "Full Stack JAVA Developer !",
                  "MERN Stack Developer !",
                  "MEAN Stack Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=9657416329"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me!
            </a>

            <a className="btn btn-cv " href={abhiCV} download="AbhishekCV.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
