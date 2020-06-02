import React, { Component } from "react";
import "../styles/button.css";

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="noTouch">
          <div id="section-header">
            <div className="Button_Wrapper">
              <div className="yesTouch">
                <a
                  className="ButtonAnimation ButtonAnimation_Item"
                  href="#about"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Button;
