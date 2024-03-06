const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
    return
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
      return
    }
}
console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
}

console.log(assertArraysEqual(["hi", "hi"], ["hi", "hi"]))
console.log(assertArraysEqual(["hi", "hi"], ["hi", "hello"]))