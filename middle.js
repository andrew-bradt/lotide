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

const middle = (array) => {
  const newArray = [];
  const middleIndex = Math.floor(array.length * 0.5);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      newArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      newArray.push(array[middleIndex]);
    }
  }
  return newArray;
};

const original = [1, 2, 3];
middle(original);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(['a', undefined]), []);
assertArraysEqual(original, [1, 2, 3]);