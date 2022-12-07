import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";
import Categories from "./Categories";
import Coke from "../assets/coke.png";
export default function Release() {
  const [data, setData] = useState(Categories);

  const filterResult = (catItem) => {
    const result = Categories.filter((item) => {
      return item.category === catItem;
    });
    setData(result);
  };
  return (
    <div className="releases">
      <div className="release orange">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title">Our Products</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn" onClick={() => setData(Categories)}>
                ALL
              </button>
              <button className="btn" onClick={() => filterResult("Drinks")}>
                Drinks
              </button>
              <button
                className="btn"
                onClick={() => filterResult("Confectionary")}
              >
                Confectionary
              </button>
              <button
                className="btn"
                onClick={() => filterResult("Toiletries")}
              >
                Toiletries
              </button>
              <button className="btn" onClick={() => filterResult("Household")}>
                Household
              </button>
            </div>
            <div className="col">
              <div className="cards">
                {data.map((values) => {
                  const { id, category, title, image } = values;
                  return (
                    <div className="product-card" key={id}>
                      <div className="card-header">
                        <img src={image} alt={title} />
                      </div>
                      <div className="card-body">
                        <h2 className="titleProduct">{title}</h2>
                        {/* <h2>Category: {category}</h2> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
