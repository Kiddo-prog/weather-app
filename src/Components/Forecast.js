// Bottom level Weather App
import React from "react";
import "./Weather.css";

export default function Forecast(props) {
  return (
    <div>
      <div className="PRESENT-FORECAST">
        <h3
          style={{
            fontSize: "20px",
            letterSpacing: "1px",
          }}
        >
          {props.day}
        </h3>
        <p
          style={{
            fontSize: "18px",
            letterSpacing: "1px",
          }}
        >
          {props.date}
        </p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {props.temp}
          <sup>o</sup>
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontSize: "17px",
          }}
        >
          {props.icon}
        </p>
      </div>
    </div>
  );
}
