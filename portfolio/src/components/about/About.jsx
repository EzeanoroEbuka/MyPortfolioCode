import React from "react";
import "../about/About.css";
import MyCv from "../../assets/Ezeanoro-Ebuka-Resume.pdf";
import { Download } from "lucide-react";

export default function About() {
  return (
    <div id="about-body">
      <div>
        <p className="Header">About Me</p>
      </div>
      <div className="Front-text">
        <h4>
          Highly motivated and result-driven in software
          development,demonstrating success in collaborating with
          cross-functional teams to solve problems and improve overall workflow
          efficiency.
        </h4>
      </div>

      <pre
        style={{ textAlign: "center", fontWeight: "bolder", marginTop: "40px" }}
      >
        | EXPLORE |
      </pre>
      <pre
        style={{ textAlign: "center", fontWeight: "bolder", marginTop: "40px" }}
      >
        {" "}
        ——— \\\/// ———
      </pre>

      <div className="content">
        <div className="design-dev">
          <div>
            <h2>
              <p>Design</p>
            </h2>
            <h4>
              Proven ability to design,implement,test and deploy software
              solutions in various platforms.
            </h4>
          </div>
          <div>
            <h2>
              <p>Development</p>
            </h2>
            <h4 className="develop-text">
              developing software solutions,With hands-on experience using tools
              such as : Maven , React, Django , SpringBoot.
            </h4>
          </div>
        </div>
        <div>
          <h2>
            <p>Maintainance</p>
          </h2>
          <h4>
            Debug technical issues , I posses problem-solving skills with a
            continuous drive for learning to maintain and staying updated with
            the latest tech trends.
          </h4>
          <nav className="cv-btns">
            <a href={MyCv} target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  padding: "25px 60px",
                  background: "aqua",
                  fontWeight: "bolder",
                  borderRadius: 10,
                }}
              >
                OPEN CV
              </button>
            </a>
            <a download href={MyCv}>
              <pre>
                <button
                  style={{
                    padding: "20px",
                    background: "rgb(242, 6, 50)",
                    fontWeight: "bolder",
                    borderRadius: 10,
                  }}
                >
                  DOWNLOAD CV <Download size="20" />
                </button>
              </pre>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
