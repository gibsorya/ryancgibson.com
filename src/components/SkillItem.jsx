import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/skills.css";

class SkillItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired, //Name of the Project
    image: PropTypes.string.isRequired,
  };
  render() {
    const {
      props: { name, image },
    } = this;
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

export default SkillItem;
