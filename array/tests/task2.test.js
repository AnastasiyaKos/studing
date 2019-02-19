const assert = require('chai').assert;
const {doubleArray} = require('../tasks/task2');

describe('#ARRAY TASK2 Double aray', () => {
    it('Should be: 1, 2, 1, 2', (done) => {
        assert.isArray(doubleArray([1, 2]));
        assert.equal(doubleArray([1]).length, 2);
        assert.deepEqual(doubleArray([ 1, 2 ]), [ 1, 2, 1, 2 ]);
        done()
    });

    it('Should be: 1, 2, 3, 1, 2, 3', (done) => {
        assert.isArray(doubleArray([1, 2, 3]));
        assert.equal(doubleArray([2, 2]).length, 4);
        assert.deepEqual(doubleArray([ 1, 2, 3 ]), [ 1, 2, 3, 1, 2, 3]);
        done()
    });

    it('Should be: 5, 4, 5, 4', (done) => {
        assert.isArray(doubleArray([5, 4]));
        assert.equal(doubleArray([2, 5, 8]).length, 6);
        assert.deepEqual(doubleArray([ 5, 4]), [ 5, 4, 5, 4]);
        done()
    });
});