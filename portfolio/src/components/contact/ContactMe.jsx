import React from "react";
import "./Contact.css";

function ContactMe() {
  const GitHub = "https://github.com/EzeanoroEbuka";
  const LinkedIn = "https://www.linkedin.com/in/chukwuebuka-ezeanoro-363651302/";

  return (
    <footer id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>WhatsApp</h3>
          <h4>+234 903 248 9848</h4>
        </div>
        
        <a href="mailto:ebestkeyz@gmail.com" className="contact-card">
          <h3>Email</h3>
          <h4>ebestkeyz@gmail.com</h4>
        </a>

        <a href={LinkedIn} target="_blank" rel="noopener noreferrer" className="contact-card">
          <h3>LinkedIn</h3>
          <h4>Profile</h4>
        </a>

        <a href={GitHub} target="_blank" rel="noopener noreferrer" className="contact-card">
          <h3>GitHub</h3>
          <h4>Repositories</h4>
        </a>
      </div>

      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Ezeanoro Chukwuebuka. Built with React & Vite.</p>
      </div>
    </footer>
  );
}

export default ContactMe;
