import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./CokeModal.css";
import { AiOutlineClose } from "react-icons/ai";
import CokeLogo from "../assets/cocacola-logo.png";
import ImageSlider from "./ImageSlider";
class CokeModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        <div className="close">
          <div className="coke-header">
            <h1>Coca Cola Company</h1>
          </div>
          <button className="modal-button" onClick={this.props.onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="coke-content">
          {this.props.children}
          <div className="logo-container">
            <img className="logo" src={CokeLogo} alt="" />
          </div>
          <div className="coke-description">
            <h2>Description </h2>
            <br />
            <p>
              Coca‑Cola Original Taste is the world’s favourite soft drink and
              has been enjoyed since 1886. You can find Coca‑Cola Original Taste
              in a variety of sizes to suit every lifestyle and occasion.
            </p>
          </div>
          <div className="ingredients">
            <h2>Ingredients </h2>
            <br />
            <p>
              Carbonated Water, Sugar, Colour (Caramel E150d), Phosphoric Acid,
              Natural Flavourings Including Caffeine.
              <br />
              <br />
            </p>
          </div>

          {/* second row */}
          <div className="variants">
            <h2>Variants </h2>
            <br />
            <ImageSlider />
          </div>

          <div className="sizes">
            <br />

            <h2>Sizes</h2>
            <br />
            <br />
            <p>pic of sizes</p>
          </div>

          <button className="close-button" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default CokeModal;
