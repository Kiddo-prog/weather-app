import React from "react";
import "./App.css";
import Location from "./Components/Location";
import WeatherDetails from "./Components/WeatherDetails";
import WeatherChart from "./Components/WeatherChart";
import MoreWeather from "./Components/Forecast";
import "./Components/api/ApiConfig";
import data from "./Components/data.json";

function App() {
  return (
    <div className="APP-CONTAINER">
      <div className="WEATHER-CONTAINER">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Weather App
        </h1>
        <Location city={data.name} />
        <h2>Details: </h2>
        <WeatherDetails name="Humidity" condition={data.main.humidity} />
        <WeatherDetails name="Temperature" condition={data.main.temp} />
        <WeatherDetails name="Wind Speed" condition={data.wind.speed} />
        <WeatherChart />
        <h2>Forecast: </h2>
        <div className="FORECAST-SECTION">
          <MoreWeather
            day="Today"
            date={new Date().toLocaleDateString()}
            temp="23"
            icon="Sunny"
          />
          <MoreWeather
            day="Tomorrow"
            date={new Date().toLocaleDateString()}
            temp="27"
            icon="Cloudy"
          />
          <MoreWeather
            day="Next Tomorrow"
            date={new Date().toLocaleDateString()}
            temp="25"
            icon={data.weather.main}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
