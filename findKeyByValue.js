const findKeyByValue = (obj, matchingVal) => {
  for (const key in obj) {
    if (obj[key] === matchingVal) return key;
  }
};

module.exports = findKeyByValue;