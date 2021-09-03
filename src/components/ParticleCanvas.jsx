import React, { Component } from "react";
import Particles from "react-particles-js";
import "../styles/canvas.css";

class ParticleCanvas extends Component {
  render() {
    return (
      <React.Fragment>
        <Particles
          // className="particles"
          width="98vw"
          height="100vh"
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: false,
                  value_area: 1000,
                },
              },
              color: {
                value: [
                  "#ff4141",
                  "#D90E27",
                  "#ff5a5a",
                  "B80606",
                  "F31010",
                  "FF8F8F",
                ],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 1,
                  shape: "triangle",
                },
              },
              opacity: {
                value: 0.9,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 100,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 200,
                color: {
                  value: [
                    "#ff4141",
                    "#D90E27",
                    "#ff5a5a",
                    "B80606",
                    "F31010",
                    "FF8F8F",
                  ],
                },
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 300,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 800,
                  size: 80,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </React.Fragment>
    );
  }
}

export default ParticleCanvas;
