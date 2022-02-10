const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬🤬🤬: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) return key;
  }
};

const cities = {
  windsor: {
    province: 'ON'
  },
  montreal: {
    province: 'QC'
  },
  calgary: {
    province: 'AB'
  },
  vancouver: {
    province: 'BC'
  }
};

assertEqual(findKey(cities, city => city.province === 'AB'), 'calgary');
assertEqual(findKey(cities, city => city.province === 'SK'), undefined);

