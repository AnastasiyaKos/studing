const assert = require('chai').assert;
const {sort} = require('../tasks/task1');

describe('#ARRAY TASK1 MyString sorting', () => {
    it ('Should be: mlkjihgfedcba', (done) => {
        assert.equal(sort('bcdaeflmjgkhi'), 'mlkjihgfedcba')
        done();
    });

    it ('Should be: ihgfe', (done) => {
        assert.equal(sort('efghi'), 'ihgfe')
        done();
    });

    it ('Should be: mlkj', (done) => {
        assert.equal(sort('lmjk'), 'mlkj')
        done();
    });
});