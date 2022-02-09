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

const letterPositions = (sentence) => {
  const results = {};
  const lowerCaseString = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] !== ' ') {
      if (results[lowerCaseString[i]]) {
        results[lowerCaseString[i]].push(i);
      } else {
        results[lowerCaseString[i]] = [i];
      }
    }
  }
  return results;
};

const result = letterPositions('hello');

assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);
