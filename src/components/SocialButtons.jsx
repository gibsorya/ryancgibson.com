import React, { Component } from "react";
import "../styles/socials.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

class SocialButtons extends Component {
  changeToHoverColor(e) {
    e.target.style.background = "#ff4141";
  }
  revertToDefaultColor(e) {
    e.target.style.background = "transparent";
  }
  render() {
    return (
      <div className="social-wrapper">
        <div className="links">
          <a href="https://www.linkedin.com/in/rgibson5/">
            <div className="icon">
              <FaLinkedin />
            </div>
          </a>
          <a className href="https://github.com/gibsorya">
            <div className="icon">
              <FaGithub></FaGithub>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default SocialButtons;
