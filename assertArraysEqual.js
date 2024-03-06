const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("Arrays do not match.");
    return
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("Arrays do not match.");
      return
    }
}
console.log("Arrays match!")
}

console.log(assertArraysEqual(["hi", "hi"], ["hi", "hi"]))