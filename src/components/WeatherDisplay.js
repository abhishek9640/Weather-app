import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled card component
const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: 16,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

// WeatherDisplay component to display weather details
const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">Temperature: {main.temp}°C</Typography>
        <Typography variant="h6">Humidity: {main.humidity}%</Typography>
        <Typography variant="h6">Wind Speed: {wind.speed} m/s</Typography>
        <Typography variant="h6">Description: {weather[0].description}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default WeatherDisplay;
