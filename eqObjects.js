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

const eqObjects = (obj1, obj2) => {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length !== obj2Length) return false;

  for (const key in obj1) {
    const isObj1Array = Array.isArray(obj1[key]);
    const isObj2Array = Array.isArray(obj2[key]);
    if (isObj1Array || isObj2Array) {
      const areArrays = isObj1Array === isObj2Array;
      const areEqualArrays = eqArrays(obj1[key], obj2[key]);
      if (!areArrays || !areEqualArrays) return false;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

const ab = { a: '1', b: '2'};
const ba = { b: '2', a: '1'};
assertEqual(eqObjects(ab, ba), true);
console.log('-------------------------');

const abc = { a: '1', b: '2', c: '3'};
assertEqual(eqObjects(abc, ba), false);
console.log('-------------------------');

const cd = { c: '1', d: ['2', 3]};
const dc = { d: ['2', 3], c: '1'};
assertEqual(eqObjects(cd, dc), true);
console.log('-------------------------');

const cde = { c: '1', d: ['2', 3, 4]};
assertEqual(eqObjects(cde, dc), false);
console.log('-------------------------');

const ef = { e: '1', f: ['2']};
const fe = { f: '2', e: '1'};
assertEqual(eqObjects(ef, fe), false);