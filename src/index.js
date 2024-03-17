import './styles.css';
import { getWeatherForecast } from './api-calls.js';

(async () => {
  const response = await getWeatherForecast('london');
  console.log(response);
})();

/*

Form design:

Input location at top. apply a "change" or "input" event listener GETLOCATIONOPTIONS
Ideally use the auto complete functionality that they have on the API.
Enter or button to [GET_THE_WEATHER_FORECAST]
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

Data:
  - date, local time in location
  - condition text and icon
  - temperature in c and f
  - rain in mm
  - wind speed mph, wind direction (compass, degree?)
  - location, region, country






*/
