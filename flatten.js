const flatten = (originalArray) => {
  const flattened = [];
  for (const element of originalArray) {
    if (Array.isArray(element)) {
      for (const nested of element) {
        flattened.push(nested);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

module.exports = flatten;