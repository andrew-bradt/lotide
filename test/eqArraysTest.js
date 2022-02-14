const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays(['a', 2], ['a', 2]), true);
assertEqual(eqArrays([false, true], [false, true]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(['1', 1], [1, 1]), false);
assertEqual(eqArrays([null], []), false);