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

const without = (source, itemsToRemove) => {
  const filteredArray = [];
  for (const element of source) {
    let shouldDelete = false;
    for (const removeable of itemsToRemove) {
      if (removeable === element) {
        shouldDelete = true;
        break;
      }
    }
    if (!shouldDelete) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

const original = [1, 2, 3];
without(original, [1, 2, 3]);

// Should Pass
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(original, [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);
// Should Fail
assertArraysEqual(without([1, 2, 3], [3]), [2, 3]);
assertArraysEqual(without([1, 2, 3], ['1', '2', '3']), []);
