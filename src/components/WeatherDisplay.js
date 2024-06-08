import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <Card style={{ marginTop: 16 }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">Temperature: {main.temp}°C</Typography>
        <Typography variant="h6">Humidity: {main.humidity}%</Typography>
        <Typography variant="h6">Wind Speed: {wind.speed} m/s</Typography>
        <Typography variant="h6">Description: {weather[0].description}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
