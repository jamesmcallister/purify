const {
  multiplyPure,
  absolutePure,
  concatNamesPure,
  numbersToStringsPure,
  sortByLengthPure,
  lastTwoPure
} = require("../src/index.pure.js");

test("after", () => {
  const numbers = [2, 2];
  const numbersClone = [...numbers];
  expect(numbers).toEqual([2, 2]);
  expect(multiplyPure(numbers, 2)).toEqual([4, 4]);
  expect(numbers).toEqual(numbersClone);
});

test("absolute", () => {
  const numbers = [1, 4, -2, -5];
  const numbersClone = [...numbers];
  absolutePure(numbers);
  expect(numbers).toEqual(numbersClone);
});

test("concatNames", () => {
  const names = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    },
    {
      firstName: "James",
      lastName: "Sugar"
    },
    {
      firstName: "Ahmed",
      lastName: "Sugar"
    }
  ];
  const namesClone = [...names];
  const result = concatNamesPure(names);
  expect(result).toEqual(["Alan Sugar", "James Sugar", "Ahmed Sugar"]);
  expect(names).toEqual(namesClone);
});

test("numbersToStringsPure", () => {
  const things = ["one", 1, "two", 2];
  const thingsClone = [...things];
  const result = numbersToStringsPure(things);
  expect(result).toEqual(["one", "1", "two", "2"]);
  expect(things).toEqual(thingsClone);
});

test("sortByLength", () => {
  const strings = [
    "camel",
    "camel",
    "another camel",
    "different camel",
    "ahmed"
  ];
  const stringsClone = [...strings];
  const result = sortByLengthPure(strings);

  expect(result).toEqual([
    "camel",
    "camel",
    "ahmed",
    "another camel",
    "different camel"
  ]);
  expect(strings).toEqual(stringsClone);
});

test("lastTwo", () => {
  const numbers = [1, 2, 35, 5, 67, 8];
  const numbersClone = [...numbers];
  const result = lastTwoPure(numbers);

  expect(result).toEqual([67, 8]);
  expect(numbers).toEqual(numbersClone);
});
