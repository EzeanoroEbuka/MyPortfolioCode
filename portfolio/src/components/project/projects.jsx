import React from "react";
import "./project.css";
import FirstProject from "../../assets/first-project.png";
import SecondProject from "../../assets/second-project.jpg";
import ThirdProject from "../../assets/Third-project.jpg";

function projects() {
  return (
    <div id="project">
      <p className="Header">Projects</p>

      <h4><p style={{ textAlign: "center",  }}>Most recent projects</p></h4>
      <ul className="project-list">
        <li>
          <img
            src={FirstProject}
            alt="ProJect"
            style={{paddingTop:"10px", borderRadius:"15px"}}
            width={"200vw"}
            height={"300vh"}
          />
          <h4>Leak Sense</h4>
          <h5 style={{ width: "16vw"}}>
            Leak Sense isn’t just an app,it’s a Home safety system. It works
            hand-in-hand with a Safty gas leakage detecting device I built from scratch,
            sending real-time alerts to keep you safe from potential hazards.
          </h5>
        </li>
        <li>
          <img
            src={SecondProject}
            alt="Project"
            style={{paddingTop:"10px", borderRadius:"15px"}}
            width={"200vw"}
            height={"300vh"}
          />
          <h4>Android Calculator</h4>
          <h5 style={{ width: "16vw"}}>
            The Android Calculator is just a simple andoid calculator app I built using 
            android Studio utilizing android functionality.It was an insightful design 
            I first made using the android tool.
          </h5>
        </li>
        <li>
          <img
            src={ThirdProject}
            alt="Project"
            style={{paddingTop:"10px", borderRadius:"15px"}}
            width={"200vw"}
            height={"300vh"}
          />
          <h4>Android Tictactoe Game</h4>
          <h5 style={{ width: "16vw"}}>
            Tic tac toe as we all know it is a board game I built using 
            android studio and android functionalities.it's able to detect winners and rule a line 
            across the pattern where it found the winner and increament the winners score in their score board
          </h5>
        </li>
      </ul>
    </div>
  );
}

export default projects;
