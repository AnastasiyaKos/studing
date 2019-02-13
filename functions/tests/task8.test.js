const assert = require('chai').assert;
const {pow} = require('../tasks/task8');

describe('#TASK8 Возести X в степерь N', () => {
    it ('Should be 32', (done) => {
        assert.equal(pow(2, 5), 32);
        done();
    });

    it ('Should be 16', (done) => {
        assert.equal(pow(4, 2), 16);
        done();
    });

    it ('Should be 27', (done) => {
        assert.equal(pow(3, 3), 27);
        done();
    });
});