const areBothArrays = (el1, el2) => Array.isArray(el1) && Array.isArray(el1) === Array.isArray(el2);

const eqArrays = (el1, el2) => {
  const [poppedEl1, poppedEl2] = [el1.pop(), el2.pop()];
  if (areBothArrays(poppedEl1, poppedEl2) && poppedEl1.length === poppedEl2.length) {
    return eqArrays(el1, el2) && eqArrays(poppedEl1, poppedEl2);
  }
  return poppedEl1 === poppedEl2;
};
module.exports = eqArrays;