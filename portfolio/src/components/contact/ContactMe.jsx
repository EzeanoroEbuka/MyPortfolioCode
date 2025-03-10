import React from "react";
import "./contact.css";

function ContactMe() {
  const GitHub = "https://github.com/EzeanoroEbuka";

  const LinkedIn = "https://www.linkedin.com/in/chukwuebuka-ezeanoro-363651302/";

  return (
    <div id="contact">
      <p className="Header">CONTACT</p>

      <div className="contact-body">
        <h2>Get in touch</h2>
        <p>
          <h3>Message Me on WhatsApp</h3>
          <h4>+2349032489848</h4>
        </p>

        <p>
          <h3>Email Me </h3>
          <h4>ebestkeyz@gmail.com</h4>
        </p>

        <p>
          <h3>Connect with me on LinkedIn</h3>
          <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
            <h4>LinkedIn</h4>
          </a>
        </p>

        <p>
          <h3>Explore my codes on Github</h3>
          <a href={GitHub} target="_blank" rel="noopener noreferrer">
            <h4>GitHub</h4>
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactMe;
