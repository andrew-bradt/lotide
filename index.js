// Functions with Automated Tests
const countLetters = require('./countLetters');
const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');

// Functions which need Automated Tests - Old Test Code Commented out in their corresponding test file
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  countLetters,
  head,
  middle,
  tail,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};
