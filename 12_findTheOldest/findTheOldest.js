const findTheOldest = function(array) {
  return array.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    return oldestAge > personAge ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
