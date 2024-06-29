import React, { useState } from "react";
import "./Card.css";
import pfpImage from "../../assets/pfp_demo.png";
import RectangleSvg from "../Svgs/RectangleSvg";
import MicrosoftSvg from "../Svgs/MicrosoftSvg";
import MetaSvg from "../Svgs/MetaSvg";
import ArrowRight from "../Svgs/ArrowRight";
import MicrosoftSvgHovered from "../Svgs/MicrosoftSvgHovered";
import MetaSvgHovered from "../Svgs/MetaSvgHovered";
import ArrowUp from "../Svgs/ArrowUp";
function Card(props) {
  const {
    id,
    name,
    designation,
    department,
    batch,
    pfpImageUrl,
    icon,
    randomColor,
  } = props;
  const [hoverIcon1, setHoverIcon1] = useState(false);
  const [hoverIcon2, setHoverIcon2] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const [portHovered, setPortHovered] = useState(false);
  return (
    <>
      <div
        className="card"
        style={{
          padding: "0.25rem",
        }}
      >
        <div
          className="card_container"
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
          style={{
            border: cardHovered
              ? `0.25rem solid ${randomColor.border}`
              : "0.125rem solid #f1f1f1",
            margin: cardHovered ? 0 : "0.125rem",
            transition: 'border 0.01s ease-in-out, margin 0.01s ease-in-out '
 

          }}
        >
          <div className="pfp_image_cont">
            <img className="pfp_image" src={pfpImage}></img>
          </div>
          <div className="empty_container"></div>
          <div className="content_container">
            <div className="content_left" >
              <div className="name_container">
                <div className="name_text">{name}</div>
                <div className="designation_text">{designation}</div>
              </div>
              <div className="icon_container">
                <div
                  onMouseEnter={() => setHoverIcon1(true)}
                  onMouseLeave={() => setHoverIcon1(false)}
                >
                  {hoverIcon1 ? <MicrosoftSvgHovered /> : <MicrosoftSvg />}
                </div>
                <div
                  onMouseEnter={() => setHoverIcon2(true)}
                  onMouseLeave={() => setHoverIcon2(false)}
                >
                  {hoverIcon2 ? <MetaSvgHovered /> : <MetaSvg />}
                </div>
              </div>
              <div
                className="portfolio_container"
                onMouseEnter={() => setPortHovered(true)}
                onMouseLeave={() => setPortHovered(false)}
                style={{
                  background: randomColor.bg,
                  boxShadow: `0 ${portHovered ? "3px" : "2px"} 0 0 ${
                    randomColor.shadow
                  }`,
                  border: portHovered && `1px solid ${randomColor.borderPort}`,
                  borderRadius: "0.375rem",
                }}
              >
                <ArrowRight portHovered={portHovered} />
                <div className="portfolio_text">Visit Portfolio</div>
              </div>
            </div>
            <div className="content_right">
              <div className="content_right_top">
                <div className="content_right_text1">{department}</div>
                <div className="content_right_text2">‘{batch}</div>
              </div>
              <div className="content_right_bot">
                {/* Logo here  */}
                {/* <div className="fevicon">
                <div className="fevicon_rectangle"></div>
                <div className="outer_group">
                  <div className="inner_group">
                    <div className="text_logo">s</div>
                    <RectangleSvg />
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
