import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Paper, Switch, AppBar, Toolbar } from '@mui/material';
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
    <Container maxWidth="sm" className={darkMode ? 'app dark-mode' : 'app'}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Toolbar>
      </AppBar>
      <Paper style={{ padding: 16, marginTop: 16 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Enter city or zip code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ marginBottom: 16 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={fetchWeather}>
          Search
        </Button>
      </Paper>
      {weatherData && <WeatherDisplay data={weatherData} />}
    </Container>
  );
};

export default App;
