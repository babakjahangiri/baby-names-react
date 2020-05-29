import React from "react";
import BeeImage from "./../../images/BeeBeeName.png";
import "./BeeBee.css";

const BeeBee = () => {
  return (
    <div className="welcome-container">
      <div>
        <img src={BeeImage} alt="Beebee Name" className="BeeImage"></img>
      </div>
      <div>
        <p>BeeBee Helps you to find your baby name </p>
      </div>
    </div>
  );
};

export default BeeBee;
