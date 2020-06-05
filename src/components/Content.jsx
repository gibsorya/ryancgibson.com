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
            UPDATE: June 4th, 2020
            <p
              style={{ textAlign: "left", fontSize: "1.1em", display: "flex" }}
            >
              Hello! Thank you for checking out my site. This website is under
              constant development and isn't finished. Updates are made
              everyday. There will most likely be a video placed in this about
              me section, which I will do last. Meanwhile, I'll post updates in
              here!
            </p>
            <h2 style={{ marginBottom: 0 }}>Changelog 6/4/2020</h2>
            <ul
              style={{ margin: "0 auto", display: "table", textAlign: "left" }}
            >
              <li>Added skills and their respective logos</li>
              <li>Updated Grid component to be more responsive</li>
              <li>Fixed fonts not working correctly on most devices</li>
            </ul>
          </div>
          <div label="Skills">
            <div className="headers" style={{ marginTop: `0px` }}>
              Tools/Languages
            </div>
            <Grid>
              <SkillItem name="Java" image={"/logos/java.png"} />
              <SkillItem name="C#" image={"/logos/c.png"} />
              <SkillItem name="Python" image={"/logos/python.png"} />
              <SkillItem name="JavaScript" image={"/logos/js.png"} />
              <SkillItem name="React" image={"/logos/react.png"} />
              <SkillItem name="Unity" image={"/logos/unity.png"} />
            </Grid>
          </div>
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
