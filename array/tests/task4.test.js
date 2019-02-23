const assert = require('chai').assert;
const {getArr} = require('../tasks/task4');

describe('#ARRAY TASK4 Get array from 1 to N', () => {
    it ('Should be: 1, 2, 3', (done) => {
        assert.deepEqual(getArr(3), [1, 2, 3]);
        done()
    });

    it ('Should be: 1, 2', (done) => {
        assert.deepEqual(getArr(2), [1, 2]);
        done()
    });

    it ('Should be: 1, 2, 3, 4, 5', (done) => {
        assert.deepEqual(getArr(5), [1, 2, 3, 4, 5]);
        done()
    });
});