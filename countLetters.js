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
    if (item != ' '){
      if (letterCount[item]) {
        letterCount[item] += 1
      } else {
        (letterCount[item]) = 1
      }
    }
  }
  return letterCount
}

const result1 = countLetters('')

assertEqual(result1["LHL"])
assertEqual(result1["lihthouse in the house"])