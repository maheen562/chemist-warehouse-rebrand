import React from "react";
import "./header.css";
import logo from "../assets/logo.png";
import stores_sign from "../assets/stores-sign.png";
import login_sign from "../assets/login-sign.png";
import cart from "../assets/shopping-cart-sign.png";
import tracker from "../assets/tracker.png";
import delivery from "../assets/truck logo.png";
import collect from "../assets/click and collect LGO.png";

function Header() {
  return (
    <>
      <div className="pop-up">
        <p>
          Got questions about your medications? live chat with and expert{" "}
          <a href=""> here</a>!
        </p>
      </div>
      <div className="header">
        <div className="header_left">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="header_right">
          <div className="top-left-links">
            <ul>
              <li>
                <img src={stores_sign} alt="store-sign" />
                <br />
                Stores
              </li>
              <li>
                <img src={login_sign} alt="log-in" />
                <br />
                Log in
              </li>
              <li>
                <img src={cart} alt="cart" />
                <br />
                Cart
              </li>
            </ul>
          </div>

          <div className="search-bar">
            <input placeholder="Search big brands, deals, Cosmetics..." />
          </div>
        </div>
      </div>
      <div className="catagories">
        <ul>
          <li>Prescriptions</li>
          <li>Fragrences</li>
          <li>Vitamins</li>
          <li>MakeUp</li>
          <li>Skincare</li>
          <li>Beauty</li>
          <li>Cosmetics</li>
          <li className="highlighted-catagory">
            <a href="">CLEARANCE</a>
          </li>
        </ul>
      </div>
      <div className="below-header">
        <ul>
          <li>
            <img src={delivery} alt="delivery truck" />
            <div>
              <p>
                <a href="">GUARENTEED </a>{" "}
                <span className="bold">3 hour fast delivery</span>
                <br />
                <span className="tiny-font">
                  Order by 3pm for same day delivery
                </span>
              </p>
            </div>
          </li>
          <li>
            <img src={collect} alt="click & collect logo" />
            <div>
              <p>
                <a href="">FREE </a>{" "}
                <span className="bold">Click & Collect</span>
                <br />
                <span className="tiny-font">
                  Ready to collect within 4 hours
                </span>
              </p>
            </div>
          </li>
          <li><img src={delivery} alt="delivery" />
            <div>
              <p>
                <a href="">RELIABLE </a>{" "}
                <span className="bold">Order Tracking</span>
                <br />
                <span className="tiny-font">
                  Instantly locate your parcel online
                </span>
              </p>
            </div></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
