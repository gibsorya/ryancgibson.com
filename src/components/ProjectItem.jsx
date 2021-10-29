import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/projects.css";
import ReactModal from "react-modal";

class ProjectItem extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, //Name of the Project
  //   description: PropTypes.string.isRequired,
  //   image: PropTypes.string.isRequired,
  // };
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    // const {
    //   props: { name, image },
    // } = this;
    return (
      <React.Fragment>
        {/* <div className="item">
          <img src={process.env.PUBLIC_URL + image}className="button"  onClick={this.handleOpenModal} />
          <ReactModal isOpen={this.state.showModal} onRequestClose={this.handleCloseModal} className="modal"></ReactModal>
        </div> */}
      </React.Fragment>
    );
  }
}

export default ProjectItem;
