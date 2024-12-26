const sumAll = function(firstNumber, lastNumber) {
  let total = 0;
  if (
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(lastNumber)  ||
    firstNumber < 0                ||
    lastNumber < 0
  ) {
    return "ERROR";
  }
  for (let i = firstNumber; i <= lastNumber; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
