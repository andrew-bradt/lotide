const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🤬🤬🤬: ${actual} !== ${expected}`);
  }
};

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

const count = countLetters('   AAAA BBB CcC dD EE ');
assertEqual(count['a'], 4);
assertEqual(count['b'], 3);
assertEqual(count['c'], 3);
assertEqual(count['d'], 2);
assertEqual(count['e'], 2);
assertEqual(count['f'], undefined);