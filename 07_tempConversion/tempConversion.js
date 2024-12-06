const convertToCelsius = function(toCelsius) {
  let celsius = (toCelsius - 32) * ( 5 / 9);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(toFahrenheit) {
  let fahrenheit = toFahrenheit * ( 9 / 5 ) + 32;
  return Number(fahrenheit.toFixed(1));
};

console.log(convertToCelsius(35));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// npm test tempConversion.spec.js


