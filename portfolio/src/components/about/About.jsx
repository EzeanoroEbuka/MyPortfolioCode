import React from "react";
import "./About.css";
import MyCv from "../../assets/Ezeanoro-Ebuka-Resume.pdf";
import { Download, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about-body" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text-container">
          <p className="about-text-lead">
            Highly motivated and result-driven in software development, demonstrating success in collaborating with cross-functional teams to solve problems and improve overall workflow efficiency.
          </p>
          <p className="about-text">
            I believe that great software bridges the gap between design and functionality. My approach involves not only writing clean, maintainable code but also understanding the core problem to deliver optimal solutions. Constant learning and adaptability are the pillars of my career as an engineer.
          </p>
          
          <div className="cv-actions">
            <a href={MyCv} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open CV <ExternalLink size={18} />
            </a>
            <a href={MyCv} download className="btn-secondary">
              Download CV <Download size={18} />
            </a>
          </div>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>Design</h3>
            <p>Proven ability to design, implement, test and deploy software solutions across various platforms, prioritizing exceptional user experiences.</p>
          </div>
          <div className="about-card">
            <h3>Development</h3>
            <p>Developing robust software solutions with hands-on experience using modern tools and frameworks like Maven, React, Django, and SpringBoot.</p>
          </div>
          <div className="about-card">
            <h3>Maintenance</h3>
            <p>Adept at debugging technical issues with strong problem-solving skills, continuously staying updated with the latest tech trends to ensure systems remain efficient over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
