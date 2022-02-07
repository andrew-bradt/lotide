const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬🤬🤬: ${actual} !== ${expected}`);
  }
};

const tail = (array) => array.slice(1);

const nums = [1, 2, 3];
tail(nums);

assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], ['Lighthouse', 'Labs'][0]);
assertEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], ['Lighthouse', 'Labs'][1]);
assertEqual(nums.length, 3);
assertEqual(tail([]).length, 0);
assertEqual(tail([1]).length, 0);