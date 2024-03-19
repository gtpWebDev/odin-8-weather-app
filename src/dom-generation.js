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

// import images for recognition by webpack
function attachImages() {
  const titleIcon = document.querySelector('#page-title-icon');
  titleIcon.setAttribute('src', sunIcon);
  const locationSearchIcon = document.querySelector('#location-input-icon');
  locationSearchIcon.setAttribute('src', cloudSearchIcon);
}

// Location input text - get location options from wetaher API and display them
const locationInput = document.querySelector('#location-input-text');
function addLocInputListener() {
  locationInput.addEventListener('input', async (event) => {
    const currentInput = event.target.value;
    if (currentInput.length >= 3) {
      await generateLocationOptions(currentInput);
    }
    refreshLocationList(locationOptions());
  });
}

// generate possible locations in a drop-down
const locAutocomplete = document.querySelector('#location-autocomplete');
function refreshLocationList(optionArray) {
  locAutocomplete.innerHTML = '';
  if (optionArray.length === 0) {
    locAutocomplete.setAttribute('class', 'autocomplete-invis');
  } else {
    optionArray.forEach((element) => {
      const listItem = document.createElement('option');
      // using combination of name and region to pass to confirmed request
      const preciseLocation = element.name + ', ' + element.region;
      listItem.setAttribute('value', preciseLocation);
      listItem.textContent = preciseLocation;
      locAutocomplete.appendChild(listItem);
    });
    locAutocomplete.setAttribute('class', 'autocomplete-vis');
  }
}

// Get and display the weather from the drop-down location selection
// (Needs a lot of tidying)
locAutocomplete.addEventListener('click', async (event) => {
  await generateWeatherForecast(event.target.value, 3);
  drawLocationArea(getLocationData());
  drawTodayWeatherArea(getTodayWeatherData());
  drawForecastWeatherArea(getWeatherForecastData());
});

function drawLocationArea(locData) {
  const locationName = document.querySelector('#location-name');
  locationName.textContent = locData.name + ', ' + locData.region;
  const locationRegion = document.querySelector('#location-region');
  locationRegion.textContent = locData.country;
  const locationTimestamp = document.querySelector('#location-localtime');
  locationTimestamp.textContent = 'Local time: ' + locData.localtime_friendly;
}

function drawTodayWeatherArea(todayData) {
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

  console.log('todayData', todayData);
  const todayWeather = document.querySelector('#today-weather-display');
  todayWeather.textContent = todayData.temp_cent + degreeSymbol + 'C';
}

function drawForecastWeatherArea(forecastData) {
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

  console.log('forecastData', forecastData);

  // check length of array is 3??
  forecastData.forEach((element, index) => {
    const a = document.querySelector(`[data-day-id='${index}']`);
    a.textContent = element.avgTemp_c;
  });
}

export { attachImages, addLocInputListener };
