import React, { Fragment, useState, useRef } from "react";
import Content from "./Content.jsx";
import Location from "../components/Location.jsx";

function Home() {
  const [inputCity, setCity] = useState("");
  const city = useRef();
  const cityWeather = () => {
    setCity(city.current.value);
  };
  return (
    <Fragment>
      <div className="weather-background">
        <div className="location-bg">
          <input ref={city} type="text" onChange={inputCity} />
          <button onClick={cityWeather}>submit</button>
          <p>{inputCity}</p>
        </div>
        <Location />
        <Content name={inputCity} />
      </div>
    </Fragment>
  );
}
export default Home;
