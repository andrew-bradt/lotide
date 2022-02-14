const letterPositions = (sentence) => {
  const results = {};
  const lowerCaseString = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] !== ' ') {
      if (results[lowerCaseString[i]]) {
        results[lowerCaseString[i]].push(i);
      } else {
        results[lowerCaseString[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;