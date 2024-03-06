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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  let newArr = []

  if (arr.length < 3) {
    return newArr
  }

  const middleNum = Math.floor(arr.length / 2)

  if (arr.length % 2 === 0) {
      newArr.push((arr[middleNum - 1]), arr[middleNum])
  } else {
      newArr.push(arr[middleNum])
}
    return newArr
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]