import React from "react";
import "./Weather.css";

// Top Level Weather App
export default function Location(props) {
  const changeCityWeather = (e) => {
    e.preventDefault();
  };
  const viewWeather = () => {
    alert("Loading...");
  };
  return (
    <div>
      <label htmlFor="city">City:</label>
      <input
        type="text"
        placeholder="Enter city name..."
        onChange={changeCityWeather}
        className="INPUT-FIELD"
      />
      <button className="BTN" onClick={viewWeather}>
        Show Weather
      </button>
      <div className="CITY-LOCATION">
        <span>City:</span>
        <p>{props.city}</p>
      </div>
    </div>
  );
}
