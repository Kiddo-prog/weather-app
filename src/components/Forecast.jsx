// Bottom level Weather App
import React from "react";
import "./../assets/css/weather.css";

export default function Forecast(props) {
  return (
    <div>
      <div className="wth-forcs">
        <div className="time">{props.time}</div>
        <div className="hum">Humidity: {props.humidity}</div>
        <div className="temp">Temperature: {props.temp}</div>
        <div className="wind">Wind Speed: {props.wind} </div>
      </div>
    </div>
  );
}
