const assert = require('chai').assert;
const {checkAge} = require('../tasks/task6');

describe('#TASK6  Check age', () => {
    it('Return true', (done) => {
       assert.equal(checkAge(18), true);
        done();
    });

    it('Return false', (done) => {
        assert.equal(checkAge(1), false);
        done();
    });

    it('Return true', (done) => {
        assert.equal(checkAge(55), true);
        done();
    })
});
