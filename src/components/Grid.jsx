import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/grid.css";

class Grid extends Component {
  static propTypes = {
    classStyle: PropTypes.string.isRequired,
  };

  render() {
    const {
      props: { classStyle },
    } = this;
    return <div className={classStyle}>{this.props.children}</div>;
  }
}

export default Grid;
