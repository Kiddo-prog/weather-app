import React, { useState, useEffect } from "react";
import WeatherDetails from "../components/WeatherDetails.jsx";
import City from "../components/City.jsx";
import Forecast from "../components/Forecast.jsx";

export default function Content(props) {
  // const useLocation =
  const [items, setItems] = useState([]);
  const [load, isLoaded] = useState(false);
  const [error, showError] = useState(null);
  const [cityName, showCityName] = useState("");
  const getData = () => {
    const API_ID = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "d01a0d803b321b6b82966a6dce886253";
    const CITY_NAME = props.name;
    fetch(`${API_ID}?q=${CITY_NAME}&cnt=3&units=metric&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.list);
        setItems(data.list);
        isLoaded(true);
        showCityName(data.city);
      })
      .catch((err) => {
        console.log(err);
        showError(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return "Error fetching Data";
  } else if (!load) {
    return "Loading...";
  } else {
    return (
      <div>
        <City name={cityName.name} />
        {items.map((item) => (
          <div key={item.dt}>
            <div>
              <Forecast
                humidity={item.main.humidity}
                temp={item.main.temp}
                wind={item.wind.speed}
                time={item.dt_txt}
              />
            </div>
          </div>
        ))}
        <WeatherDetails
          condition={items[0].weather[0].main}
          desc={items[0].weather[0].description}
        />
      </div>
    );
  }
}
