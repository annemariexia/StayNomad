import React from "react";
import "./FindStays.css";
import DatePicker from "./DatePicker";
import LocationPicker from "./LocationPicker";

function FindStays() {
  return (
    <div className="main-content">
      <DatePicker />
      <LocationPicker />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default FindStays;
