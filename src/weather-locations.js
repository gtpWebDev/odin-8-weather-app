// would normally be protected, free API so okay for now
const weatherApiKey = '523c922a8fd8443586f100911241603';

const unsafeGenerateLocationOptions = async (textInput) => {
  const url = `https://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${textInput}`;
  const response = await fetch(url, { mode: 'cors' });
  if (response.ok) {
    const locationArray = await response.json();
    return locationArray;
  } else {
    return [];
  }
};

// async function generateLocationOptions(textInput) {
//   const url = `https://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${textInput}`;
//   const response = await fetch(url, { mode: 'cors' });
//   const locationArray = await response.json();
//   return locationArray;
// }

//_________MAY USE THE BELOW

// Generic higher level error handler, replaces a function that does not deal with the errors
// with a function that does, so you don't have to do it every time

function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (err) {
      console.error('Error fetching possible locations from weather API', err);
    });
  };
}

const generateLocationOptions = handleError(unsafeGenerateLocationOptions);

// ES6 equivalent
// const handleError =
//   (fn) =>
//   (...params) =>
//     fn(...params).catch(console.error);

export { generateLocationOptions };
