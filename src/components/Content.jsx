import React, { Component } from "react";
import "../styles/content.css";
import ProjectGrid from "./ProjectGrid";

class Content extends Component {
  render() {
    return (
      <div className="content_wrapper">
        <ProjectGrid />
      </div>
    );
  }
}

export default Content;
