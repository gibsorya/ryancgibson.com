import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      active: false,
    };
  }

  componentDidMount() {
    const activeBtn = document.querySelectorAll(".btns");
    const nav = document.querySelector("#myNav");

    activeBtn.forEach(function(btn) {
      btn.addEventListener("click", function () {
        let current = document.querySelectorAll(".activeNav", "");
        if(current[0]){
          current[0].className = current[0].className.replace(" activeNav", "");
          this.className += " activeNav";
        } else {
          this.className += " activeNav";
        }
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        {/* <nav className={this.state.scrolled ? "flex scrolled" : "flex"}>
          <div className="link-wrap">
            <div className="page-link" href="#home">
              Home
            </div>
            <div className="page-link">About</div>
            <div className="page-link">Projects</div>
            <div className="page-link">Contact</div>
          </div>
        </nav> */}
        <nav className="scrollSticky">
          <div id="activeButton">
            <div className="topnav" id="myNav">
              <a href="#home" className="btns">Home</a>
              <a href="#about" className="btns">About</a>
              <a href="#skills" className="btns">Skills</a>
              <a href="#projects" className="btns">Projects</a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
