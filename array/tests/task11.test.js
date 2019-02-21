const assert = require('chai').assert;
 const {sortArray} = require('../tasks/task11');

describe('#ARAY TASK11 Sort arrays in array', () => {
    it ('Should be: [[1], [14,15], [a, c, d]]', (done) => {
        assert.deepEqual(sortArray([['a', 'c', 'd'], [14,15], [54,72,9,30], [1]]), [[1], [14,15], [54,72,9,30], ['a', 'c', 'd'], ])
        done();
    });

    it ('Should be: [[1], [54,72,9,30], [a, c, d]]', (done) => {
        assert.deepEqual(sortArray([['a', 'c', 'd'], [1], [54,72,9,30]]), [[1], ['a', 'c', 'd'], [54,72,9,30]])
        done();
    });
});