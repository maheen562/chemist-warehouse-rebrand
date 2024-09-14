// https://www.youtube.com/watch?v=0wvrlOyGlq0

import React from "react";
import VitaminAdd from "../assets/addvertisement-banner.png";
import Add2 from "../assets/add2.png"
import Add3 from "../assets/add3.png"

import "./AddBanner.css";
import Slider from "react-slick";
function AddBanner() {
  var counter = 1;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,             
    autoplaySpeed: 5000,
  }
  return (
    <>
    <Slider  {...settings}>

    <div className="main slide">
          <img src={VitaminAdd} alt="Advertisement-1" />
        </div>
        <div className="slide">
          <img src={Add2} alt="Advertisement-2" />
        </div>
        <div className="slide">
          <img src={Add3} alt="Advertisement-3" />
        </div>
    </Slider>
    </>
      );
}

export default AddBanner;
