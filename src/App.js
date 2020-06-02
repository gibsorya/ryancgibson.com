import React from "react";
import logo from "./background.jpg";
import Header from "./components/header";
import Content from "./components/Content";
import "../src/App.css";
// import "./main.css";
// import { CanvasSpace, Pt, Group } from "react-pts-canvas";
import ParticleCanvas from "./components/ParticleCanvas";
import Intro from "./components/Intro";

const headerNames = ["Home", "About", "Skills", "Projects", "Contact"];

function App() {
  return (
    <div className="flex">
      <section id="home" className="canvas">
        <ParticleCanvas></ParticleCanvas>
        <Intro />
      </section>
      <Content></Content>
      <footer className="footer">
        Website in active development by Ryan Gibson
      </footer>
    </div>
  );
}

export default App;
