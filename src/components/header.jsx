import React, { Component } from "react";
import "../styles/header.css";
import { FaBars } from "react-icons/fa";

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
    const icon = document.querySelector("#nav-icon");

    activeBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        let current = document.querySelectorAll(".activeNav", "");
        if (current[0]) {
          current[0].className = current[0].className.replace(" activeNav", "");
          this.className += " activeNav";
        } else {
          this.className += " activeNav";
        }

        openDropNav();
      });
    });

    const openDropNav = () => {
      if(nav.className === "topnav"){
        nav.className += " responsive";
      } else {
        nav.className = "topnav";
      }
    };

    document.querySelector(".mobileButton").addEventListener("click", () => {
      openDropNav();
    })

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
              <a href="#contact" className="btns">Contact</a>
              <button className="mobileButton"><FaBars id="nav-icon"></FaBars></button>
            </div>
          </div>
        </nav>

      </React.Fragment>
    );
  }
}

export default Header;
