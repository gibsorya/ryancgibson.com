import React, { Component } from "react";
import "../styles/content.css";
import Grid from "./Grid";
import ProjectItem from "./ProjectItem";

class Content extends Component {
  render() {
    return (
      <div className="content_wrapper">
        <section id="about" className="about-container">
          <h2 className="headings">About</h2>
          <Grid classStyle="aboutSection">
            <div className="cardflex">
              <div className="abouticons">
                <span className="icon-lamp7"></span>
                <h3>Constantly Learning</h3>
                <p>
                  I like to spend my free time learning something new - whether it be related to the tech industry or not.
                  Right now I'm learning the Vulkan API, with a bit of 3D modeling in Blender here and there!
                </p>
              </div>
            </div>
            <div className="cardflex">
              <div className="abouticons">

                <span className="icon-cup2"></span>
                <h3>Coffee Lover</h3>
                <p>
                  If I could work out of a coffee shop everyday, I would! I love grabbing me a mocha whenever I get the chance.
                </p>
              </div>
            </div>
            <div className="cardflex">
              <div className="abouticons">

                <span className="icon-gamepad3"></span>
                <h3>Certified Gamer</h3>
                <p style={{marginBottom: "0"}}>
                  My second degree would be in gaming.
                </p>
                <p style={{marginTop: "0"}}>
                  I grew up playing games, and I've also dabbled in making my own games over the past few years! 
                  One of my favorite pastimes is dreaming up game ideas. 
                </p>
              </div>
            </div>
          </Grid>
        </section>
        {/* <Tabs>
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
        </Tabs> */}
      </div>
    );
  }
}

export default Content;
