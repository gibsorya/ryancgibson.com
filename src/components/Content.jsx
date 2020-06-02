import React, { Component } from "react";
import "../styles/content.css";
import Grid from "./Grid";
import Tabs from "./Tabs";

class Content extends Component {
  render() {
    return (
      <div id="about" className="content_wrapper">
        <Tabs>
          <div label="About Me"></div>
          <div label="Skills">Skills? What skills?</div>
          <div label="Projects">
            <Grid />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Content;
