import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import DrinksBanner from "../assets/drinks-banner.jpeg";
import release2 from "../assets/release2.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="content">
          {/* <div className="image">
            <img src={icon} alt="icon" />
          </div> */}
          <div>
            <h2 className="title">We Have A Wide Range Of Products</h2>
            <p className="description">Check Out Our Stock!</p>
            <a href="#Products">
              <button>View Our Products</button>
            </a>
          </div>
        </div>
        <div class="cards">
          {/* <img class="view-products-pic" src={DrinksBanner} alt="" /> */}
        </div>
      </div>

      {/* <div className="cards">
        <div className="card1">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
        <div className="card3">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div> */}
    </div>
  );
}
