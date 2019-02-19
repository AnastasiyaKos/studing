const assert = require('chai').assert;
const {getLastElement} = require('../tasks/task3');

describe('#ARRAY TASK3 Get last element', () => {
    it ('should be: cat', (done) => {
        assert.equal(getLastElement(['dog', 'Iissus', 'cat']), 'cat');
        done()
    });

    it ('should be: 45', (done) => {
        assert.equal(getLastElement(['dog', 'JS', 45]), 45);
        done()
    });

    it ('should be: MuSoR', (done) => {
        assert.equal(getLastElement([52, 84, 'MuSoR']), 'MuSoR');
        done()
    });
});