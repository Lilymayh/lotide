const { assert } = require('chai');
const middle = require('../middle');

describe('#middle', () => {
	it("should return [] for [1, 2]", () => {
		assert.deepEqual(middle([1, 2]), [])
	});
	it("should return 2 for [1, 2, 3]", () => {
		assert.deepEqual(middle([1, 2, 3]), [2])
	});
	it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
		assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
	});
	it("make sure the original array was not altered by the middle function", () => {
		const words = ["hello", "world", "lighthouse"];
		const result = middle(words);
		assert.deepEqual(result, ["world"]);
		assert.strictEqual(words.length, 3);
	});
});