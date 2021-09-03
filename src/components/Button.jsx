import React, { Component, ReactDOM } from "react";
import "../styles/button.css";

class Button extends Component {
  scrollTo(element, to, duration) {
    document.addEventListener('DOMContentLoaded', function(){

    
    
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;

      if (element.scrollTop === to) {
        return;
      }

      this.scrollTo(element, to, duration - 10);
    }, 10);})
  };

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
