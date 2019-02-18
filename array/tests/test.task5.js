const assert = require('chai').assert;
const {changeCollection} = require('../tasks/task5');

describe('#ARRAY TASK5 Remove first array element', () => {
    it ('Should be: 2, 3', (done) => {
        assert.deepEqual(changeCollection([1, 2, 3]), [[2, 3]]);
        done()
    });

    it ('Should be: 2, 3; no', (done) => {
        assert.deepEqual(changeCollection([1, 2, 3], ['yes', 'no']), [[2, 3], ['no']]);
        done()
    });

    it ('Should be: skazka', (done) => {
        assert.deepEqual(changeCollection(['kek', 'skazka']), [['skazka']]);
        done()
    });
});