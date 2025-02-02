import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import abhiCV from '../../assets/docs/abhiCV.pdf';

const Home = () => (
  <>
    <div className="container-fluid home-container">
      <div className="container home-content">
        <h2>𝐇𝐢 👋 𝐈'𝐦 𝐚</h2>
        <h1>
          <Typewriter
            options={{
              strings: ["Full Stack Web Developer !", "Full Stack JAVA Developer !", "MERN Stack Developer !", "MEAN Stack Developer !"],
              autoStart: true,
              loop: true,
            }} />
        </h1>
        <div className="home-buttons">
          <button className="btn btn-hire">Hire Me!</button>
          <a className="btn btn-cv " href={abhiCV} download="AbhishekCV.pdf">My Resume</a>
        </div>
      </div>
    </div>
  </>
);

export default Home;
