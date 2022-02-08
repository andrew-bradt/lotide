const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬🤬🤬: ${actual} !== ${expected}`);
  }
};

const eqArrays = (actual, expected) => {
  let i = 0;
  if (actual.length === expected.length) {
    while (i < actual.length) {
      if (actual[i] !== expected[i]) {
        break;
      }
      i++;
    }
  }
  return i === actual.length;
};

// The following cases should pass
assertEqual(eqArrays(['a', 2], ['a', 2]), true);
assertEqual(eqArrays([false, true], [false, true]), true);
assertEqual(eqArrays([], []), true);

// The following cases should fail
assertEqual(eqArrays(['1', 1], [1, 1]), true);
assertEqual(eqArrays([null], []), true);