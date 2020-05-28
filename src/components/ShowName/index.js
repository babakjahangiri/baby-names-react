import React from "react";
import "./ShowName.css";

const ShowName = ({ name, sex }) => {
  return (
    <div className={`show-name ${sex === "m" ? " name-male" : " name-female"}`}>
      {name}
    </div>
  );
};

export default ShowName;
