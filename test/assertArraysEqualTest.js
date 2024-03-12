const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(["hi", "hi"], ["hi", "hi"]);
assertArraysEqual(["hi", "hi"], ["hi", "hello"]);
