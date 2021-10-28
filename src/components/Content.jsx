import React, { Component } from "react";
import Header from "./header";
import VulkanLogo from "../vulkan_white.svg"
import "../styles/content.css";
import Grid from "./Grid";
import { Button } from "semantic-ui-react";

class Content extends Component {
  componentDidMount() {
    const cards = document.querySelectorAll(".projectCard");

    let flippedCard = function () {
      cards.forEach(function (card) {
        card.addEventListener("click", function () {
          if (card.classList.contains("flippedCard")) {
            card.classList.remove("flippedCard");
          } else {
            card.classList.add("flippedCard");
          }
        });
      });
    }

    window.onload = flippedCard();
  }

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
            <div className="skillFlex">
              <img className="vulkanImg" src={VulkanLogo} />
            </div>
          </div>
        </section>
        <section id="projects" className="container">
          <h2 className="headings">Projects</h2>
          <div className="projectsWrapper">
            <div className="items">
              <div className="item">
                <div className="projectContainer">
                  <div className="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/pictures/SamfordRun.jpg"})` }}>
                    <div className="inner">
                      {/* <p>Test</p> */}
                      <span>SAMFORD RUN</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>Samford Run was a game I made along with 3 other people in a group project while at university, created in Unity.
                        It was a free roam, Subway Surfer meets Crossy Road kind of game, where your objective was to get class on time, avoiding obstacles along the way. You must run, otherwise you'll be late!
                      </p>
                      <div className="gitContainer">
                        <a href="https://github.com/gibsorya/Samford-Run" target="_blank" rel="noopener noreferrer" className="gitButton">GIT REPO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="projectContainer">
                  <div className="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/pictures/SpatialHearing.jpg"})` }}>
                    <div className="inner">
                      {/* <p>Test</p> */}
                      <span>SPATIAL HEARING VR</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>
                        This was a VR project built in Unity. 
                        Me and a few other students worked with a professor in another to department to create a VR app for them. 
                        They acted as our customomer, and we met with him regularly so that we could meet his expectations.
                      </p>
                      <div className="gitContainer">
                        <a href="https://github.com/gibsorya/spatialhearingVR" target="_blank" rel="noopener noreferrer" className="gitButton">GIT REPO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="projectContainer">
                  <div className="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/pictures/SpatialHearing.jpg"})` }}>
                    <div className="inner">
                      {/* <p>Test</p> */}
                      <span>SPATIAL HEARING VR</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>
                        This was a VR project built in Unity. 
                        Me and a few other students worked with a professor in another to department to create a VR app for them. 
                        They acted as our customomer, and we met with him regularly so that we could meet his expectations.
                      </p>
                      <div className="gitContainer">
                        <a href="https://github.com/gibsorya/spatialhearingVR" target="_blank" rel="noopener noreferrer" className="gitButton">GIT REPO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="projectContainer">
                  <div className="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/pictures/SpatialHearing.jpg"})` }}>
                    <div className="inner">
                      {/* <p>Test</p> */}
                      <span>SPATIAL HEARING VR</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <p>
                        This was a VR project built in Unity. 
                        Me and a few other students worked with a professor in another to department to create a VR app for them. 
                        They acted as our customomer, and we met with him regularly so that we could meet his expectations.
                      </p>
                      <div className="gitContainer">
                        <a href="https://github.com/gibsorya/spatialhearingVR" target="_blank" rel="noopener noreferrer" className="gitButton">GIT REPO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Grid classStyle="projects">
            <div className="projectCard">
              <div className="projectCardFaces cardFront">
                <div className="projectItem">
                  <img className="projectImage" src={process.env.PUBLIC_URL + "/pictures/SamfordRun.jpg"} />
                  
                </div>
              </div>
              <div className="projectCardFaces cardBack">
              <p className="projectDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eaque quae harum odit delectus sequi, autem nesciunt ullam reiciendis molestias et, tempore provident eius odio molestiae nemo incidunt omnis excepturi.</p>
              </div>
            </div>
          </Grid> */}
        </section>
      </div>
    );
  }
}

export default Content;
