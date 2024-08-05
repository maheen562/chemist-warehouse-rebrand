import React from "react";
import "./header.css";
import logo from "../assets/logo.png";
import stores_sign from "../assets/stores-sign.png";
import login_sign from "../assets/login-sign.png"
import cart from "../assets/shopping-cart-sign.png"

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
              <li><img src={stores_sign} alt="store-sign"/><br/>Stores</li>
              <li><img src={login_sign} alt="log-in"/><br/>Log in</li>
              <li><img src={cart} alt="cart"/><br/>Cart</li>
            </ul>
          </div>

          <div className="search-bar">
            <input placeholder="Search big brands, deals, Cosmetics..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
