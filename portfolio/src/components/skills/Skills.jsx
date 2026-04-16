import React from "react";
import './Skills.css';
import Html from "../../assets/Html-Logo.png";
import CSSLogo from "../../assets/CSS-Logo.png";
import Javascript from "../../assets/Javascript-Logo.png";
import ReactLogo from "../../assets/React-Logo.png";
import Git from "../../assets/git.png";
import Figma from "../../assets/figma.png";
import NodeLogo from "../../assets/Nodejs-Logo.png";
import MySqlLogo from "../../assets/SQL-Logo.png";
import MongoLogo from "../../assets/Mongo-Logo.png";
import TypeScriptLogo from "../../assets/Typescript-Logo.png";
import C from "../../assets/C-Logo.png";

function Skills() {
  const currentSkills = [
    { name: "HTML", logo: Html },
    { name: "CSS", logo: CSSLogo },
    { name: "JavaScript", logo: Javascript },
    { name: "React", logo: ReactLogo },
    { name: "GIT", logo: Git },
    { name: "Figma", logo: Figma },
  ];

  const learningSkills = [
    { name: "Node.js", logo: NodeLogo },
    { name: "MySQL", logo: MySqlLogo },
    { name: "MongoDB", logo: MongoLogo },
    { name: "TypeScript", logo: TypeScriptLogo },
    { name: "Objective-C", logo: C },
  ];

  return (
    <section id="skill" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container">
        <div className="skills-category">
          <h3 className="skills-category-title">Using Now</h3>
          <div className="skills-grid">
            {currentSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.logo} alt={skill.name} />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3 className="skills-category-title">Currently Learning</h3>
          <div className="skills-grid">
            {learningSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.logo} alt={skill.name} />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
