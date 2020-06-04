import React, { Component } from "react";
import "../styles/content.css";
import Grid from "./Grid";
import Tabs from "./Tabs";
import ProjectItem from "./ProjectItem";

class Content extends Component {
  render() {
    return (
      <div id="about" className="content_wrapper">
        <Tabs>
          <div label="About Me"></div>
          <div label="Skills">Skills? What skills?</div>
          <div label="Projects">
            <Grid>
              <ProjectItem></ProjectItem>
              <ProjectItem></ProjectItem>
              <ProjectItem></ProjectItem>
              <ProjectItem></ProjectItem>
            </Grid>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Content;
