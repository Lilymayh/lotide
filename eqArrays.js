const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
}
return true
}

console.log(assertEqual(eqArrays([4,5,6],[4,5,6]), true))
console.log(assertEqual(eqArrays(["lighthouse", "labs"],["lighthouse", "labs"]), true))
console.log(assertEqual(eqArrays(["lighthouse", "labs"],["lighthouse", "labs", "test-case"]), false))
console.log(assertEqual(eqArrays([], []), true));