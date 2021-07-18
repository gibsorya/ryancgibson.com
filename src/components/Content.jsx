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
            <Grid classStyle="skillsWrapper">
              <div className="skillType">
                <div className="headers">Languages</div>
                <div className="skillDescription">
                  Languages I have used in my projects, which includes: Java,
                  JavaScript, C#, and Python
                </div>
              </div>
              <div className="skillList">
                <Grid classStyle="skills">
                  <SkillItem name="Java" image={"/logos/java.png"} />
                  <SkillItem name="C#" image={"/logos/c.png"} />
                  <SkillItem name="Python" image={"/logos/python.png"} />
                  <SkillItem name="JavaScript" image={"/logos/js.png"} />
                </Grid>
              </div>
              <div className="skillType">
                <div className="headers">Tools</div>
                <div className="skillDescription">
                  Familiar with tools such as Unity for game development, Git
                  and Github for source control, and React for web design.
                </div>
              </div>
              <div className="skillList">
                <Grid classStyle="skills">
                  <SkillItem name="React" image={"/logos/react.png"} />
                  <SkillItem name="Unity" image={"/logos/unity.png"} />
                  <SkillItem name="Git" image={"/logos/git.png"} />
                  <SkillItem
                    name="GitHub"
                    image={"/logos/Github.png"}
                    isInverted={true}
                  />
                </Grid>
              </div>
            </Grid>
          </div>
          <div label="Projects">
            <Grid classStyle="projects">
              <ProjectItem name="Samford Run" image="/pictures/SamfordRun.jpg"></ProjectItem>
              <ProjectItem name="TEST" image="/pictures/ck3.jpg"></ProjectItem>
              <ProjectItem name="TEST 2" image="pictures/TEST.png"></ProjectItem>
              <ProjectItem name="Spatial Hearing VR" image="pictures/SpatialHearing.jpg"></ProjectItem>
            </Grid>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Content;
