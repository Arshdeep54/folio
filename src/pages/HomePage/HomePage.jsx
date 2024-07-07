import React, { useEffect, useRef, useState } from "react";
import Graphic from "../../components/Graphic/Graphic";
import "./HomePage.css";
import CaretLeft from "../../components/Svgs/CaretLeft";
import CaretRight from "../../components/Svgs/CaretRight";
import Card from "../../components/Card/Card";
import { motion, useAnimationControls } from "framer-motion";

function HomePage() {
  const controls = useAnimationControls();
  const dummydata = [
    {
      id: 0,
      name: "Parinistha Yadav",
      designation: "Senior Product Designer",
      department: "Arch",
      batch: 18,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 1,
      name: "Aditya Yadav",
      designation: "Junior Product Designer",
      department: "Meta",
      batch: 19,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 2,
      name: "Parinistha",
      designation: "Senior Product Designer",
      department: "Mech",
      batch: 17,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 3,
      name: "Yadav",
      designation: "Senior Product Designer",
      department: "Arch",
      batch: 18,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 3,
      name: "Parinit Yadav",
      designation: "Senior Product Designer",
      department: "Arch",
      batch: 18,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 3,
      name: "Nistha Yadav",
      designation: "Senior Product Designer",
      department: "Arch",
      batch: 18,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 3,
      name: "Astha Yadav",
      designation: "Senior Product Designer",
      department: "Arch",
      batch: 18,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 8,
      name: "Astha Gill",
      designation: "Senior Developer",
      department: "Civil",
      batch: 23,
      pfpImageUrl: null, //for now null
      icon: null,
    },
    {
      id: 8,
      name: "Astha Gill",
      designation: "Senior Developer",
      department: "Civil",
      batch: 23,
      pfpImageUrl: null, //for now null
      icon: null,
    },
  ];
  const pageSize = window.matchMedia("(max-width:768px)").matches ? 2 : 3;
  const containerSize = Math.ceil(dummydata.length / pageSize);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const length = 1368;
  const handleNext = () => {
    if (currentIndex + pageSize < dummydata.length) {
      setCurrentIndex(currentIndex + pageSize);
      controls.set("key2");
      setCurrentX(currentX - length);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - pageSize);
      controls.set("key3");
      setCurrentX(currentX + length);
    }
  };
  const displayedItems = dummydata.slice(0, containerSize * 3);
  const cardContainerRef = useRef(null);

  const colors = [
    {
      border: "rgba(250, 215, 111, 0.56)",
      borderPort: "#FAD76F",
      bg: "#FEF4D7", // yellow
      shadow: "#FAD76F",
    },
    {
      border: "rgba(141, 242, 106, 0.45)",
      borderPort: "#8EF26A",
      bg: "#E1F6D9", //green
      shadow: "#8DF26A",
    },

    {
      border: "#CCE2FF",
      borderPort: "#85A6E0",
      bg: "#DBEAFE", //purple
      shadow: "#85A6E0",
    },
  ];

  return (
    <>
      <Graphic />
      <div className="og_container">
        <div className="og_header_container">
          <div className="og_title">The OGs</div>
          <div className="arrows_container">
            <div className="arrows_sub_container">
              <div
                className="arrow_container"
                onClick={() => {
                  handlePrevious();
                }}
                disabled={currentIndex === 0}
              >
                <CaretLeft dark={currentIndex != 0} />
              </div>
              <div
                className="arrow_container"
                onClick={() => {
                  handleNext();
                }}
                disabled={currentIndex === dummydata.length-pageSize}
              >
                <CaretRight dark={currentIndex < dummydata.length-pageSize} />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          ref={cardContainerRef}
          className="og_content_container"
          variants={{
            initial: {
              translateX: 0,
            },
            key2: {
              translateX: currentX - length,
            },
            key3: {
              translateX: currentX + length,
            },
          }}
          animate={controls}
          style={{
            width: `${containerSize * 101}%`,
            transition: "transform 0.6s easeinout",
          }}
        >
          {displayedItems.map((item, index) => {
            return (
              <Card
                id={item.id}
                name={item.name}
                designation={item.designation}
                department={item.department}
                batch={item.batch}
                pfpImageUrl={item.pfpImageUrl}
                icon={item.icon}
                randomColor={colors[Math.floor(Math.random() * colors.length)]}
                horizontal={true}
                containerSize={containerSize}
              />
            );
          })}
        </motion.div>
      </div>
      <div className="collection_container">
        <div className="collection_header">
          <div className="collection_header_text">Collection</div>
        </div>
        <div className="collection_content">
          {dummydata.map((item) => {
            return (
              <Card
                id={item.id}
                name={item.name}
                designation={item.designation}
                department={item.department}
                batch={item.batch}
                pfpImageUrl={item.pfpImageUrl}
                icon={item.icon}
                randomColor={colors[Math.floor(Math.random() * colors.length)]}
                horizontal={false}
                containerSize={containerSize}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
