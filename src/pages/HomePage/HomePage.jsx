import React, { useRef, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Graphic from "../../components/Graphic/Graphic";
import "./HomePage.css";
import CaretLeft from "../../components/Svgs/CaretLeft";
import CaretRight from "../../components/Svgs/CaretRight";
import Card from "../../components/Card/Card";
function HomePage() {
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
  ];
  const pageSize = 3;

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex + pageSize < dummydata.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const displayedItems = dummydata.slice(currentIndex, currentIndex + pageSize);

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
  ];

  return (
    <>
      <NavBar />
      <Graphic />
      <div className="og_container">
        <div className="og_header_container">
          <div className="og_title">The OGs</div>
          <div className="arrows_container">
            <div className="arrows_sub_container">
              <div
                className="arrow_container"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <CaretLeft />
              </div>
              <div
                className="arrow_container"
                onClick={handleNext}
                disabled={currentIndex === dummydata.length - pageSize}
              >
                <CaretRight />
              </div>
            </div>
          </div>
        </div>
        <div className="og_content_container">
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
              />
            );
          })}
        </div>
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
