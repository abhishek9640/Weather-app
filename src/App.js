import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import {
  Container, TextField, Button, Typography, Paper,
  AppBar, Toolbar, CssBaseline, IconButton, Box
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4eaa05d060a706d091b5db87df2eedb9&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      alert('Error fetching weather data. Please check the location and try again.');
    }
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" className="app">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Weather App
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
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
        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {format(dateTime, 'PPPPpppp')}
          </Typography>
        </Box>
        {weatherData && <WeatherDisplay data={weatherData} />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
