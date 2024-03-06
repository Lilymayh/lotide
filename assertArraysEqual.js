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

console.log(assertArraysEqual(eqArrays(["hi", "hi"], ["hi", "hi"])))
console.log(assertArraysEqual(eqArrays(["hi", "hi"], ["hi", "hello"])))