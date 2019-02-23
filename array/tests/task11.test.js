const assert = require('chai').assert;
const {sortArray} = require('../tasks/task11');

describe('#ARAY TASK11 Sort arrays in array', () => {
    it ('Should be: [[1], [14,15], [a, c, d]]', (done) => {
        assert.deepEqual([[14,15], [1], ['a', 'c', 'd']].sort(sortArray), [[1], [14,15], ['a', 'c', 'd'], ])
        done();
    });

    it ('Should be: [[1], [54,72,9,30], [a, c, d]]', (done) => {
        assert.deepEqual([['a', 'c', 'd'], [1], [54,72,9,30]].sort(sortArray), [[1], ['a', 'c', 'd'], [54,72,9,30]])
        done();
    });
});