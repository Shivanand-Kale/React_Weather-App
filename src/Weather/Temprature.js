import React, { useEffect, useState } from "react";
import "./styles.css";
import TempratureData from "./Weatherdata";
import WeatherCast from "./Weathercast";

const Temprature = () => {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=863e271ef012ee18508116d86c0de341`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };
      setTempInfo(myNewWeatherInfo);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input type="search" onChange={searchValue} />
      <TempratureData
        onChangeHandler={onChangeHandler}
        getWeatherInfo={getWeatherInfo}
        searchValue={searchValue}
      />
      {/* outet temp card */}
      <WeatherCast tempInfo={tempInfo} />
    </>
  );
};
export default Temprature;
