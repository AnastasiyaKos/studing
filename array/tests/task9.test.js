const assert = require('chai').assert;
const {delElem} = require('../tasks/task9');

describe('#ARRAY TASK9 Replace element', () => {
    it ('Should be: [ 1, 2, three, four, 5 ]', (done) => {
        assert.deepEqual(delElem([1,2,3,4,5]), [ 1, 2, 'three', 'four', 5 ]);
        done();
    });
});