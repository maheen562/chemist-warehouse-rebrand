//https://www.youtube.com/watch?v=6YnryDjEGr8

import React from "react";
import "./Products.css";
import prod1 from "../assets/2DF_200.jpg";
import prod2 from "../assets/3DF_200.jpg";
import prod3 from "../assets/2DF_200 (1).jpg";
import prod4 from "../assets/2DF_200 (2).jpg";
import Sticker from "../assets/50.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};

function Products() {
  return (
    <div>
      <div className="product-container">
        <div className="heading">
          <h2>
            Buy our <span>PREMIUM Vitamins </span>Range
          </h2>
        </div>
        <div className="products">
          {/* <ul> */}
            <Slider {...settings}>
            {vitaminProducts.map((product, pindex) => (
              // <li id={pindex}>
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
              // </li>
            ))}
            </Slider>
          {/* </ul> */}
        </div>
        <div className="heading">
          <h2>
            Buy our <span>PREMIUM Medicine </span>Range
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Products;
