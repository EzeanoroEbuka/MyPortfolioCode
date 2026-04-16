import React from "react";
import "./project.css";
import FirstProject from "../../assets/first-project.png";
import SecondProject from "../../assets/second-project.jpg";
import ThirdProject from "../../assets/Third-project.jpg";

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "Leak Sense",
      image: FirstProject,
      description: "Leak Sense isn’t just an app; it’s a modern home safety system. It works hand-in-hand with a safety gas leakage detecting device I built from scratch, sending real-time alerts to keep you safe from potential hazards."
    },
    {
      id: 2,
      title: "Android Calculator",
      image: SecondProject,
      description: "A functional and aesthetic Android calculator app built natively using Android Studio. It utilizes core Android functionalities and provided heavy insight into the native development toolkit during my learning phase."
    },
    {
      id: 3,
      title: "Android TicTacToe",
      image: ThirdProject,
      description: "A classic board game reimagined in Android Studio. It features intelligent win detection to rule a line across the winning pattern and seamlessly increments the scoreboard for a competitive experience."
    }
  ];

  return (
    <section id="project" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="projects-intro">A selection of my most recent work.</p>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {/* Simulated links for future expansion */}
                <button className="project-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
