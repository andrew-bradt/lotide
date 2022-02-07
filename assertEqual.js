const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬🤬🤬: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Dog", "Dog");
assertEqual(1, 1);
assertEqual(99, 101);