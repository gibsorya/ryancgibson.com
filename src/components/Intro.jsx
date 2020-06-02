import React, { Component } from "react";
import "../styles/canvas.css";
import Button from "./Button";

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="panel">
          <div className="mainText">
            <h1 className="mainIntro">Ryan Gibson</h1>
            <h3 className="subIntro">Full-Stack Software Developer</h3>
          </div>
          <div className="mobileText">
            <h1 className="mainIntroMobile">Ryan Gibson</h1>
            <h3 className="subIntroMobile">Software Developer</h3>
          </div>
          <Button></Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;
