const head = require('../head');
const assertEqual = require('../assertEqual')

assertEqual(head[1, 0])
assertEqual(head([]))
assertEqual(head([1]))