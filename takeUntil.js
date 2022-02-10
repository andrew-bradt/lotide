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

// takeUntil Implementation
const takeUntil = (array, callback) => {
  const newArray = [];
  for (const element of array) {
    if (callback(element)) break;
    newArray.push(element);
  }
  return newArray;
};

// tests
const numbers = [1, 2, 3, 4, 8, 9, 13, 100, 1000, -10, 5, 2000];
const result1 = takeUntil(numbers, number => number > 100);
assertArraysEqual(result1, [1, 2, 3, 4, 8, 9, 13, 100]);

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const result2 = takeUntil(alphabet.split(''), char => char === 'k');
assertArraysEqual(alphabet.split('').slice(0, 10), result2);

const bools = [true, true, true, false, true, false, true, true];
const result3 = takeUntil(bools, bool => !bool);
assertArraysEqual(result3, [true, true, true]);
