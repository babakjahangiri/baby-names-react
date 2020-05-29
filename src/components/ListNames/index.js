import React, { useState, useEffect } from "react";
import "./ListNames.css";
import "./../SearchBar/SearchBar.css";
import babyData from "./../../data/babyNamesData.json";
import { ShowName } from "../";

const ListNames = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedBabyNames, setSearchedBabyNames] = useState(babyData);

  function updateSearch(event) {
    setSearchedValue(event.target.value.toLowerCase());
  }

  useEffect(() => {
    // if (searchedBabyNames === []) {
    //   setSearchedBabyNames(babyData);
    // }
    babyData.sort((a, b) => a.name.localeCompare(b.name));
    setSearchedBabyNames(
      babyData.filter((baby) => baby.name.toLowerCase().includes(searchedValue))
    );
  }, [searchedValue]);

  return (
    <React.Fragment>
      <input
        type="text"
        className="input-search"
        value={searchedValue}
        onChange={updateSearch}
        placeholder="Search your baby name"
      />
      <div className="show-name__container">
        {searchedBabyNames.map((baby) => (
          <ShowName {...baby} key={baby.id} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ListNames;

// <ShowName key={baby.id} {...baby} />
