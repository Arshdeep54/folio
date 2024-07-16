import React from "react";
import "./Graphic.css";
import GraphicPng from "../../assets/graphic.png";
function Graphic({ mode }) {
  if (mode == "mobile") {
    return (
      <>
        <div className="graphic">
          <div className="image_top"></div>

          <div className="graphic_content_mobile">
            <div className="graphic_text_container">
              <div className="text_one">
                Showcasing the design ecosystem of IIT-R
              </div>
              <div className="text_two">One portfolio at a time</div>
            </div>
            <div className="spotlight_cont">
              <div className="spotlight_text">Get Spotlighted</div>
            </div>
          </div>
        <div className="image_bottom"></div>
        </div>

        <div className="elipse_left"></div>
        <div className="elipse_right"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="graphic">
          <div className="graphic_content">
            <div className="graphic_text_container">
              <div className="text_one">
                Showcasing the design ecosystem of IIT-R
              </div>
              <div className="text_two">One portfolio at a time</div>
            </div>
            <div className="spotlight_cont">
              <div className="spotlight_text">Get Spotlighted</div>
            </div>
          </div>
          {mode == "desktop" && (
            <div className="images_container">
              <div className="image_left"></div>
              <div className="image_right"></div>
            </div>
          )}
        </div>
        <div className="elipse_left"></div>
        <div className="elipse_right"></div>
      </>
    );
  }
}

export default Graphic;
