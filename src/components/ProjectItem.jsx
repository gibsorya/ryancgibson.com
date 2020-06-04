import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/projects.css";

class ProjectItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired, //Name of the Project
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  render() {
    return (
      <React.Fragment>
        <div className="item">1</div>
      </React.Fragment>
    );
  }
}

export default ProjectItem;
