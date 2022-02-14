const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;