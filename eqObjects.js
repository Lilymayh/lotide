const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (object1.length !== object2.length) {
    return false
  }
    for (let i = 0; i < object1.length; i++) {
      if (object1[i] !== object2[i])
      return false
  }
  return true
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
console.log(assertEquals(eqObjects(shirtObject , anotherShirtObject), true));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
console.log(assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false));