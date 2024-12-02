import React from 'react';

const WeatherDetails = ({ weather }) => {
  return (
    <div className="text-white">
     
      <div className="row mt-3">
        <div className="col">
          <h2 className="text-center">{weather.name}</h2>
          <p className="text-center fs-4">{weather.main.temp}°C</p>
        </div>
        <div className="col fs-3 vertical-text my-5">
          <p className="text-center">{weather.weather[0].description}</p>
        </div>
      </div>

      <div className="row mt-3 bg-secondary bg-opacity-75 mx-5 rounded-3 p-3 text-white">
        <div className="col">
          <p className="fs-4 text-center ">{weather.main.temp}°C</p>
          <h4 className="text-center ">Feels Like</h4>
        </div>
        <div className="col">
          <p className="fs-4 text-center">{weather.main.humidity}%</p>
          <h4 className="text-center">Humidity</h4>
        </div>
        <div className="col">
          <p className="fs-4 text-center">{weather.wind.speed} m/s</p>
          <h4 className="text-center">Wind Speed</h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
