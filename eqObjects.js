const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (const key of obj1Keys) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      return eqObjects(obj1[key], obj2[key]);
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

module.exports = eqObjects;