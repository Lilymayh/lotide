const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that takes an array and a callback and returns the first key that returns a thruthy value

const findKey = (obj, callback) => {
  const newObj = {}
  const newObject = Object.keys(obj)

  for (const keys of newObject) {
    if (callback(obj[keys])) {
      newObj[keys] = obj[keys]
    }
  } 
  return newObj
}
//tests

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

console.log(assertEqual(results1["noma"].stars, 2))

const results2 = findKey({
  "Cinderella": {power: 5},
  "Aurora": {power: 7},
  "Snow White": {power: 3},
  "Belle": {power: 5}
}, x => x.power === 5)

console.log(assertEqual(results2["Cinderella"].power, 6))