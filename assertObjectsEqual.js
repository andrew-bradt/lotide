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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  const actualInspected = inspect(actual);
  const expectedInspected = inspect(expected);
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅: ${actualInspected} === ${expectedInspected}`);
  } else {
    console.log(`🤬🤬🤬: ${actualInspected} !== ${expectedInspected}`);
  }
};

assertObjectsEqual({a: '1', b: 2}, {b:2, a:'1'});
assertObjectsEqual({a: ['1', 12], b: 2}, {b:2, a:['1', 12]});
assertObjectsEqual({a: [null], b: 2, c:0}, {b:2, a:[null], c:0});