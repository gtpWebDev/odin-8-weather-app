// would normally be protected, free API so okay for now
const weatherApiKey = '523c922a8fd8443586f100911241603';

async function getWeatherForecast(location, numDays) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=${numDays}`;
  const response = await fetch(url, { mode: 'cors' });
  const weatherData = await response.json();

  const locationData = createLocationData(weatherData.location);
  const todayWeatherData = createWeatherData(weatherData.current);
  const forecastWeatherData = createForecastWeatherArray(
    weatherData.forecast.forecastday
  );

  return { locationData, todayWeatherData, forecastWeatherData };
}

const createWeatherData = (currData) => {
  return {
    temp_cent: currData.temp_c,
    temp_fahr: currData.temp_f,
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
  return {
    name: locData.name,
    country: locData.country,
    localtime_unix: locData.localtime_epoch,
    // poss add date_fns here for a friendly localtime
  };
};

const createForecastWeatherArray = (forecastArray) => {
  const simpleArray = [];
  forecastArray.forEach((ele, index) => {
    simpleArray.push({
      forecastDayIndex: index + 1,
      forecastDate_unix: ele.date_epoch,
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

//_________MAY USE THE BELOW

// nice handle error approach that I may use

// Generic higher level error handler, replaces a function that does not deal with the errors
// with a function that does, so you don't have to do it every time

// function handleError(fn) {
//   return function (...params) {
//     return fn(...params).catch(function (err) {
//       //error handling
//       console.error("Oops", err);
//     });
//   };
// }

// ES6 equivalent
// const handleError =
//   (fn) =>
//   (...params) =>
//     fn(...params).catch(console.error);

// const safeFunction = handleError(unsafeAsyncFunction);

// (async () => {
//   const response = await safeFunction(url);
//   console.log(response);
// })();

export { getWeatherForecast };
