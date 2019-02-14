const assert = require('chai').assert;
const {reverseString} = require('../tasks/task2');

describe('#TASK2 reverseString', function () {
    it('Should be: olleH', (done) => {
        assert.equal(reverseString('Hello'), 'olleH');
        done();
    });

    it('Should be: kitok', (done) => {
        assert.equal(reverseString('kotik'), 'kitok');
        done();
    });

    it('Should be: YoU pIdOr', (done) => {
        assert.equal(reverseString('rOdIp UoY'), 'YoU pIdOr');
        done();
    });
});