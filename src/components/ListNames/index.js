import React from "react";
import "./ListNames.css";
import { ShowName } from "../";

const ListNames = ({ babyData }) => {
  return (
    <div className="show-name__container">
      {babyData.map((baby) => (
        <ShowName {...baby} />
      ))}
    </div>
  );
};

export default ListNames;

// <ShowName key={baby.id} {...baby} />
