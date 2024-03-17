const weatherApiKey = '523c922a8fd8443586f100911241603';

function refineWeatherData(data) {
  const refinedData = {
    location: data.location.name,
    weather: {
      'temp-in-cent': data.current.temp_c,
      'temp-in-fahr': data.current.temp_f,
    },
  };
  return refinedData;
}

async function getWeatherForecast(location) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}`;
  const response = await fetch(url, { mode: 'cors' });
  const weatherData = await response.json();

  const refinedData = refineWeatherData(weatherData);
  return refinedData;
}

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
