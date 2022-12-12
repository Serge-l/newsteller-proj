import React, { useState } from "react";
import Loader from '../Loader/Loader';
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b82512ba366b5a8d5e4b4d4332706eec`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      
      axios.get(url).then((response) => {
      
        setTimeout(() => {
          setData(response.data);
          console.log(response.data);
          setLoading(false)
        },3000)
 
      });
      setLocation("");
    }
  };

  function p () {
    return (
      setLoading(false)
    )
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyUp={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="city">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1 className="temperature">{data.main.temp.toFixed()}° C</h1>
            ) : null}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="40px"
              height="40px"
              fill="white"
            >
              <path d="M416 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm0 64c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96zM96 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C217.8 332.6 224 349.5 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9C88.9 308.4 96 293.8 96 276.5V112zM144 0C82.1 0 32 50.2 32 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.3-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C256 50.2 205.9 0 144 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="40px"
              height="40px"
              fill="white"
            >
              <path d="M122.4 1.2C127.6-.9 133.4-.2 137.9 3l70.3 50.3L278.5 3c4.5-3.2 10.3-3.9 15.4-1.8s8.8 6.7 9.7 12.2l14.1 85.3L403 112.8c5.4 .9 10.1 4.6 12.2 9.7s1.4 10.9-1.8 15.4l-38.8 54.3c-2.2-.1-4.3-.2-6.5-.2c-23.2 0-45 6.2-63.8 17c.1-12.5-2.2-25.3-7.3-37.6c-20.3-49-76.4-72.2-125.4-52s-72.2 76.4-52 125.4c18.3 44.3 66 67.5 111.1 56.6c-36.3 18.2-62.8 53.3-69.1 94.9l-23.6 16.9c-4.5 3.2-10.3 3.9-15.4 1.8s-8.8-6.7-9.7-12.2L98.7 317.7 13.4 303.6c-5.5-.9-10.1-4.6-12.2-9.7S-.2 282.9 3 278.5l50.3-70.3L3 137.9c-3.2-4.5-3.9-10.3-1.8-15.4s6.7-8.8 12.2-9.7L98.7 98.7l14.1-85.3c.9-5.5 4.6-10.1 9.7-12.2zM149 232.7c-13.5-32.7 2-70.1 34.6-83.6s70.1 2 83.6 34.6s-2 70.1-34.6 83.6s-70.1-2-83.6-34.6zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z" />
            </svg>
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}° C</p>
              ) : null}
              <p className="descripta">Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p className="descripta">Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed}MPH</p> : null}
              <p className="descripta">Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
