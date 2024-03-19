// would normally be protected, free API so okay for now
const weatherApiKey = '523c922a8fd8443586f100911241603';

let locationArray = [];

const locationOptions = () => locationArray;

async function generateLocationOptions(textInput) {
  const url = `http://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${textInput}`;
  const response = await fetch(url, { mode: 'cors' });
  locationArray = await response.json();
}

export { generateLocationOptions, locationOptions };

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
