const countLetters = (string) => {
  const stringLowerCase = string.toLowerCase();
  const charCounts = {};
  for (const char of stringLowerCase) {
    if (char !== ' ') {
      if (charCounts[char]) charCounts[char]++;
      else charCounts[char] = 1;
    }
  }
  return charCounts;
};

module.exports = countLetters;