const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')

console.log(assertEqual(eqArrays([4,5,6],[4,5,6]), true))
console.log(assertEqual(eqArrays(["lighthouse", "labs"],["lighthouse", "labs"]), true))
console.log(assertEqual(eqArrays(["lighthouse", "labs"],["lighthouse", "labs", "test-case"]), false))
console.log(assertEqual(eqArrays([], []), true));