const assert = require('chai').assert;
const {insert} = require('../tasks/task10');

describe('#ARRAY TASK10 Insert element', () => {
    it ('Should be: [ I, am, an, awesome, array]', (done) => {
        assert.deepEqual(insert(['I', 'am', 'an', 'array'], 'awesome'),[ 'I', 'am', 'an', 'awesome', 'array' ]);
        done()
    });
});