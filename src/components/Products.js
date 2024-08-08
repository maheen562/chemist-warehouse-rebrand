import React from "react";
import "./Products.css";
import prod1 from "../assets/2DF_200.jpg";
import prod2 from "../assets/3DF_200.jpg"
import Sticker from "../assets/50.png"
const vitaminProducts = [
  {
    productImage: prod1,
    name: "Swisse Ultiboost Calcium+Vitamin D 150 Tablets",
    price: "17.09",
    discounted: true,
    priceDiscounted: "17.00",
    promotionSticker: true,
    description: [
      "Contains Calcium Carbonate, Vitamin D3",
      "Increased Bone and joint health",
      "Reduces the risk of muscle cramps and spasms",
      "150 days supply",
    ],
  },{
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
];

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
                  <img className="sticker-50" src={Sticker}/>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
