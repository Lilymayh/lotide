const inspect = require('util').inspect;

const assertObjectsEqual = function(actual, expected) {
	if(inspect(actual) === inspect(expected)) {
		console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log(`Example label: ${inspect({ a: '1', b: 2 })}`);
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });
