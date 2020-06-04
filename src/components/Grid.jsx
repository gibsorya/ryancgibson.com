import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/grid.css";

class Grid extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  render() {
    return <div className="wrapper">{this.props.children}</div>;
  }
}

export default Grid;
