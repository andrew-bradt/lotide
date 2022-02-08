const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬🤬🤬: ${actual} !== ${expected}`);
  }
};

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

// The following cases should pass
assertEqual(eqArrays(['a', 2], ['a', 2]), true);
assertEqual(eqArrays([false, true], [false, true]), true);
assertEqual(eqArrays([], []), true);

// The following cases should fail
assertEqual(eqArrays(['1', 1], [1, 1]), true);
assertEqual(eqArrays([null], []), true);