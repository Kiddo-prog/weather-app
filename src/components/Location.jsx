import React, { useRef, useState, createContext } from "react";
import "../assets/css/weather.css";

// Top Level Weather App
export default function Location(props) {
  const [defaultValue, setValue] = useState("");
  const getValue = useRef();

  const getInputValue = () => {
    setValue(getValue.current.value);
  };

  const useValue = createContext(defaultValue);
  return (
    <div className="location-bg">
      <label htmlFor="city">Enter city:</label>
      <input
        ref={getValue}
        type="text"
        placeholder="Enter city name..."
        className="text-field"
      />
      <button className="btn" onClick={getInputValue}>
        Show Weather
      </button>

      <p>{defaultValue}</p>
    </div>
  );
}
