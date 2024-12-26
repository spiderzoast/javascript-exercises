const reverseString = function(stringToBeReversed) {
  const myArray = stringToBeReversed.split("");
  let reversedString = "";
  for (let i = myArray.length - 1; i >= 0; i--) {
    reversedString += myArray[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
