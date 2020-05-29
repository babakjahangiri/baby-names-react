import React from "react";
import "./App.css";

import { ListNames } from "./components";
import BeeBee from "./components/BeeBee";

function App() {
  return (
    <div className="app">
      {/* <SearchBar /> */}
      {/* <ListNames babyData={nameData} /> */}
      <BeeBee />
      <ListNames />
    </div>
  );
}

export default App;
