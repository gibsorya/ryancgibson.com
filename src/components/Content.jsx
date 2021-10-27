import React, { Component } from "react";
import Header from "./header";
import "../styles/content.css";
import Grid from "./Grid";

class Content extends Component {
  render() {
    return (
      <div className="content_wrapper">
        <Header></Header>
        <section id="about" className="container">
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
                <p style={{ marginBottom: "0" }}>
                  My second degree would be in gaming.
                </p>
                <p style={{ marginTop: "0" }}>
                  I grew up playing games, and I've also dabbled in making my own games over the past few years!
                  One of my favorite pastimes is dreaming up game ideas.
                </p>
              </div>
            </div>
          </Grid>
        </section>
        <section id="skills" className="container">
          <h2 className="headings">Skills</h2>
          {/* <Grid classStyle="skillSection">
            <div className="skillFlex">
            <i className="devicon-csharp-line skill"></i>
            </div>
            <div className="skillFlex">
            <i className="devicon-csharp-line skill"></i>
            </div>
            <div className="skillFlex">
            <i className="devicon-csharp-line skill"></i>
            </div>
            <div className="skillFlex">
            <i className="devicon-csharp-line skill"></i>
            </div>
          </Grid> */}
          <div className="flex-container">
            <div className="skillFlex">
              <img className="skillImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
              <h3 className="skillName">C#</h3>
            </div>
            <div className="skillFlex">
              <img className="skillImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
              <h3 className="skillName">C++</h3>
            </div>
            <div className="skillFlex">
              <img className="skillImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              <h3 className="skillName">Java</h3>
            </div>
            <div className="skillFlex">
              <img className="skillImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
              <h3 className="skillName">JavaScript</h3>
            </div>
            <div className="skillFlex">
              <img className="skillImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <h3 className="skillName">React</h3>
            </div>
            <div className="skillFlex">
              <i className="devicon-unity-original skill"></i>
              <h3 className="skillName">Unity</h3>
            </div>
            <div className="skillFlex">
              <img className="skillImg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
              <h3 className="skillName">Git</h3>
            </div>
            <div className="skillFlex">
              <i className="devicon-github-original skill"></i>
              <h3 className="skillName">Github</h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
