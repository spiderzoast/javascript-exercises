const removeFromArray = function(myArray, ...toRemove) {
  const newArray = [];
  firstLoop: for (let i = 0; i < myArray.length; i++) {
    if (Array.isArray(toRemove)) {
      for (const item of toRemove){
        if (myArray[i] === item) {
          continue firstLoop;
        }
      }
    } else if (myArray[i] === toRemove) {
      continue;
    }
    newArray.push(myArray[i]);
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
