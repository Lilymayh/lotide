const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
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


const letterPositions = function(sentence) {
  const results = {};

  for (const i in sentence) {
    const letter = sentence[i]

    if (results[letter] != '') {
      results[letter].push(Number(i))
    } else {
      results[letter] = [Number(i)]
    }
  }
  return results;
};


console.log(assertArraysEqual(letterPositions("hello").e, [1])); //expected to pass
console.log(assertArraysEqual(letterPositions("goodbye").e, [1])); //expected to fail 