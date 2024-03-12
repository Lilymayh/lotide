const assertArraysEqual = require('../assertArraysEqual')
const assertEqual = require('../assertEqual')

assertEqual(assertArraysEqual(["hi", "hi"], ["hi", "hi"]));
assertEqual(assertArraysEqual(["hi", "hi"], ["hi", "hello"]));
