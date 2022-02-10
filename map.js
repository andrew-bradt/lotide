// assertArraysEqual code
const eqArrays = (array1, array2) => {
  let i = 0;
  if (array1.length === array2.length) {
    while (i < array1.length) {
      if (array1[i] !== array2[i]) {
        break;
      }
      i++;
    }
  }
  return i === array1.length;
};

const assertArraysEqual = (actual, expected) => {
  const actualStringified = JSON.stringify(actual);
  const expectedStringified = JSON.stringify(expected);
  const result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅✅✅: ${actualStringified} === ${expectedStringified}`);
  } else {
    console.log(`🤬🤬🤬: ${actualStringified} !== ${expectedStringified}`);
  }
};

// map implementation

const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

// tests
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [12, 99, 81, 4, 19, 24];


const results1 = map(words, word => word[0]);
const isEvenArray = map(numbers, number => number % 2 === 0);
const multiply10 = map(numbers, number => number * 10);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(isEvenArray, [true, false, false, true, false, true]);
assertArraysEqual(multiply10, [120, 990, 810, 40, 190, 240]);