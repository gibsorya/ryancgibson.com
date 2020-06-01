import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll  ");
  }

  render() {
    return (
      <React.Fragment>
        <nav className={this.state.scrolled ? "flex scrolled" : "flex"}>
          <div className="link-wrap">
            <div className="page-link" href="#home">
              Home
            </div>
            <div className="page-link">About</div>
            <div className="page-link">Projects</div>
            <div className="page-link">Contact</div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
