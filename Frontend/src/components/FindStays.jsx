import React, { useState } from "react";
import "./FindStays.css";
import DatePicker from "./DatePicker";
import LocationPicker from "./LocationPicker";

const FindStays = () => {

  const [data, setData] = useState({
    dates: [new Date(), new Date()],
    location: ""
  }) 

  function handleSubmit() {
    console.log(data);
  }

  return (
    <div className="main-content">
      <DatePicker updateFunction={[data, setData]} />
      <LocationPicker updateFunction={[data, setData]}/>
      <button className="search-btn" onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default FindStays;
