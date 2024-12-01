import React from 'react';

const WeatherDetails = ({ weather }) => {
  return (
    <div className="card p-4">
      <h2>{weather.name}, {weather.sys.country}</h2> 
      <div className="row mt-3">
        <div className="col">
         
          <p>{weather.main.temp}°C</p>
        </div>
        <div className="col">
        <p>{weather.weather[0].description}</p> 
         
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
        <h4>Feels like</h4>
        <p>{weather.main.temp}°C</p>
        </div>
        <div className="col">
            <h4>Humidity</h4>
          <p>{weather.main.humidity}%</p>
        </div>
        <div className="col">
          <h4>Wind Speed</h4>
          <p>{weather.wind.speed} m/s</p>
        </div>
      
      </div>
    </div>
  );
};

export default WeatherDetails;
