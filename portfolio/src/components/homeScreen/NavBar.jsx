import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Moon, Sun } from "lucide-react";
import "./NavBar.css"; 

const NavBar = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check if user previously preferred light mode
    if (document.body.classList.contains("light-mode")) {
      setIsLightMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle("light-mode");
  };

  return (
    <nav className="navbar animate-fade-in">
      <div className="nav-container">
        <Link to="home" smooth={true} duration={500} className="nav-logo">
          <span className="nav-logo-icon">{'<'}</span>
          EBESTKEYZ
          <span className="nav-logo-icon">{'/>'}</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="home" smooth={true} duration={500} spy={true} activeClass="active">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="about-body" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="skill" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>
              Skills
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="project" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>
              Projects
            </Link>
          </li>
          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="nav-contact-btn">Contact Me</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
