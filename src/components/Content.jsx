import React, { Component } from "react";
import "../styles/content.css";
import Grid from "./Grid";
import Tabs from "./Tabs";
import ProjectItem from "./ProjectItem";
import SkillItem from "./SkillItem";

class Content extends Component {
  render() {
    return (
      <div id="about" className="content_wrapper">
        <Tabs>
          <div label="About Me">
            <p
              style={{ textAlign: "left", fontSize: "1.1em", display: "flex" }}
            >
              Hello! Thank you for checking out my site. This website is under
              constant development and isn't finished. There will most likely be
              a video placed in this about me section, which I will do last.
            </p>
          </div>
          <div label="Skills">
            <div className="headers" style={{ marginTop: `0px` }}>
              Tools/Languages
            </div>
            <Grid classStyle="skills">
              <SkillItem name="Java" image={"/logos/java.png"} />
              <SkillItem name="C#" image={"/logos/c.png"} />
              <SkillItem name="Python" image={"/logos/python.png"} />
              <SkillItem name="JavaScript" image={"/logos/js.png"} />
              <SkillItem name="React" image={"/logos/react.png"} />
              <SkillItem name="Unity" image={"/logos/unity.png"} />
            </Grid>
          </div>
          <div label="Projects">
            <Grid classStyle="wrapper">
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
