const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// The following cases should pass
assertArraysEqual(['a', 2], ['a', 2]);
assertArraysEqual([false, true], [false, true]);
assertArraysEqual([], []);

// The following cases should fail
assertArraysEqual(['1', 1], [1, 1]);
assertArraysEqual([null], []);