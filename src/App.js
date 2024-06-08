import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4eaa05d060a706d091b5db87df2eedb9&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      alert('Error fetching weather data. Please check the location and try again.');
    }
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <header className="app-header">
        <h1>Weather App</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city or zip code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
