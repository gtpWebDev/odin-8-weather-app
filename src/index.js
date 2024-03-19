import './styles.css';

import {
  generateLocationOptions,
  locationOptions,
} from './weather-locations.js';
import {
  generateWeatherForecast,
  getLocationData,
  getTodayWeatherData,
  getWeatherForecastData,
} from './weather-forecast.js';

import sunIcon from './weather-sunny.svg';
import cloudSearchIcon from './cloud-search.svg';

const degreeSymbol = '\u00B0';

/*

To do list:
- Changing text size in location input box widens grid, not sure why as yet.
- Organise data - separate out DOM work, possible separate out location and weather elements of weatherapi
- Add error handling for API requests
*/

// import images for recognition by webpack
const titleIcon = document.querySelector('#page-title-icon');
titleIcon.setAttribute('src', sunIcon);
const locationSearchIcon = document.querySelector('#location-input-icon');
locationSearchIcon.setAttribute('src', cloudSearchIcon);

// Event listeners

const locationInput = document.querySelector('#location-input-text');
const locAutocomplete = document.querySelector('#location-autocomplete');

// Collect possible locations and display them
locationInput.addEventListener('input', async (event) => {
  const currentInput = event.target.value;
  if (currentInput.length >= 3) {
    generateLocationOptions(currentInput);
  }
  refreshAutocomplete(locationOptions());
});

function refreshAutocomplete(optionArray) {
  locAutocomplete.innerHTML = '';
  if (optionArray.length === 0) {
    locAutocomplete.setAttribute('class', 'autocomplete-invis');
  } else {
    // replace with a formatted list
    optionArray.forEach((element) => {
      const listItem = document.createElement('option');
      listItem.setAttribute('value', element.name);
      listItem.textContent = element.name + ', ' + element.region;
      locAutocomplete.appendChild(listItem);
    });
    locAutocomplete.setAttribute('class', 'autocomplete-vis');
  }
}

// Get and display the weather
locAutocomplete.addEventListener('click', async (event) => {
  const response = await generateWeatherForecast(event.target.value, 3);

  // Location basics
  const locationData = getLocationData();

  const locationName = document.querySelector('#location-name');
  locationName.textContent = locationData.name + ', ' + locationData.region;
  const locationRegion = document.querySelector('#location-region');
  locationRegion.textContent = locationData.country;
  const locationTimestamp = document.querySelector('#location-localtime');
  locationTimestamp.textContent =
    'Local time: ' + locationData.localtime_friendly;

  // Today's Weather basics

  const example = {
    description: 'Light rain',
    imageLoc: '//cdn.weatherapi.com/weather/64x64/day/296.png',
    rain_inches: 0,
    rain_mm: 0.04,
    temp_cent: 12,
    temp_fahr: 53.6,
    windDirection: 220,
    windSpeed_kph: 16.9,
    windSpeed_mph: 10.5,
  };

  const todayWeatherData = getTodayWeatherData();
  console.log('todayWeatherData', todayWeatherData);

  const todayWeather = document.querySelector('#today-weather-display');
  todayWeather.textContent = todayWeatherData.temp_cent + degreeSymbol + 'C';

  // Forecast weather basics

  const forecastExample = {
    avgTemp_c: -10.9,
    avgTemp_f: 12.4,
    description: 'Partly Cloudy ',
    forecastDate_unix: 1710892800,
    forecastDayIndex: 1,
    imageLoc: '//cdn.weatherapi.com/weather/64x64/day/116.png',
    maxTemp_c: -1.7,
    maxTemp_f: 29,
    minTemp_c: -19.3,
    minTemp_f: -2.8,
  };

  const forecastWeatherData = getWeatherForecastData();
  console.log('forecastWeatherData', forecastWeatherData);

  // check length of array is 3??
  forecastWeatherData.forEach((element, index) => {
    const a = document.querySelector(`[data-day-id='${index}']`);
    a.textContent = element.avgTemp_c;
  });

  // const forecastWeather = document.querySelector('#today-weather-display');
  // forecastWeather.textContent = forecastWeatherData.temp_cent + degreeSymbol + 'C';
});

/*

Form design:

Input location at top. apply a "change" or "input" event listener GETLOCATIONOPTIONS
Ideally use the auto complete functionality that they have on the API.
Enter or button to [GET_THE_WEATHER_FORECAST]
Add a C/F switch to update display
Possibly add a miles and inch  / metric ?
Main content below, limit to today, and next 3 days (free API limit)
  - Location information at top
  - Today box on left below location
  - Three boxes to right of today, side by side for forecast

GETLOCATIONOPTIONS:
  - collect array of possible locations
  - refine down to required location array
  - use autocomplete functionality - check w3
  

GET_THE_WEATHER_FORECAST:
  - get required data, should be possible with one "forecast" endpoint request
  - refine the weather data to what I need
    - create location object
    - create today weather data
    - create forecast weather data array
  - construct the DOM
    - location
    - today
    - forecast

TOGGLE_C_F:
  - ensure all structured so can only update numbers and units, not entire DOM

TOGGLE_olde_metric:
  - as above



Data:
  - date, local time in location
  - condition text and icon
  - temperature in c and f
  - rain in mm
  - wind speed mph, wind direction (compass, degree?)
  - location, region, country






*/
