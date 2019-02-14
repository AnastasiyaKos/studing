const assert = require('chai').assert;
const {factorial} = require('../tasks/task4');

describe('#TASK4 Get factorial', () => {
    it ('Should be: 2', (done) => {
        assert.equal(factorial(2), 2);
        done();
    });

    it ('Should be: 6', (done) => {
        assert.equal(factorial(3), 6);
        done();
    });

    it ('Should be: 24', (done) => {
        assert.equal(factorial(4), 24);
        done();
    });
});