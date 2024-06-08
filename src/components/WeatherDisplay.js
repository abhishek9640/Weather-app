import React from 'react';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Description: {weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
