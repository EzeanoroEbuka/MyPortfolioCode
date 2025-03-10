import React, { useRef } from "react";
import "../homeScreen/HomeScreen.css";
import Header from "./Header";
import Logo from "../../assets/logo.png";
import SocialLogo from "../../assets/vector.png";
import GitLogo from "../../assets/vectorGit.png";
import Linkin from "../../assets/linkinLogo.png";
import Rectangle from "../../assets/Rectangle 68.png";
import MyPics from "../../assets/MyPic.jpg";

export default function HomeScreen() {
  return (
    <div id="home">
      <div className="parent">
        <div className="greating-text">
          <img
            className="logo"
            src={Logo}
            alt="P"
            style={{
              paddingBottom: "80px",
              paddingTop: "30px",
              position: "static",
            }}
          />
          <p className="myName">
            <span style={{ fontSize: "bold", fontWeight: "bolder" }}>
              Hi, I am
            </span>
          </p>
          <p className="myName">
            <span style={{ fontWeight: "bold" }}>Ezeanoro Chukwuebuka</span>
          </p>
          <p className="myName">
            <span style={{ color: "grey", fontWeight: "bold" }}>
              Software Engineer
            </span>
          </p>
          <div className="botton-logo">
            <div>
              <img src={Rectangle} alt="Logo2" className="box" />
              <img src={SocialLogo} alt="Logo1" className="socia-logo" />
            </div>
            <div>
              <img src={Rectangle} alt="Logo2" className="git-box" />
              <img src={GitLogo} alt="Logo2" className="git-logo" />
            </div>
            <div>
              <img src={Rectangle} alt="Logo2" className="linkin-box" />
              <img src={Linkin} alt="Logo3" className="linkin-logo" />
            </div>
          </div>
        </div>

        <div className="nav_bar">
          <Header />
          <div className="pics">
            <img src={MyPics} style={{ width: "50%", marginLeft: "9rem" }} />
          </div>
        </div>
      </div>

      <div className="bottom-text">
        <p>
          <span style={{ textAlign: "center", fontSize: "20px" }}>
            Dedication →{" "}
          </span>
          Passion for coding, constant learning, and improving skills✅✅
        </p>
        <p
          style={{ textAlign: "center", fontSize: "10px", fontWeight: "10px" }}
        >
          <span style={{ textAlign: "center", fontSize: "20px" }}>
            Deciplin →{" "}
          </span>
          Consistency, time management, clean coding, and work-life balance.
        </p>
        <p
          style={{ textAlign: "center", fontSize: "10px", fontWeight: "10px" }}
        >
          🚀 The best engineers are not just talented but also disciplined and
          persistent! Keep building, keep learning, and stay consistent. Let me
          know if you need career guidance!
        </p>
      </div>
    </div>
  );
}
