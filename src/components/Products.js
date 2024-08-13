import React from "react";
import "./Products.css";
import prod1 from "../assets/2DF_200.jpg";
import prod2 from "../assets/3DF_200.jpg";
import prod3 from "../assets/2DF_200 (1).jpg";
import prod4 from "../assets/2DF_200 (2).jpg";
import Sticker from "../assets/50.png";

const vitaminProducts = [
  {
    productImage: prod1,
    name: "Swisse Ultiboost Calcium+Vitamin D 150 Tablets",
    price: "17.09",
    discounted: true,
    priceDiscounted: "17.00",
    promotionSticker: false,
    description: [
      "Contains Calcium Carbonate, Vitamin D3",
      "Increased Bone and joint health",
      "Reduces the risk of muscle cramps and spasms",
      "150 days supply",
    ],
  },
  {
    productImage: prod2,
    name: "Elevit Pre-conception & Pregnancy Multivitamin 100 Tablets (100 Days)",
    price: "59.00",
    discounted: false,
    priceDiscounted: "",
    promotionSticker: false,
    description: [
      "Contains  Vitamin  B12,  Iron ,  Omega 3-DHA",
      "100 Days Supply",
      "Provides Key nutrients for a mothers health",
    ],
  },
  ,
  {
    productImage: prod3,
    name: "Blackmores Probiotics+ Immune Defence Gut Health Vitamin 30 Capsules",
    price: "16.49",
    discounted: true,
    priceDiscounted: "16.50",
    promotionSticker: true,
    description: [
      "Contains Vitamin C , Vitamin D, Zinc",
      "Strengthens the immune system to fight off infections",
      "Supports overall digestive function and comfort",
      "30 days supply",
    ],
  },
  {
    productImage: prod4,
    name: "Blackmores Bio C 1000 180 Tablets Exclusive Size",
    price: "21.99",
    discounted: true,
    priceDiscounted: "15.00",
    promotionSticker: false,
    description: [
      "Contains Vitamin C , and Vitamin C rich ingredients",
      "Boosts the body's natural defense mechanisms",
      "Promotes collagen formation for healthy skin",
      "4 months supply",
    ],
  },
];

function Products() {
  return (
    <div>
      <div className="heading">
        <h2>
          Buy our <span>PREMIUM Vitamins </span>Range
        </h2>
      </div>
      <div className="product-container">
        <div className="products">
          <div className="slide-wrapper">
            <ul>
              {vitaminProducts.map((product, pindex) => (
                <li id={pindex}>
                  <div className="product-padding">
                    <div className="product" id="prod1">
                      <img src={product.productImage} alt="prod1" />
                      <h4>{product.name}</h4>
                      <span className="product-price">${product.price}</span>
                      {product.discounted && (
                        <div className="promotion">
                          <p>
                            $<span>{product.priceDiscounted}</span> Off RRP!
                          </p>
                        </div>
                      )}

                      <div className="product-description">
                        <ul>
                          {product.description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <button className="buy-now-btn">Buy now </button>
                    </div>
                    {product.promotionSticker && (
                      <img className="sticker-50" src={Sticker} />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
