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

const flatten = (originalArray) => {
  const flattened = [];
  for (const element of originalArray) {
    if (Array.isArray(element)) {
      for (const nested of element) {
        flattened.push(nested);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

const flattenedArray = flatten([1, 2, [1, 2, 3]]);
const expected = [1, 2, 1, 2, 3];
assertArraysEqual(expected, flattenedArray);

const flattened2 = flatten([1, 2, 3, [1, 1]]);
const expected2 = [1, 2, 3, 1, 1];
assertArraysEqual(flattened2, expected2);
