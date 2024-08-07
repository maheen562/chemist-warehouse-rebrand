import React from "react";
import "./Products.css";
import prod1 from "../assets/2DF_200.jpg";

const vitaminProducts = {
  description: [
    "Contains Calcium Carbonate, Vitamin D3",
    "Increased Bone and joint health",
    "Reduces the risk of muscle cramps and spasms",
    "150 days supply",
  ],
};

function Products() {
  return (
    <div>
      <div className="heading">
        <h2>
          Buy our <span>PREMIUM Vitamins </span>Range
        </h2>
      </div>
      <div className="products">
        <ul>
          <li>
            <div className="product-padding">
              <div className="product" id="prod1">
                <img src={prod1} alt="prod1" />
                <h4>Swisse Ultiboost Calcium+Vitamin D 150 Tablets</h4>
                <span className="product-price">$17.09</span>
                <div className="promotion">
                    <p>$17.00 Off RRP!</p>
                </div>
                <div className="product-description">
                  <ul>
                    {vitaminProducts.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button className="buy-now-btn">
                    <h2>Buy Now</h2>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
