import React, { useEffect, useState } from "react";

const WeatherCast = ({ tempInfo }) => {
  const [weatheState, setWeatherSatate] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
  } = tempInfo;
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherSatate("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherSatate("wi-fog");
          break;
        case "Clear":
          setWeatherSatate("wi-day-sunny");
          break;
        case "Mist":
          setWeatherSatate("wi-dust");
          break;
        default:
          setWeatherSatate("wi-day-sunny");
      }
    }
  }, [weathermood]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatheState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* four column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                10:10 AM <br />
                Sunset <br />
                {timeStr}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                10:10 AM <br />
                Humidity <br />
                {humidity}
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                10:10 AM <br />
                Pressure <br />
                {pressure}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                10:10 AM <br />
                Speed <br />
                {speed}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCast;
