# Weather App

This is a weather application built using React and the Open Weather API. The application provides current weather information based on user input.

## Features

- Current Location Weather: Automatically fetches and displays the weather for the user's current location.
- Search Functionality: Allows users to search for and display weather information for different locations.
- Multiple Locations: Displays weather information for multiple locations at the same time.
- Additional Weather Details: Displays additional details such as humidity, wind speed, and weather description.
- Dark Mode Toggle: Users can switch between dark mode and light mode.
- Responsive Design: The application is fully responsive and works well on different devices and screen sizes.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository.
    ```bash
    git clone https://github.com/your-username/weather-app.git

    ```
2. Navigate to the project directory.
    ```bash
    cd weather-app

    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Replace `YOUR_API_KEY` in `App.js` with your Open Weather API key.
5. Start the application:
    ```bash
    npm start
    ```

### Usage

1. Fetch Current Location Weather:

- On initial load, the app will automatically fetch and display the weather for your current location.

2. Search for Weather Information:
- Enter a city name or zip code in the search input field.
- Click the "Add Location" button to fetch and display the weather for the entered location.

3. Toggle Dark Mode:
- Click the toggle button at the top right corner of the app to switch between dark mode and light

## Known Issues
- The application does not handle API errors gracefully. Error messages could be improved for better user feedback.
- The weather data is not updated automatically. Users need to refresh the data manually.

## Technologies Used

- React
- Axios
- Material-UI
- date-fns
- Open Weather API



