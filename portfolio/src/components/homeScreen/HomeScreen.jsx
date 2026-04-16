import React from "react";
import "./HomeScreen.css";
import SocialLogo from "../../assets/vector.png";
import GitLogo from "../../assets/VectorGit.png";
import Linkin from "../../assets/linkinLogo.png";
import MyPics from "../../assets/MyPic.jpg";

export default function HomeScreen() {
  const GitHub = "https://github.com/EzeanoroEbuka";
  const LinkedIn = "https://www.linkedin.com/in/chukwuebuka-ezeanoro-363651302/";

  // We'll reuse the Contact links since there are no explicit ones in the original hero, 
  // but it's standard practice to have them point to profile URLs.

  return (
    <section id="home" className="hero-section animate-fade-in">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-title">
          Ezeanoro <br /> <span className="hero-title-highlight">Chukwuebuka</span>
        </h1>
        <h2 className="hero-subtitle">Software Engineer</h2>

        <p className="hero-description">
          Passionate about coding and constant learning. I strive for consistency,
          clean architecture, and building performant web and software solutions.
        </p>

        <div className="hero-socials">
          <a href={GitHub} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <img src={GitLogo} alt="GitHub" />
          </a>
          <a href={LinkedIn} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <img src={Linkin} alt="LinkedIn" />
          </a>
          {/* Third icon from original design */}
          <a href="#contact" className="social-link" title="Contact">
            <img src={SocialLogo} alt="Social" />
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-backdrop"></div>
        <div className="hero-image-wrapper">
          <img src={MyPics} alt="Ezeanoro Chukwuebuka" style={{ width: "430px", height: "530px" }} />
        </div>
      </div>
    </section>
  );
}
