const convertToCelsius = function(fahrenheit) {
  return Number(((fahrenheit - 32) / 1.8).toFixed(2));
};

const convertToFahrenheit = function(celsius) {
  return Number(((celsius * 1.8) + 32).toFixed(2));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
