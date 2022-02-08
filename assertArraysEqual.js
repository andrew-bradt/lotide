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

// The following cases should pass
assertArraysEqual(['a', 2], ['a', 2]);
assertArraysEqual([false, true], [false, true]);
assertArraysEqual([], []);

// The following cases should fail
assertArraysEqual(['1', 1], [1, 1]);
assertArraysEqual([null], []);