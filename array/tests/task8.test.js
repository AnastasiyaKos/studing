const assert = require('chai').assert;
const {doubleArr} = require('../tasks/task8');

describe('#ARRAY TASK8 Double array', () => {
    it ('Should be: one, 2, three, 4, one, 2, three, 4', (done) => {
        assert.deepEqual(doubleArr([ 'one', 2, 'three', 4]), ['one', 2, 'three', 4, 'one', 2, 'three', 4]);
        done();
    });

    it ('Should be: 1, 2, ded, 1, 2, ded', (done) => {
        assert.deepEqual(doubleArr([ 1, 2, 'ded']), [1, 2, 'ded', 1, 2, 'ded']);
        done();

    });
});