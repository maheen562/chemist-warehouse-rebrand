import React from "react";
import "./Products.css";
import prod1 from "../assets/2DF_200.jpg";

const vitaminProducts = {
  productImage: prod1,
  name: "Swisse Ultiboost Calcium+Vitamin D 150 Tablets",
  price : "17.09",
  discounted : true,
  priceDiscounted: "17.00" ,
  promotionSticker : false,
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
                <img src={vitaminProducts.productImage} alt="prod1" />
                <h4>{vitaminProducts.name}</h4>
                <span className="product-price">{vitaminProducts.price}</span>
                {
                
                }
                <div className="promotion">
                  <p>$<span>{vitaminProducts.priceDiscounted}</span> Off RRP!</p>
                </div>
                <div className="product-description">
                  <ul>
                    {vitaminProducts.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button className="buy-now-btn">Buy now </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Products;
