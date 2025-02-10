import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import abhiCV from "../../assets/docs/abhiCV.pdf";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container " id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaSun /> : <BsMoonStarsFill />}
        </div>
        <div className="container home-content">
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
            <button className="btn btn-hire">Hire Me!</button>
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
