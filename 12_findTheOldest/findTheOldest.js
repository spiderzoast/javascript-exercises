const findTheOldest = function(arr) {
  return arr.reduce((oldest, person) => {
    if (!('name' in oldest)) {
      return person;
    }

    const currentYear = new Date().getFullYear();

    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;

    return oldestAge > personAge ? oldest : person;

  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
