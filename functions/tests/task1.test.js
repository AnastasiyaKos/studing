const assert = require('chai').assert;
const {multiply} = require('../tasks/task1');

describe('Test task 1', () => {

    it('Should be zero', (done)=> {
        assert.equal(multiply(), 0);
        done();
    });

    it('Should be four', (done)=> {
        assert.equal(multiply(2, 2), 4);
        done();
    });

    it('Should be six', (done)=> {
        assert.equal(multiply(1, 2, 3), 6);
        done();
    });

    it('Should be 1', (done)=> {
        assert.equal(multiply(1, 1, 1, 1), 1);
        done();
    })
});