const assert = require('chai').assert;
const {getCodeStringFromText} = require('../tasks/task3');

describe('#TASK3 getCodeStringFromText', () => {
    it ('Get unicode string', (done) => {
        assert.equal(getCodeStringFromText('HELLO'), '72 69 76 76 79');
        done();
    });

    it ('Get unicode string', (done) => {
        assert.equal(getCodeStringFromText('hello'), '104 101 108 108 111');
        done();
    });

    it ('Get unicode string', (done) => {
        assert.equal(getCodeStringFromText('help'), '104 101 108 112');
        done();
    });
});