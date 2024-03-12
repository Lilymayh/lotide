const tail = require('../tail');
const { assert } = require('chai');


describe('#tail', () => {
	it('should return [] for []', () => {
		assert.deepEqual(tail([]), [])
	})
	it('should return [] for [1]', () => {
		assert.deepEqual(tail([1]), [])
	});
	it('should return [2] for [1, 2]', () => {
		assert.deepEqual(tail([1, 2]), [2])
	})
	it('should return [2, 3] for [1, 2, 3]', () => {
		assert.deepEqual(tail([1, 2, 3]), [2, 3])
	});
})