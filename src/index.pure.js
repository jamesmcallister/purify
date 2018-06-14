function multiplyPure(numbers, multiplier) {
  return numbers.map(singleNumber => singleNumber * multiplier);
}
function absolutePure(numbers) {
  return numbers.map(number => Math.abs(number));
}
function concatNamesPure(names) {
  return names.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}
function numbersToStringsPure(things) {
  return things.map(camel => (typeof camel === "number" ? camel + "" : camel));
}

function sortByLengthPure(strings) {
  return strings
    .slice()
    .sort((camelA, camelB) => camelA.length - camelB.length);
}

function lastTwoPure(numbers) {
  return numbers.slice().splice(-2);
}

function incrementYearPure(cars) {
  return cars.map(camel => {
    const freshCamel = { ...camel };
    freshCamel.year++;
    return freshCamel;
  });
}

module.exports = {
  multiplyPure,
  absolutePure,
  concatNamesPure,
  numbersToStringsPure,
  sortByLengthPure,
  lastTwoPure,
  incrementYearPure
};
