// Middle level Weather Forecast App

import React from "react";
import "./Weather.css";
import "./data.json";

export default function WeatherDetails(props) {
  return (
    <div>
      <div className="WEATHER-DETAILS">
        <div
          style={{
            fontWeight: "400",
            fontSize: "19px",
            borderRadius: "30px",
          }}
        >
          {props.name}
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            letterSpacing: "1px",
          }}
        >
          {props.condition}
        </div>
      </div>
    </div>
  );
}
