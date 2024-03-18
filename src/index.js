import './styles.css';
import { getWeatherForecast } from './weather-api.js';

// set up event listeners for API fetches

// amend to value of input field after auto-complete
// const getWeatherButton = document.querySelector('#get-weather-button');
// getWeatherButton.addEventListener('click', async () => {
//   const response = await getWeatherForecast('london', 3);
//   console.log(response);
// });

// (async () => {
//   const response = await getWeatherForecast('burnley', 3);
//   console.log(response);
// })();

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
