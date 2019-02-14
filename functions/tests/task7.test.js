const assert = require('chai').assert;
const {min} = require('../tasks/task7');

describe('#TASK 7 Return min value', () => {
    it('Should be 3', (done) =>{
        assert.equal(min(4, 3), 3);
        done();
    });

    it('Should be 10', (done) =>{
        assert.equal(min(40, 10), 10);
        done();
    });

    it('Should be 4', (done) =>{
        assert.equal(min(4, 15), 4);
        done();
    });
});