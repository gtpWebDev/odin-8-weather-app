import { format, fromUnixTime } from 'date-fns';

// would normally be protected, free API so okay for now
const weatherApiKey = '523c922a8fd8443586f100911241603';

// variables private to the module
let locationData = {};
let todayWeatherData = {};
let forecastWeatherData = [];
let failureMessage = {};

const getLocationData = () => locationData;
const getTodayWeatherData = () => todayWeatherData;
const getWeatherForecastData = () => forecastWeatherData;
const getFailureMessage = () => failureMessage;

async function unsafeGenerateWeatherForecast(location, numDays) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=${numDays}`;
  const response = await fetch(url, { mode: 'cors' });
  if (response.ok) {
    const weatherData = await response.json();
    locationData = createLocationData(weatherData.location);
    todayWeatherData = createWeatherData(weatherData.current);
    forecastWeatherData = createForecastWeatherArray(
      weatherData.forecast.forecastday
    );
    return true;
  } else {
    const errorDetails = await response.json();
    failureMessage = `Weather API error code ${errorDetails.error.code}: ${errorDetails.error.message}`;
    return false;
  }
}

const createWeatherData = (currData) => {
  const friendlyLastUpdated = format(currData.last_updated, 'h:mmaaa');
  return {
    temp_cent: currData.temp_c,
    temp_fahr: currData.temp_f,
    last_updated: friendlyLastUpdated,
    description: currData.condition.text,
    imageLoc: currData.condition.icon,
    rain_mm: currData.precip_mm,
    rain_inches: currData.precip_in,
    windSpeed_mph: currData.wind_mph,
    windSpeed_kph: currData.wind_kph,
    windDirection: currData.wind_degree,
  };
};

const createLocationData = (locData) => {
  const friendlyDate = format(locData.localtime, 'MMM do');
  const friendlyTime = format(locData.localtime, 'h:mmaaa');

  return {
    name: locData.name,
    region: locData.region,
    country: locData.country,
    localtime_unix: locData.localtime_epoch,
    localdate_friendly: friendlyDate,
    localtime_friendly: friendlyTime,
    // poss add date_fns here for a friendly localtime
  };
};

const createForecastWeatherArray = (forecastArray) => {
  const simpleArray = [];
  forecastArray.forEach((ele, index) => {
    // const newDate = fromUnixTime(ele.date_epoch);
    const newDate = format(fromUnixTime(ele.date_epoch), 'MMM do');

    simpleArray.push({
      forecastDayIndex: index + 1,
      forecastDate_unix: ele.date_epoch,
      forecastDate_tempDate: newDate,
      // forecastDate: ele.date,
      avgTemp_c: ele.day.avgtemp_c,
      maxTemp_c: ele.day.maxtemp_c,
      minTemp_c: ele.day.mintemp_c,
      avgTemp_f: ele.day.avgtemp_f,
      maxTemp_f: ele.day.maxtemp_f,
      minTemp_f: ele.day.mintemp_f,
      description: ele.day.condition.text,
      imageLoc: ele.day.condition.icon,
    });
  });
  return simpleArray;
};

// Generic higher level error handler, replaces a function that does not deal with the errors
// with a function that does.

function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (err) {
      console.error('Error fetching weather information from weather API', err);
    });
  };
}

const generateWeatherForecast = handleError(unsafeGenerateWeatherForecast);

// ES6 equivalent
// const handleError =
//   (fn) =>
//   (...params) =>
//     fn(...params).catch(console.error);

export {
  generateWeatherForecast,
  getLocationData,
  getTodayWeatherData,
  getWeatherForecastData,
  getFailureMessage,
};
