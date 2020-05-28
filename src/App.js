import React from "react";
import "./App.css";
import nameData from "./data/babyNamesData.json";
import { ListNames } from "./components";

function App() {
  nameData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="app">
      <ListNames babyData={nameData} />
    </div>
  );
}

export default App;
