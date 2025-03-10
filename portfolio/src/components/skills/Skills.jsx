import React from "react";
import './Skills.css'
import Html from "../../assets/Html-Logo.png";
import CSSLogo from "../../assets/CSS-Logo.png";
import Javascript from "../../assets/Javascript-Logo.png";
import ReactLogo from "../../assets/React-Logo.png";
import Git from "../../assets/git.png";
import Figma from "../../assets/figma.png";
import NodeLogo from "../../assets/Nodejs-Logo.png"
import MySqlLogo from "../../assets/SQL-Logo.png"
import MongoLogo from "../../assets/Mongo-Logo.png"
import TypeScriptLogo from "../../assets/Typescript-Logo.png"
import C from "../../assets/C-Logo.png"


function Skills() {
  return (
    <div id="skill">
      <div>
        <p className="Header">Skills</p>
      </div>
      <div className="Logos">
        <p style={{margin: "60px 30px"}}><h3>USING NOW: </h3></p>
        <ul>
          <li  style={{width:"90%", alignContent:"center"}}>
            <img src={Html} alt="HTML" width={50} height={60} />
            <img src={CSSLogo} alt="CSS" width={50} height={60} />
            <img src={Javascript} alt="JavaScript"  width={50} height={60} />
      
            <img src={ReactLogo} alt="React" width={50} height={60} />
            <img src={Git} alt="GIT"  width={50} height={60} />
            <img src={Figma} alt="Figma"  width={50} height={60} />
          </li>
          <li  style={{width:"89%",alignContent:"center"}}>
            <p>HTML</p>
            <p style={{marginLeft:"10px"}}>CSS</p>
            <p>JAVASCRIPT</p>
            <p style={{marginRight:"20px"}}>REACT</p>
            <p style={{marginRight:"13px"}}>GIT</p>
            <p>FIGMA</p>
          </li>
        </ul>

        <p style={{margin: "60px 30px"}}><h3>LEARNING: </h3></p>
        <ul>
          <li  style={{width:"75%", alignContent:"center"}}>
            <img src={NodeLogo} alt="NodeJs" width={50} height={60} />
            <img src={MySqlLogo} alt="SQL" width={50} height={60} />
            <img src={MongoLogo} alt="MongoDB"  width={40} height={70} />
            <img src={TypeScriptLogo} alt="TypeScript" width={50} height={60} />
            <img src={C} alt="Object C" width={50} height={60} />

          </li>
          <li  style={{width:"80%",alignContent:"center"}}>
            <p>NODE-JS</p>
            <p style={{marginLeft:"30px"}}>SQL</p>
            <p>MONGO-DB</p>
            <p>TYPESCRIPT</p>
            <p style={{marginRight:"25px"}}>OBJECT C</p>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
