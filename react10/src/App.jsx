import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import WeatherDetails from './component/WeatherDetails';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const apiKey = '606bac1213111c8911a9cf810cef2762';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      setError(null);  
    } catch (err) {
      setError('City not found');
      setWeather(null);  
    }
  };

  return (
    <Router>
      <div className="container text-center mt-5">
        <header>
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for a city..."
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="weather-info">
                {error && <div className="alert alert-danger">{error}</div>}
                {weather && <WeatherDetails weather={weather} />}
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
