const assert = require('chai').assert;
const {copyArray} = require('../tasks/task12');

describe('#ARRAY TASK12 CREATE A COPY ARRAY', () => {
    it ('Create copy: ', (done) => {
        assert.deepEqual(copyArray(["a", "b", "c"]), ["a", "b", "c"]);
        done();
    });
});