// https://www.youtube.com/watch?v=0wvrlOyGlq0

import React from "react";
import VitaminAdd from "../assets/addvertisement-banner.png";
import Add2 from "../assets/add2.png"
import Add3 from "../assets/add3.png"

import "./AddBanner.css";
function AddBanner() {
  var counter = 1;

  return (
    <div className="add-banner">
      <div className="banners">
        <input type="radio" name="radio-btn" id="addv1"></input>
        <input type="radio" name="radio-btn" id="addv2"></input>
        <input type="radio" name="radio-btn" id="addv3"></input>

        {/** advertisment images */}
        <div className="main slide">
          <img src={VitaminAdd} alt="Advertisement-1" />
        </div>
        <div className="slide">
          <img src={Add2} alt="Advertisement-2" />
        </div>
        <div className="slide">
          <img src={Add3} alt="Advertisement-3" />
        </div>

        {/* automatic navigation  */}
        <div className="navigation">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
        </div>
        
      </div>
      {/* mannial navigation */}
      <div className="navigation auto">
          <label for="addv1" className="manual-btn"></label>
          <label for="addv2" className="manual-btn"></label>
          <label for="addv3" className="manual-btn"></label>
        </div>

        {/* {
            setInterval(function(){
                const addv = document.getElementById('addv' + counter)
                if(addv){
                    addv.checked=true;
                }
                counter++;
                if(counter>3){
                    counter=1;
                }
            },5000)
        } */}
    </div>
  );
}

export default AddBanner;
