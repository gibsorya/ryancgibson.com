import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/skills.css";

class SkillItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isInverted: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    isInverted: false,
  };
  render() {
    const {
      props: { name, image, isInverted },
    } = this;
    if (isInverted) {
      return (
        <React.Fragment>
          <div className="skill">
            <img
              src={process.env.PUBLIC_URL + image}
              alt=""
              style={{ filter: "invert(1)" }}
            />
            <div className="overlay">
              <div className="skillName">{name}</div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="skill">
            <img src={process.env.PUBLIC_URL + image} alt="" />
            <div className="overlay">
              <div className="skillName">{name}</div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default SkillItem;
