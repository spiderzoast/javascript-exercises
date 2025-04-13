const palindromes = function (input) {
  const cleanString = String(input).toLowerCase().replaceAll(/[^a-z0-9]/g, "")
  const reversedString = cleanString.split("").reverse().join("");
  return (cleanString === reversedString) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
