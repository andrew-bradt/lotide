const middle = (array) => {
  const newArray = [];
  const middleIndex = Math.floor(array.length * 0.5);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      newArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      newArray.push(array[middleIndex]);
    }
  }
  return newArray;
};

module.exports = middle;