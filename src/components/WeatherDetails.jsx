// Middle level Weather Forecast App

import React from "react";
import "./../assets/css/weather.css";

export default function WeatherDetails(props) {
  return (
    <div>
      <h1>Details</h1>
      <div className="cond-1">Condition: {props.condition}</div>
      <div className="desc">Description: {props.desc}</div>
    </div>
  );
}
