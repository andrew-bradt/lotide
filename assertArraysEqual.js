const {inspect} = require('util');
const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  const actualStringified = inspect(actual);
  const expectedStringified = inspect(expected);
  const result = eqArrays(actual, expected);
  if (result) {
    console.log(`✅✅✅: ${actualStringified} === ${expectedStringified}`);
  } else {
    console.log(`🤬🤬🤬: ${actualStringified} !== ${expectedStringified}`);
  }
};

module.exports = assertArraysEqual;