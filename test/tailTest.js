const tail = require('../tail');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');


describe('#tail', () => {
	it('should return [] for [1]', () => {
		assert.deepEqual(tail([1]), [])
	})
	it('should return [2, 3] for [1, 2, 3]', () => {
		assert.deepEqual(tail([1, 2, 3]), [2, 3])
	})
})