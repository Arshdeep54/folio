import React, { Children } from "react";
import { motion } from "framer-motion";

function CardAnimation({ children, horizontal, containerSize }) {
  const divisor = window.matchMedia("(min-width: 320px) and (max-width: 431px)")
    .matches
    ? 100 * 9
    : window.matchMedia("(max-width:768px)").matches
    ? 31
    : 31;
  const collection = window.matchMedia(
    "(min-width: 320px) and (max-width: 431px)"
  ).matches
    ? "95%"
    : "31%";
  const noAnimation = window.matchMedia(
    "(min-width: 320px) and (max-width: 431px)"
  ).matches;
  if (!noAnimation || !horizontal) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true, amount: horizontal ? 0.1 : 0.5 }}
        transition={{ delay: 0.2, ease: "easeIn" }}
        className="card"
        style={{
          padding: containerSize == 9 ? "0.3rem" : 0,
          width: horizontal ? `${divisor / containerSize}%` : collection,
        }}
      >
        {children}
      </motion.div>
    );
  } else {
    return(
        <div
        className="card"
        style={{
          padding: containerSize == 9 ? "0.3rem" : 0,
          width: horizontal ? `${divisor / containerSize}%` : collection,
        }}
      >
        {children}
      </div>
    )
   
  }
}

export default CardAnimation;
