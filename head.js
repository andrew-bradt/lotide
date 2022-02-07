const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬🤬🤬: ${actual} !== ${expected}`);
  }
};

const head = (array) => array[0];

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head([12]), 12);
assertEqual(head([]), undefined);