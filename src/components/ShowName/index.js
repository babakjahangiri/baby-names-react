import React from "react";
import "./ShowName.css";

const ShowName = ({ id, name, sex }) => {
  return (
    <button
      className={`show-name ${sex === "m" ? "name-male" : "name-female"}`}
    >
      {name}
    </button>
  );
};

export default ShowName;
