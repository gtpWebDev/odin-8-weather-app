import './styles.css';
import { getLocations, getWeatherForecast } from './weather-api.js';
import sunIcon from './weather-sunny.svg';
import cloudSearchIcon from './cloud-search.svg';

/*

To do list:
- Changing text size in location input box widens grid, not sure why as yet.
- Organise data - separate out DOM work, possible separate out location and weather elements of weatherapi

*/

// import images for recognition by webpack
const titleIcon = document.querySelector('#page-title-icon');
titleIcon.setAttribute('src', sunIcon);
const locationSearchIcon = document.querySelector('#location-input-icon');
locationSearchIcon.setAttribute('src', cloudSearchIcon);

// Add event listeners for location input and location autocomplete selection

const locationInput = document.querySelector('#location-input-text');
const locAutocomplete = document.querySelector('#location-autocomplete');

// Collect possible locations and display them
locationInput.addEventListener('input', async (event) => {
  const currentInput = event.target.value;
  let locationOptionArray = [];
  if (currentInput.length >= 3) {
    locationOptionArray = await getLocations(currentInput);
    console.log('array', locationOptionArray);
  }
  refreshAutocomplete(locationOptionArray);
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
  const response = await getWeatherForecast(event.target.value, 3);
  console.log(response);
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
