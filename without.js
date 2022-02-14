const without = (source, itemsToRemove) => {
  const filteredArray = [];
  for (const element of source) {
    let shouldDelete = false;
    for (const removeable of itemsToRemove) {
      if (removeable === element) {
        shouldDelete = true;
        break;
      }
    }
    if (!shouldDelete) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = without;