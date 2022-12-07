import React, { Component } from "react";
import CokeModal from "./CokeModal";
import { BsArrowRight } from "react-icons/bs";
import Card from "./Card";
import super1 from "../assets/coke.png";
import super2 from "../assets/redbull.png";
import super3 from "../assets/mirinda-can.png";
import super4 from "../assets/fairy-liquid-twotypes.png";
import super5 from "../assets/ariel-powder.png";
import super6 from "../assets/festivity.png";
import super7 from "../assets/valuepack.png";
import super8 from "../assets/centrefeed-blue.png";
export default class SuperRare extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="super-rare">
        <div className="title-container">
          <h2 className="title">Popular Products</h2>
          <p className="description">
            Wondering where to start? Check out our popular products below!
          </p>
          <p className="description">
            Use the scrollbar or swipe through on your phone
          </p>
          <p className="view-all-products">
            <a href="#" className="link">
              View All Products <BsArrowRight />
            </a>
          </p>
        </div>
        <div className="cards">
          {/* {data.map(({ image, series, title, price, tag, time }, index) => ( */}
          <button className="modal-button" onClick={this.toggleModal}>
            <Card image={super1} series="Drinks" title="Coca Cola" />
          </button>
          <CokeModal
            show={this.state.isOpen}
            onClose={this.toggleModal}
          ></CokeModal>
          <Card image={super2} series="Drinks" title="Redbull" />
          <Card image={super3} series="Drinks" title="Mirinda Orange" />
          <Card image={super4} series="Household" title="Fairy Liquid" />
          <Card image={super5} series="Household" title="Ariel Powder" />
          <Card image={super6} series="Toiletries" title="Festivity" />
          <Card image={super7} series="Toiletries" title="Value Pack" />
          <Card image={super8} series="Toiletries" title="Centrefeed (Blue)" />
          {/* ))} */}
        </div>
      </div>
    );
  }
}
