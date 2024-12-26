const sumAll = function(num1, num2) {
  let total = 0;
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0                ||
    num2 < 0
  ) {
    return "ERROR";
  }
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
