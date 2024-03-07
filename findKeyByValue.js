const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  const object1 = Object.keys(obj);

  for (const key of object1) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};
  //scan the object and return the first key which contains the given value

  //Obj.keys to find keys

  //loop using for...of loop

  //scan the object and return the first key which contains the given value

  //If no key with that given value is found, then it should return undefined.

//Test cases

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);