import React, { useState } from 'react';
import "./weatherApp.css";
import axios from 'axios';

function WeatherApp() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState()

  const handleCity = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  }



  const fetchWeather = async () => {
    try {

      const api_key = `e92c2c15b8be8509606991c68fb45e16`
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      const response = await axios.get(`${url}`)
      setWeather(response)
      console.log(weather);

    } catch (error) {
      console.log(error);
    }

  }


  const checkWeather = () => {
    fetchWeather();
  }


  return (
    <>

      <div className='container main-box'>

        <div className="input-group p-3 ">
          <input type="text" className="form-control " placeholder='Enter City Name' value={city}
            onChange={handleCity}
          />
        </div>

        <button className='btn btn-dark' onClick={checkWeather}>Check Weather</button>

        {/* agar condtion true hai tabhi  condtional rendering run hoga */}
        {weather && <>

          <div className="weather-box m-3 text-center">

            <h2>{weather.data.name}</h2>

            <h4>Temp {Math.floor(weather.data.main.temp - 273.15)}&#176; C</h4>

          </div>
        </>}
      </div>
    </>
  )
}

export default WeatherApp