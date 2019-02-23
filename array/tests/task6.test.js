const assert = require('chai').assert;
const {compare} = require('../tasks/task6');


describe('#ARRAY TASK6 Sort array', () => {
    it ('Should be: 10, 7, 4, 2, 1, -2, -9', (done) => {
        assert.deepEqual([2, 4, 7, 1, -2, 10, -9].sort(compare), [10, 7, 4, 2, 1, -2, -9]);
        done();
    });

    it ('Should be: 5, 2, 1, 1', (done) => {
        assert.deepEqual([1, 5, 1, 2].sort(compare), [5, 2, 1, 1]);
        done();
    });
});