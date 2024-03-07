const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const letterCount = {}

  for (const item of str) {
    if (str != ' '){
      if (letterCount[item]) {
        letterCount[item] += 1
      } else {
        (letterCount[item]) = 1
      }
    }
  }
  return letterCount
}


console.log(countLetters("lighthouse in the house"))
