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
import upArrow from './arrow-up-circle-outline.svg';

const degreeSymbol = '\u00B0';

// import images for recognition by webpack
function attachImages() {
  const titleIcon = document.querySelector('#page-title-icon');
  titleIcon.setAttribute('src', sunIcon);
  const locationSearchIcon = document.querySelector('#location-input-icon');
  locationSearchIcon.setAttribute('src', cloudSearchIcon);
}

// Location input text - get location options from weather API and display them
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

// dynamically update location options on each update of input text
const locDropdown = document.querySelector('#location-drop-down-container');
function refreshLocationList(optionArray) {
  locDropdown.innerHTML = '';
  if (optionArray.length === 0) {
    locDropdown.setAttribute('class', 'drop-down-invis');
  } else {
    optionArray.forEach((element, index) => {
      const option = document.createElement('div');
      option.setAttribute('class', 'location-drop-down-item');
      option.setAttribute(
        'style',
        `top: calc(${index}*var(--location-input-height));`
      );
      const preciseLocation = element.name + ', ' + element.region;
      option.setAttribute('value', preciseLocation);
      option.textContent = preciseLocation;
      option.addEventListener('click', async () => {
        locationInput.value = ''; // not having any effect?
        locDropdown.setAttribute('class', 'drop-down-invis');
        // some extra effort to make nice fade in and out effect
        const transitionTimeInMs = 800;
        const additionalDataDelayInMs = 500;
        fadeVisibility(false, transitionTimeInMs);
        setTimeout(async () => {
          await generateWeatherForecast(preciseLocation, 3);
          drawLocationArea(getLocationData());
          drawTodayWeatherArea(getTodayWeatherData());
          drawForecastWeatherArea(getWeatherForecastData());
          fadeVisibility(true, 2 * transitionTimeInMs);
        }, transitionTimeInMs + additionalDataDelayInMs);
      });
      locDropdown.appendChild(option);
    });
    locDropdown.setAttribute('class', 'drop-down-vis');
  }
}

// fade main info container in and out
function fadeVisibility(visState, transitionTimeInMs) {
  const transitionTimeInSecs = (transitionTimeInMs / 1000).toFixed(3);
  const infoContainer = document.querySelector('#info-container');
  infoContainer.setAttribute(
    'style',
    `transition-duration: ${transitionTimeInSecs}s`
  );
  if (visState) {
    infoContainer.setAttribute('class', 'vis-true');
  } else {
    infoContainer.setAttribute('class', 'vis-false');
  }
}

function drawLocationArea(locData) {
  const locationName = document.querySelector('#location-name');
  locationName.textContent = locData.name + ', ' + locData.region;
  const locationRegion = document.querySelector('#location-region');
  locationRegion.textContent = locData.country;
  const locationTimestamp = document.querySelector('#location-localtime');
  locationTimestamp.textContent =
    'Local time: ' +
    locData.localtime_friendly +
    ', ' +
    locData.localdate_friendly;
}

function drawTodayWeatherArea(todayData) {
  const todayUpdated = document.querySelector('#today-updated');
  todayUpdated.textContent = 'Last updated: ' + todayData.last_updated;

  const todayWindImage = document.querySelector('#today-wind-image');
  todayWindImage.setAttribute('src', upArrow);
  todayWindImage.setAttribute(
    'style',
    `rotate: ${180 + todayData.windDirection}deg`
  );

  const todayWindNumber = document.querySelector('#today-wind-number');
  todayWindNumber.textContent = todayData.windSpeed_mph + 'mph';

  const todayImage = document.querySelector('#today-image');
  todayImage.setAttribute('src', todayData.imageLoc);

  const todayDesc = document.querySelector('#today-description');
  todayDesc.textContent = todayData.description;

  const todayWeather = document.querySelector('#today-temp');
  todayWeather.textContent =
    todayData.temp_cent.toFixed(0) + degreeSymbol + 'C';
}

function drawForecastWeatherArea(forecastData) {
  const container = document.querySelector('#forecast-weather-display');

  const domString = forecastData
    .map((element) => {
      return `
        <div class="forecast-day-display">
          <p class="forecast-date">${element.forecastDate_tempDate}</p>
          <img src="${element.imageLoc}" class="forecast-image" />
          <p class="forecast-max-temp">${element.maxTemp_c.toFixed(0) + degreeSymbol + 'C'}</p>
          <p class="forecast-min-temp">${element.minTemp_c.toFixed(0) + degreeSymbol + 'C'}</p>
        </div>
        `;
    })
    .join('');

  container.innerHTML = domString;
}

export { attachImages, addLocInputListener };
