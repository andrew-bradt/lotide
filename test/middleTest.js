const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const original = [1, 2, 3];
middle(original);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(['a', undefined]), []);
assertArraysEqual(original, [1, 2, 3]);